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
      width: ${theme.widths.desktop + 2 * Padding}px;
    }`}
  `}
  ${({ theme }) => theme.media.tablet`
    ${`.carousel__container {
      width: ${theme.widths.tablet + 2 * Padding}px;
    }`}
  `}
`;

const AnchorBannerItem = styled.div`
  height: 100%;
  -webkit-user-drag: none;

  ${({ theme }) => theme.media.desktop`
    ${`width: ${theme.widths.desktop + 2 * Padding}px`};
  `}
  ${({ theme }) => theme.media.tablet`
    ${`width: ${theme.widths.tablet + 2 * Padding}px`};
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
  const { data: banners } = useBanner();
  const sizeType = useResize();

  const handleClick = useCallback(
    (index) => Array.isArray(banners) && window.open(banners[index].href),
    [banners],
  );

  const itemWidth = useMemo(() => {
    console.log(sizeType);
    switch (sizeType) {
      case 'desktop':
        return theme.widths.desktop;
      default:
        return theme.widths.tablet;
    }
  }, [sizeType]);

  return (
    <Container>
      <Carousel
        onClick={handleClick}
        itemWidth={itemWidth + 2 * Padding}
        {...carouselConfig}
      >
        {banners.map(({ imageUrl, href }) => (
          <AnchorBannerItem key={imageUrl}>
            <img referrerPolicy="no-referrer" src={imageUrl} alt={href} />
          </AnchorBannerItem>
        ))}
      </Carousel>
    </Container>
  );
}
