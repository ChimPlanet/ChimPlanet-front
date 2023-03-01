import styled from 'styled-components';
import JobOfferSectionContent from './jobOfferSectionContent';
import JobOfferSectionHeader from './jobOfferSectionHeader';
import { Suspense } from 'react';
import Loading from '@/components/Loading';
import useJobSection from '@/hooks/useJobSection';

const Container = styled.section``;

export default function JobOfferSection() {
  const { context, dispatch, ActionType } = useJobSection();
  return (
    <Container>
      <JobOfferSectionHeader
        title="실시간 인기 구인글"
        isNext={context.isNext}
        isPrev={context.isPrev}
        nextPage={() => dispatch({ type: ActionType.NEXT })}
        prevPage={() => dispatch({ type: ActionType.PREV })}
      />
      <Suspense fallback={<Loading />}>
        <JobOfferSectionContent
          setLength={(length) =>
            dispatch({ type: ActionType.SET_LENGTH, payload: length })
          }
          perPage={context.perPage}
          page={context.page}
        />
      </Suspense>
    </Container>
  );
}
