import { Suspense, useMemo } from 'react';
import {
  styled,
  Loading,
  useScreenType,
  ErrorBoundary,
  JobOfferMapContent,
  Fallback,
} from 'chimplanet-ui';

import { useRecentOffers } from '@/query/offer';
import { OfferColumnMap, OfferWidthMap } from '@/utils/offerSizeMap';

export default function RecentSection() {
  return (
    <Container>
      <Title>최근에 올라온 구인글</Title>
      <ErrorBoundary fallback={<Loading />}>
        <Suspense fallback={<Fallback />}>
          <RecentSectionContent />
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
}

function RecentSectionContent() {
  const { data: offers } = useRecentOffers();
  const sizeType = useScreenType();

  const config = useMemo(
    () => ({
      pageCount: OfferColumnMap[sizeType],
      offerWidth: OfferWidthMap[sizeType],
      /** @type {import('chimplanet-ui/build/components/JobOffer/JobOffer').JobOfferProps['rowLayoutConfig']} */
      rowLayoutConfig: {
        height: 120,
        gap: 20,
      },
      /** @type {import('chimplanet-ui/build/components/JobOffer/JobOffer').JobOfferProps['direction']} */
      direction: sizeType !== 'mobile' ? 'column' : 'row',
    }),
    [sizeType],
  );

  return (
    <JobContent column={config.pageCount}>
      <JobOfferMapContent
        jobs={offers.slice(0, config.pageCount * 2)}
        offerWidth={config.offerWidth}
        direction={config.direction}
        rowLayoutConfig={config.rowLayoutConfig}
      />
    </JobContent>
  );
}

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
  row-gap: 70px;
`;
