import { useEffect, useLayoutEffect, useMemo } from 'react';
import {
  PropTypes,
  styled,
  JobOfferMapContent,
  useScreenType,
} from 'chimplanet-ui';

import { useJobOfferFromDynamic } from '@/query/offer';
import { prefetchImages } from '@/utils';

import { useArticleContext } from '@/context/articleContext';
import useBookmark from '@/hooks/useBookmark';

/**
 * @typedef {Object} JobOfferSectionContentProps
 * @property {number} page
 * @property {number} perPage
 * @property {(length: number) => void} setLength
 * @property {number | false} maxLength
 * @property {Function} fetchFunction
 *
 *
 * @param {JobOfferSectionContentProps}
 * @returns
 */
export default function JobOfferSectionContent({
  queryKey,
  cursor,
  setLength,
  fetchFunction,
  maxLength,
}) {
  const [, { open }] = useArticleContext();
  const { toggle, is } = useBookmark();
  const { data: offers } = useJobOfferFromDynamic(
    queryKey,
    fetchFunction,
    maxLength,
  );
  const screenType = useScreenType();

  const layoutConfig = useMemo(
    () => OfferLayoutConfig[screenType],
    [screenType],
  );

  useLayoutEffect(
    () => Array.isArray(offers) && setLength(offers.length),
    [offers],
  );

  // ! 미리 이미지 가져오기
  useEffect(() => {
    if (Array.isArray(offers)) {
      prefetchImages(
        offers.filter(({ isThumbnail }) => isThumbnail),
        offerThumbnailPropertyGetter,
      );
    }
  }, [offers]);

  return (
    <Container
      moveX={-cursor * (layoutConfig.width + layoutConfig.columnGap)}
      gap={layoutConfig.columnGap}
      vertical={screenType === 'mobile'}
    >
      <JobOfferMapContent
        jobs={offers}
        offerWidth={layoutConfig.width}
        isBookmarked={is}
        direction={screenType !== 'mobile' ? 'column' : 'row'}
        rowLayoutConfig={defaultRowLayoutConfig}
        onClick={open}
        onBookmarkClick={toggle}
      />
    </Container>
  );
}
JobOfferSectionContent.propTypes = {
  cursor: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired,
};

function offerThumbnailPropertyGetter(offer) {
  return offer.thumbnailURL;
}
/** @type {import('chimplanet-ui/build/components/JobOffer/JobOffer').JobOfferProps['rowLayoutConfig']} */
const defaultRowLayoutConfig = {
  height: 120,
  gap: 20,
};

/** @type {{ [K in import('chimplanet-ui').ScreenType]: { columnGap: number, width: number | string } }} */
const OfferLayoutConfig = {
  desktop: {
    columnGap: 20,
    width: 250,
  },
  tablet: {
    columnGap: 25,
    width: 220,
  },
  mobile: {
    columnGap: 20,
    width: '100%',
  },
};

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: ${({ vertical }) => (!vertical ? 'row' : 'column')};
  gap: ${(p) => `${p.gap}px`};
  width: fit-content;
  transform: ${(p) => `translate3d(${p.moveX}px, 0px, 0px)`};
  transition: transform 0.2s ease-in-out;
`;
