import Carousel from './Carousel';
import { useBanner } from '@/query/banner';
import styled from 'styled-components';
import { useCallback, useMemo } from 'react';
import theme from '@/theme';
import useResize from '@/hooks/useResize';

const Padding = 10;

const Container = styled.section`
  height: 375px;
  margin: 30px 0px;
  overflow: hidden;

  ${({ theme }) => theme.media.desktop`
    ${`.carousel__container {
      width: ${theme.widths.desktop}px;
    }`}
  `}
  ${({ theme }) => theme.media.tablet`
    ${`.carousel__container {
      width: ${theme.widths.tablet}px;
    }`}
  `}
`;

const AnchorBannerItem = styled.div`
  height: 100%;
  width: ${({ theme }) => theme.widths.desktop}px;
  -webkit-user-drag: none;

  ${({ theme }) => theme.media.desktop`
    ${`width: ${theme.widths.desktop}px`};
  `}
  ${({ theme }) => theme.media.tablet`
    ${`width: ${theme.widths.tablet}px`};
  `}

  & img {
    padding: 0px ${Padding}px;
    border-radius: 25px;
  }
`;

const carouselConfig = {
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
  const w = useResize();

  const handleClick = useCallback(
    (index) => Array.isArray(data) && window.open(data[index].href),
    [data],
  );

  const itemWidth = useMemo(() => {
    switch (true) {
      case w >= theme.sizes.desktop:
        return theme.widths.desktop;
      default:
        return theme.widths.tablet;
    }
  }, [w]);

  return (
    <Container>
      <Carousel onClick={handleClick} itemWidth={itemWidth} {...carouselConfig}>
        {data.map(({ imageUrl, href }) => (
          <AnchorBannerItem key={imageUrl}>
            <img referrerPolicy="no-referrer" src={imageUrl} alt={href} />
          </AnchorBannerItem>
        ))}
      </Carousel>
    </Container>
  );
}
