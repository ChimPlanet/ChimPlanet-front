import styled from 'styled-components';
import JobOfferSectionContent from './jobOfferSectionContent';
import JobOfferSectionHeader from './jobOfferSectionHeader';
import { Suspense, useCallback } from 'react';
import Loading from '@/components/Loading';
import useJobSection from '@/hooks/useJobSection';
import PropTypes from 'prop-types';

const Container = styled.section``;

/**
 * @param {{fetchFunction: Function, title: string}}
 * @returns
 */
export default function JobOfferSection({ fetchFunction, title }) {
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
        title={title}
        isNext={context.isNext}
        isPrev={context.isPrev}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      <Suspense fallback={<Loading />}>
        <JobOfferSectionContent
          fetchFunction={fetchFunction}
          setLength={setLength}
          perPage={context.perPage}
          page={context.page}
        />
      </Suspense>
    </Container>
  );
}

JobOfferSection.propTypes = {
  fetchFunction: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
