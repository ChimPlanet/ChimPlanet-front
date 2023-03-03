import fetchRecentOffer from '@/api/job/fetchRecentOffer';
import JobOfferMapContent from '@/components/JobOffer/jobOfferMapContent';
import JobOfferSection from '@/components/JobOffer/JobOfferSection';
import Loading from '@/components/Loading';
import { useSizeType } from '@/context/sizeTypeContext';
import { useJobOfferFromDynamic } from '@/query/job';
import { Suspense, useMemo } from 'react';
import styled from 'styled-components';

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
  const { data: offers } = useJobOfferFromDynamic(fetchRecentOffer);
  const sizeType = useSizeType();

  const pageCount = useMemo(() => (sizeType === 'desktop' ? 4 : 3), [sizeType]);

  return (
    <JobContent column={pageCount}>
      <JobOfferMapContent jobs={offers.slice(0, pageCount * 2)} />
    </JobContent>
  );
}
