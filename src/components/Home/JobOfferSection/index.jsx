import styled from 'styled-components';
import JobOfferSectionContent from './jobOfferSectionContent';
import JobOfferSectionHeader from './jobOfferSectionHeader';
import { Suspense } from 'react';
import Loading from '@/components/Loading';
import useJobSection from '@/hooks/useJobSection';

const Container = styled.section``;

export default function JobOfferSection() {
  const { setLength, context, nextPage, prevPage } = useJobSection();
  return (
    <Container>
      <JobOfferSectionHeader
        title="실시간 인기 구인글"
        isNext={context.isNext}
        isPrev={context.isPrev}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      <Suspense fallback={<Loading />}>
        <JobOfferSectionContent
          setLength={setLength}
          perPage={context.perPage}
          page={context.page}
        />
      </Suspense>
    </Container>
  );
}
