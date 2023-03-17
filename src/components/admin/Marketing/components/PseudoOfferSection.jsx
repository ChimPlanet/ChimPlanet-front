import { SectionLeftIcon, SectionRightIcon } from '@/common/icons';
import styled from 'styled-components';

export default function PseudoOfferSection({ title }) {
  return (
    <Container>
      <SectionHeader>
        <Title>{title}</Title>
        <SectionHeaderSide>
          <DetailLink>자세히보기</DetailLink>
          <NavButtons>
            <SectionLeftIcon />
            <SectionRightIcon />
          </NavButtons>
        </SectionHeaderSide>
      </SectionHeader>
    </Container>
  );
}

const Container = styled.div``;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SectionHeaderSide = styled.div`
  display: grid;
  grid-template-columns: 100px 70px;
`;

const DetailLink = styled.span`
  color: #000;
  font-weight: 500;
  font-size: 16px;
  text-align: left;
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  & svg {
    fill: #aab1bc;
    color: #aab1bc;
  }
`;

const Title = styled.p`
  font-size: 22px;
  font-weight: 700;
`;
