import { styled } from '@chimplanet/ui';
import { Skeleton } from '@mui/material';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function BannerSkeleton() {
  return (
    <Wrapper>
      <Skeleton variant="rounded" width={1060} height={375} />
    </Wrapper>
  );
}
