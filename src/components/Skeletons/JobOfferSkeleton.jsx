import { Skeleton } from '@mui/material';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Typography = styled.div`
  margin-top: 10px;
`;

export default function JobOfferSkeleton() {
  return (
    <Wrapper>
      <Skeleton variant="rounded" width={250} height={250} />
      <Typography>
        <Skeleton variant="text" sx={{ fontSize: 30 }} />
        <Skeleton variant="text" sx={{ fontSize: 20 }} />
      </Typography>
    </Wrapper>
  );
}
