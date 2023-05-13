import { styled, useScreenType } from 'chimplanet-ui';

import JobTableHeaderCondition from './JobTableHeaderCondition';
import JobTableHeaderOrderByButton from './JobTableHeaderOrderByButton';
import { Divider } from '@mui/material';

export function JobTableHeader() {
  const screenType = useScreenType();

  return (
    <Container>
      <Content>
        <JobTableHeaderCondition reverse={screenType !== 'desktop'} />
        <JobTableHeaderOrderByButton />
      </Content>
      {screenType !== 'desktop' && <Divider />}
    </Container>
  );
}
export default JobTableHeader;

const Container = styled.div`
  & hr {
    border-bottom: ${({ theme }) =>
      `1px solid ${theme.borderColors.quaternary}`};
  }
`;

const Content = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
`;
