import { SIZE_WIDTH } from '@/constants/size';
import Carousel from './Carousel';
import { useBanner } from '@/query/banner';
import styled from 'styled-components';
import { useCallback } from 'react';

const Padding = 10;

const Container = styled.section`
  display: flex;
  /* height: 375px; */
  height: 450px;
  margin: 30px auto;
  overflow: hidden;
  justify-content: center;
  .carousel__container {
    width: ${SIZE_WIDTH + 2 * Padding}px;
  }
`;

const AnchorBannerItem = styled.div`
  width: ${SIZE_WIDTH}px;
  height: 100%;
  -webkit-user-drag: none;

  & img {
    padding: 0px ${Padding}px;
    border-radius: 25px;
    /* padding: 0px 20px; */
  }
`;

const carouselConfig = {
  itemWidth: SIZE_WIDTH,
  delay: 2000,
  translateDuration: 500,
};

/**
 * @typedef {object} HomeCarouselProps
 *
 * @param {HomeCarouselProps}
 * @returns
 */
export default function HomeCarousel() {
  const { data } = useBanner();

  const handleClick = useCallback(
    (index) => {
      if (Array.isArray(data)) window.open(data[index].href);
    },
    [data],
  );

  return (
    <Container>
      <Carousel onClick={handleClick} {...carouselConfig}>
        {data.map(({ imageUrl, href }) => (
          <AnchorBannerItem key={imageUrl}>
            <img src={imageUrl} alt={href} />
          </AnchorBannerItem>
        ))}
      </Carousel>
    </Container>
  );
}
