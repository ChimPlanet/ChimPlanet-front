import { useEffect, useLayoutEffect, useMemo } from 'react';
import {
  PropTypes,
  styled,
  JobOfferMapContent,
  useScreenType,
} from 'chimplanet-ui';

import { useJobOfferFromDynamic } from '@/query/offer';
import { prefetchImages } from '@/utils';

import { OfferWidthMap } from '@/utils/offerSizeMap';
import { BookmarkContext } from '@/utils/Context/bookmarkContext';
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
  perPage,
  setLength,
  fetchFunction,
  maxLength,
}) {
  const [, { open }] = useArticleContext();
  const { toggle } = useBookmark();
  const { data: offers } = useJobOfferFromDynamic(
    queryKey,
    fetchFunction,
    maxLength,
  );
  const screenType = useScreenType();

  const offerWidth = useMemo(() => OfferWidthMap[screenType], [screenType]);

  const offerColumnGap = useMemo(
    () => (screenType === 'desktop' ? 20 : 25),
    [screenType],
  );

  const layoutConfig = useMemo(
    () =>
      screenType === 'desktop'
        ? {
            columnGap: 20,
            width: 250,
          }
        : { columnGap: 25, width: 220 },
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
        (elem) => elem.thumbnailURL,
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
        offerOrientation={screenType === 'mobile' ? 'horizontal' : 'vertical'}
        isBookmarked={(id) =>
          BookmarkContext.getInstance().getBookmarkSet().has(id)
        }
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

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: ${({ vertical }) => (!vertical ? 'row' : 'column')};
  gap: ${(p) => `${p.gap}px`};
  width: fit-content;
  transform: ${(p) => `translate3d(${p.moveX}px, 0px, 0px)`};
  transition: transform 0.2s ease-in-out;
`;
