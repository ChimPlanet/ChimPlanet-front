import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Suspense, useCallback } from 'react';

import JobOfferSectionContent from './components/jobOfferSectionContent';
import JobOfferSectionHeader from './components/jobOfferSectionHeader';
import useJobSection from '@/common/components/JobOffer/hooks/useJobSection';
import JobSelectionSkeleton from '@/components/Skeletons/JobSectionSkeleton';

const Container = styled.section`
  min-height: 460px;
  overflow-x: hidden;
  width: ${(props) => props.width};
`;

/**
 * @typedef {Object} JobOfferSectionProps
 * @property {string} title
 * @property {boolean?} hideArrow
 * @property {JSX.Element} detail
 * @property {Function} fetchFunction
 * @property {string} queryKey
 *
 *
 * @param {JobOfferSectionProps} props
 * @returns
 */
export default function JobOfferSection({
  queryKey,
  fetchFunction,
  title,
  hideArrow = false,
  detail = <div></div>,
}) {
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
    <Container width={`${context.perPage * 270 - 20}px`}>
      <JobOfferSectionHeader
        title={title}
        detail={detail}
        hideArrow={hideArrow}
        isNext={context.isNext}
        isPrev={context.isPrev}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      <Suspense fallback={<JobSelectionSkeleton />}>
        <JobOfferSectionContent
          queryKey={queryKey}
          fetchFunction={fetchFunction}
          setLength={setLength}
          perPage={context.perPage}
          cursor={context.cursor}
        />
      </Suspense>
    </Container>
  );
}

JobOfferSection.propTypes = {
  fetchFunction: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
