import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background-color: white;
  z-index: 1;
`;

/**
 *
 * @param {{maxLength: number, cursor: number, setCursor: (cursor: number) => void}}
 * @returns
 */
export default function CarouselIndicator({ maxLength, cursor, setCursor }) {
  return <Container>hello</Container>;
}
