import styled from 'styled-components';
import JobOfferSectionContent from './jobOfferSectionContent';
import JobOfferSectionHeader from './jobOfferSectionHeader';
import { Suspense, useCallback } from 'react';
import Loading from '@/components/Loading';
import useJobSection from '@/hooks/useJobSection';

const Container = styled.section``;

export default function JobOfferSection() {
  const { context, dispatch, ActionType } = useJobSection();

  const setLength = useCallback(
    (length) => dispatch({ type: ActionType.SET_LENGTH, payload: length }),
    [dispatch],
  );
  const nextPage = useCallback(
    () => dispatch({ type: ActionType.NEXT }),
    [dispatch],
  );
  const prevPage = useCallback(
    () => dispatch({ type: ActionType.PREV }),
    [dispatch],
  );

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
