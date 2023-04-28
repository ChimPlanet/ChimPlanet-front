import { useScreenType, styled } from 'chimplanet-ui';

import { useMemo } from 'react';
import JobOfferSkeleton from './JobOfferSkeleton';

const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
`;

export default function JobSelectionSkeleton() {
  const sizeType = useScreenType();

  const columns = useMemo(() => (sizeType === 'desktop' ? 4 : 3), [sizeType]);

  return (
    <Container columns={columns}>
      {new Array(columns).fill(0).map((_, i) => (
        <JobOfferSkeleton key={i} />
      ))}
    </Container>
  );
}
