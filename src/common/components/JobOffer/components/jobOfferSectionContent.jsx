import { useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useJobOfferFromDynamic } from '@/query/offer';
import { JobOfferMapContent } from '@/common/components/JobOffer';
import { prefetchImages } from '@/utils';
import { useSizeType } from '@/context/sizeTypeContext';
import { useMemo } from 'react';

JobOfferSectionContent.propTypes = {
  cursor: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired,
};

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
  const sizeType = useSizeType();

  const offerWidth = useMemo(
    () => (sizeType === 'desktop' ? 250 : 220),
    [sizeType],
  );

  const offerColumnGap = useMemo(
    () => (sizeType === 'desktop' ? 20 : 25),
    [sizeType],
  );

  useLayoutEffect(
    () => Array.isArray(offers) && setLength(offers.length),
    [offers],
  );

  // ! 미리 이미지 가져오기
  useEffect(() => {
    if (Array.isArray(offers)) {
      prefetchImages(
        offers.filter(({ isThumbnail }) => isThumbnail),
        (elem) => elem.thumbnailURL,
      );
    }
  }, [offers]);

  return (
    <Container
      moveX={-cursor * (offerWidth + offerColumnGap)}
      gap={offerColumnGap}
    >
      <JobOfferMapContent jobs={offers} offerWidth={offerWidth} />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  gap: ${(p) => `${p.gap}px`};
  width: fit-content;
  transform: ${(p) => `translate3d(${p.moveX}px, 0px, 0px)`};
  transition: transform 0.2s ease-in-out;
`;
