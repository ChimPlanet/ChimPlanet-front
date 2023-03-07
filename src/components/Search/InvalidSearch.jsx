import styled from 'styled-components';

const Container = styled.div``;

const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
`;

export default function InvalidSearch() {
  return (
    <Container>
      <Title>올바른 검색어를 입력해 주세요</Title>
    </Container>
  );
}
