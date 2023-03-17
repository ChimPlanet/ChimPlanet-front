import styled from 'styled-components';
import { ArrowLeftIcon, ArrowRightIcon } from './arrowIcon';

/**
 *
 * @param {{maxLength: number, cursor: number, setCursor: (cursor: number) => void}}
 * @returns
 */
export default function CarouselIndicator({
  maxLength,
  cursor,
  setCursor,
  setIsStop,
}) {
  return (
    <Container
      onMouseEnter={() => setIsStop(true)}
      onMouseLeave={() => setIsStop(false)}
    >
      <Button onClick={() => setCursor(cursor - 1)}>
        <ArrowLeftIcon />
      </Button>
      <Button onClick={() => setCursor(cursor + 1)}>
        <ArrowRightIcon />
      </Button>
      <Indicator>{`${
        [maxLength, cursor + 1, 1].sort()[1]
      } / ${maxLength}`}</Indicator>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 20px;
  z-index: 1;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Button = styled.span`
  display: inline-block;
  width: 35px;
  height: 35px;
  text-align: center;
  background-color: #191919;
  line-height: 35px;
  border-radius: 100px;
`;

const Indicator = styled.div`
  background-color: #191919;
  text-align: center;

  width: 80px;
  padding: 10px 20px;
  border-radius: 100px;
`;
