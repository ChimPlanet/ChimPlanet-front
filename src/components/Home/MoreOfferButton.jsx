import { Link, styled } from 'chimplanet-ui';

import { JOB_PATH } from '@/constants/route';
import { ChevronDown } from 'chimplanet-ui/icons';

export default function MoreOfferButton() {
  return (
    <Container to={JOB_PATH}>
      &nbsp; 더 많은 공고글 보기&nbsp;
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
`;
