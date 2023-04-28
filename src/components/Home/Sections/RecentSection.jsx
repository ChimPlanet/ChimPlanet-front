import { Suspense, useMemo } from 'react';
import { styled, Loading, useScreenType } from 'chimplanet-ui';

import { JobOfferMapContent } from '@/common/components/JobOffer';

import { useRecentOffers } from '@/query/offer';
import { OfferColumnMap, OfferWidthMap } from '@/utils/offerSizeMap';

export default function RecentSection() {
  return (
    <Container>
      <Title>최근에 올라온 구인글</Title>
      <Suspense fallback={<Loading />}>
        <RecentSectionContent />
      </Suspense>
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
    }),
    [sizeType],
  );

  return (
    <JobContent column={config.pageCount}>
      <JobOfferMapContent
        jobs={offers.slice(0, config.pageCount * 2)}
        offerWidth={config.offerWidth}
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
