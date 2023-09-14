import {
  ErrorBoundary,
  JobOfferMapContent,
  Loading,
  styled,
  useScreenType,
} from '@chimplanet/ui';
import { Suspense, useMemo } from 'react';

import { FallbackFetching } from '@common/components/FallbackFetching';
import { LinkFooter } from '@common/components/LinkFooter';
import { useArticle } from '@components/ArticleRenderer/hook';
import useBookmark from '@hooks/useBookmark';
import { useRecentOffers } from '@query/offer';
import { Paths } from '@routes';
import MoreOfferButton from '../MoreOfferButton';

export default function RecentSection() {
  return (
    <Container>
      <Title>최근에 올라온 구인글</Title>
      <ErrorBoundary fallback={<Loading />}>
        <Suspense fallback={<FallbackFetching />}>
          <RecentSectionContent />
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
}

function RecentSectionContent() {
  const { data: offers } = useRecentOffers();
  const [, { open }] = useArticle();

  const screenType = useScreenType();
  const { toggle, is } = useBookmark();

  const config = useMemo(() => OfferConfig[screenType], [screenType]);

  return (
    <>
      <JobContent column={config.numOfColumn}>
        <JobOfferMapContent
          jobs={offers.slice(0, config.itemEnd)}
          offerWidth={config.width}
          direction={config.direction}
          rowLayoutConfig={config.rowConfig}
          onBookmarkClick={toggle}
          onClick={open}
          isBookmarked={is}
        />
      </JobContent>
      {screenType === 'mobile' ? (
        <LinkFooter text="자세히보기" href={Paths.Job} />
      ) : (
        <MoreOfferButton />
      )}
    </>
  );
}

const OfferConfig = {
  desktop: {
    numOfColumn: 4,
    width: 250,
    itemEnd: 8,
    direction: 'column',
  },
  tablet: {
    numOfColumn: 3,
    width: 220,
    itemEnd: 6,
    direction: 'column',
  },
  mobile: {
    numOfColumn: 1,
    width: '100%',
    itemEnd: 6,
    direction: 'row',
    /** @type {import('@chimplanet/ui/build/components/JobOffer/JobOffer').JobOfferProps['rowLayoutConfig']} */
    rowConfig: {
      height: 120,
      gap: 20,
    },
  },
};

const Container = styled.div`
  margin-top: 65px;
  min-height: 700px;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
`;

const JobContent = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: ${({ column }) => `repeat(${column}, 1fr)`};
  gap: 20px;
  row-gap: 60px;

  ${({ theme }) => theme.media.mobile`
    row-gap: 20px;
  `}
`;
