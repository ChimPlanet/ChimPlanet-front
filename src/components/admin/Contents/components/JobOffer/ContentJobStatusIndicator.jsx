import styled from 'styled-components';

export default function ContentJobStatusIndicator({ isClosed, isRegular }) {
  return (
    <Container>
      <Indicator color={isClosed ? '#ED2040' : '#00BD2F'}>
        {isClosed ? '마감' : '구인 중'}
      </Indicator>
      {isRegular && <Indicator color="#969696">상시모집</Indicator>}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 12px;
  font-weight: 500;
`;

const Indicator = styled.span`
  padding: 2px 13px;
  /* padding-top: 5px; */
  border: ${({ color }) => `1px solid ${color}`};
  border-radius: 4px;
  color: ${({ color }) => color};
  margin-right: 8px;
  font-style: normal;
`;
