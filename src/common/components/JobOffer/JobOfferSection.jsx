import {
  ErrorBoundary,
  PropTypes,
  styled,
  useScreenType,
} from '@chimplanet/ui';
import { Suspense, useCallback } from 'react';

import useJobSection from '@/common/components/JobOffer/hooks/useJobSection';
import JobSelectionSkeleton from '@/components/Skeletons/JobSectionSkeleton';
import JobOfferSectionContent from './components/jobOfferSectionContent';
import JobOfferSectionHeader from './components/jobOfferSectionHeader';

import { FallbackFetching } from '../FallbackFetching';
import { LinkFooter } from '../LinkFooter';

/**
 * @typedef {Object} JobOfferSectionProps
 * @property {string} title
 * @property {boolean?} hideArrow
 * @property {Function} fetchFunction
 * @property {string} queryKey
 * @property {number} maxLength
 * @property {string?} goTo
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
  goTo,
  maxLength,
}) {
  const { context, dispatch, ActionType } = useJobSection();

  const setLength = useCallback(
    (length) => dispatch({ type: ActionType.SET_LENGTH, payload: length }),
    [dispatch],
  );

  const sizeType = useScreenType();

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
        goTo={sizeType !== 'mobile' && goTo}
        hideArrow={hideArrow}
        isNext={context.isNext}
        isPrev={context.isPrev}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      <ErrorBoundary fallback={<FallbackFetching />}>
        <Suspense fallback={<JobSelectionSkeleton />}>
          <JobOfferSectionContent
            queryKey={queryKey}
            fetchFunction={fetchFunction}
            setLength={setLength}
            perPage={context.perPage}
            cursor={context.cursor}
            maxLength={maxLength}
          />
        </Suspense>
      </ErrorBoundary>
      {sizeType === 'mobile' && goTo && (
        <LinkFooter text="자세히보기" href={goTo} />
      )}
    </Container>
  );
}

JobOfferSection.propTypes = {
  fetchFunction: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

const Container = styled.section`
  min-height: 460px;
  height: fit-content;
  overflow-x: hidden;

  ${({ theme }) => theme.media.mobile`
    overflow: hidden;
  `}
`;
