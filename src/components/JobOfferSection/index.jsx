import styled from 'styled-components';
import JobOfferSectionContent from './jobOfferSectionContent';
import JobOfferSectionHeader from './jobOfferSectionHeader';
import { Suspense, useCallback } from 'react';
import Loading from '@/components/Loading';
import useJobSection from '@/hooks/useJobSection';
import PropTypes from 'prop-types';

const Container = styled.section``;

/**
 * @typedef {Object} JobOfferSectionProps
 * @property {string} title
 * @property {boolean?} hideArrow
 * @property {JSX.Element} detail
 * @property {Function} fetchFunction
 * @property {number?} numOfLines
 *
 *
 * @param {JobOfferSectionProps} props
 * @returns
 */
export default function JobOfferSection({
  fetchFunction,
  title,
  hideArrow = false,
  detail = <div></div>,
  numOfLines = 1,
}) {
  const { context, dispatch, ActionType } = useJobSection(numOfLines);

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
        detail={detail}
        hideArrow={hideArrow}
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
          numOfLines={numOfLines}
        />
      </Suspense>
    </Container>
  );
}

JobOfferSection.propTypes = {
  fetchFunction: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
