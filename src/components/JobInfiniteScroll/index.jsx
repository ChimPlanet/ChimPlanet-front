import { useMemo } from 'react';
import styled from 'styled-components';
import { useSizeType } from '@/context/sizeTypeContext';
import { JobOfferMapContent } from '@/common/components/JobOffer';

const JobOfferContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ column }) => `repeat(${column}, 1fr)`};
  justify-items: center;
  gap: 20px;
  row-gap: 70px;
`;

export default function JobInfiniteScroll({ List }) {
  const sizeType = useSizeType();
  const pageCount = useMemo(() => (sizeType === 'desktop' ? 4 : 3), [sizeType]);
  return (
    <>
      <JobOfferContainer column={pageCount}>
        <JobOfferMapContent jobs={List} />
      </JobOfferContainer>
    </>
  );
}
