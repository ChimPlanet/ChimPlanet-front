import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBelowIcon from '@/common/icons/ArrowBelowIcon';
import { JOB_PATH } from '@/constants/route';

export default function MoreOfferButton() {
  return (
    <Container to={JOB_PATH}>
      더 많은 공고글 보기&nbsp;&nbsp;
      <ArrowBelowIcon />
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
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  margin-top: 70px;
`;
