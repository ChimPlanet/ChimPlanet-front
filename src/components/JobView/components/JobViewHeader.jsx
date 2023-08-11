import JobViewHeaderCondition from './JobViewHeaderCondition';
import JobViewHeaderOrderByButton from './JobViewHeaderOrderByButton';
import JobViewHeaderQuery from './JobViewHeaderQuery';

import { styled, useScreenType } from '@chimplanet/ui';
import { Divider } from '@mui/material';

export default function JobViewHeader() {
  const screenType = useScreenType();

  if (screenType === 'desktop') {
    return (
      <Container>
        <JobViewHeaderCondition />
        <Row>
          <JobViewHeaderQuery />
          <JobViewHeaderOrderByButton />
        </Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <MobileContainer>
          <JobViewHeaderCondition reverse />
          <JobViewHeaderOrderByButton />
        </MobileContainer>
        <Divider />
      </Container>
    );
  }
}

const Container = styled.div`
  z-index: 0;
  & hr {
    border-bottom: ${({ theme }) =>
      `1px solid ${theme.borderColors.quaternary}`};
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

const MobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 5px; */
`;
