import { useJobOfferFromDynamic } from '@/query/job';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useEffect, useLayoutEffect, useMemo } from 'react';
import JobOfferMapContent from '@/components/JobOffer/jobOfferMapContent';

const Container = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: ${({ column }) => `repeat(${column}, 1fr)`};
  gap: 20px;
  row-gap: 70px;
`;

/**
 * @typedef {Object} JobOfferSectionContentProps
 * @property {number} page
 * @property {number} perPage
 * @property {(length: number) => void} setLength
 * @property {number} numOfLines
 * @property {Function} fetchFunction
 *
 *
 * @param {JobOfferSectionContentProps}
 * @returns
 */
export default function JobOfferSectionContent({
  page,
  perPage,
  setLength,
  fetchFunction,
  numOfLines,
}) {
  const { data: offers } = useJobOfferFromDynamic(fetchFunction);

  useLayoutEffect(
    () => Array.isArray(offers) && setLength(offers.length),
    [offers],
  );

  // ! 미리 이미지 가져오기
  useEffect(() => {
    if (Array.isArray(offers)) {
      offers.forEach((offer) => {
        if (offer.isThumbnail) new Image().src = offer.thumbnailURL;
      });
    }
  }, [offers]);

  const jobs = useMemo(
    () =>
      offers.slice(
        (page - 1) * perPage,
        Math.min(page * perPage, offers.length),
      ),
    [offers, page, perPage],
  );

  return (
    <Container column={perPage / numOfLines}>
      <JobOfferMapContent jobs={jobs} />
    </Container>
  );
}

JobOfferSectionContent.propTypes = {
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired,
};
