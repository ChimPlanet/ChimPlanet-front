import JobViewHeaderCondition from './JobViewHeaderCondition';
import JobViewHeaderQuery from './JobViewHeaderQuery';
import JobViewHeaderOrderByButton from './JobViewHeaderOrderByButton';

import styled from 'styled-components';

export default function JobViewHeader() {
  return (
    <Container>
      <JobViewHeaderCondition />
      <Row>
        <JobViewHeaderQuery />
        <JobViewHeaderOrderByButton />
      </Row>
    </Container>
  );
}

const Container = styled.div``;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;
