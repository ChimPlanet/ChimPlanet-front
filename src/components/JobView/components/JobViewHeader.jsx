import JobViewHeaderCondition from './JobViewHeaderCondition';
import JobViewHeaderQuery from './JobViewHeaderQuery';
import JobViewHeaderOrderByButton from './JobViewHeaderOrderByButton';

import { styled, useScreenType } from 'chimplanet-ui';
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
      <>
        <MobileContainer>
          <JobViewHeaderCondition reverse />
          <JobViewHeaderOrderByButton />
        </MobileContainer>
        <Divider />
      </>
    );
  }
}

const Container = styled.div`
  z-index: 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

const MobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;
