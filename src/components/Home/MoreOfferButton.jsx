import { Link, styled } from '@chimplanet/ui';

import { ChevronDown } from '@chimplanet/ui/icons';
import { Paths } from '@routes';

export default function MoreOfferButton() {
  return (
    <Container to={Paths.Job}>
      <span>더 많은 공고글 보기</span>
      <ChevronDown />
    </Container>
  );
}

const Container = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 500;
  border-radius: 100px;
  border: ${({ theme }) => `1px solid ${theme.borderColors.tertiary}`};
  margin-top: 70px;

  & span {
    margin-right: 5px;
  }
`;
