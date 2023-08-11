import { Link, styled } from '@chimplanet/ui';

import { ChevronRight } from '@chimplanet/ui/icons';

export default function LinkFooter({ href, text }) {
  return (
    <Container to={href}>
      <Text>{text}</Text>
      <ChevronRight />
    </Container>
  );
}

const Container = styled(Link)`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.specialColors.positive};

  & svg {
    margin-top: -2.5px;
  }
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-right: 15px;
`;
