import { Link, styled } from 'chimplanet-ui';

import { GreenRightChevronIcon } from '@/common/icons';

export default function LinkFooter({ href, text }) {
  return (
    <Container to={href}>
      <Text>{text}</Text>
      <GreenRightChevronIcon />
    </Container>
  );
}

const Container = styled(Link)`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.logo};
  margin-right: 15px;
`;
