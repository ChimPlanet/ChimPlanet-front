import styled from 'styled-components';
import JobOfferSectionContent from './jobOfferSectionContent';
import JobOfferSectionHeader from './jobOfferSectionHeader';
import { useState } from 'react';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

const Container = styled.section``;

export default function JobOfferSection() {
  const [page, setPage] = useState(1);
  return (
    <Container>
      <JobOfferSectionHeader />
      <Suspense fallback={<Loading />}>
        <JobOfferSectionContent />
      </Suspense>
    </Container>
  );
}
