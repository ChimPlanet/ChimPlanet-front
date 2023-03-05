import { useJobOfferFromDynamic } from '@/query/job';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useEffect, useLayoutEffect } from 'react';
import JobOfferMapContent from '@/components/JobOffer/jobOfferMapContent';

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  width: fit-content;
  transform: ${(p) => `translate3d(${p.moveX}px, 0px, 0px)`};
  transition: transform 0.2s ease-in-out;
`;

/**
 * @typedef {Object} JobOfferSectionContentProps
 * @property {number} page
 * @property {number} perPage
 * @property {(length: number) => void} setLength
 * @property {Function} fetchFunction
 *
 *
 * @param {JobOfferSectionContentProps}
 * @returns
 */
export default function JobOfferSectionContent({
  queryKey,
  cursor,
  perPage,
  setLength,
  fetchFunction,
}) {
  const { data: offers } = useJobOfferFromDynamic(queryKey, fetchFunction);

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

  return (
    <Container moveX={-cursor * 270} column={perPage}>
      <JobOfferMapContent jobs={offers} />
    </Container>
  );
}

JobOfferSectionContent.propTypes = {
  cursor: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired,
};
