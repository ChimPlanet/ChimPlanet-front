import styled from 'styled-components';

export const Container = styled.div`
  pointer-events: none;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const SectionHeaderSide = styled.div`
  display: grid;
  grid-template-columns: 100px 70px;
`;

export const DetailLink = styled.span`
  color: #000;
  font-weight: 500;
  font-size: 16px;
  text-align: left;
`;

export const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  & svg {
    fill: #aab1bc;
    color: #aab1bc;
  }
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: 700;
`;
