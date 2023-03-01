import { usePopularJobOffer } from '@/query/job';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLayoutEffect, useMemo } from 'react';
import JobOfferMapContent from '@/components/JobOffer/jobOfferMapContent';

const Container = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: ${({ column }) => `repeat(${column}, 1fr)`};
  gap: 20px;
`;

/**
 * @param {{page: number, perPage: number, setLength(length: number): void}}
 * @returns
 */
export default function JobOfferSectionContent({ page, perPage, setLength }) {
  const { data: offers } = usePopularJobOffer();

  useLayoutEffect(
    () => Array.isArray(offers) && setLength(offers.length),
    [offers],
  );

  const jobs = useMemo(
    () =>
      offers.slice(
        (page - 1) * perPage,
        Math.min(page * perPage, offers.length),
      ),
    [offers, page, perPage],
  );

  return (
    <Container column={perPage}>
      <JobOfferMapContent jobs={jobs} />
    </Container>
  );
}

JobOfferSectionContent.propTypes = {
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired,
};
