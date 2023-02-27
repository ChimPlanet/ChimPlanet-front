import styled from 'styled-components';
import Spinner from '../assets/loading-middle.gif';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 5%;
  }
`;

export default function Loading() {
  return (
    <Container>
      <img src={Spinner} alt="로딩중" />
    </Container>
  );
}
