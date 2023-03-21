import Carousel from './Carousel';
import styled from 'styled-components';
import { useCallback, useMemo, Suspense } from 'react';

import theme from '@/theme';
import { useSizeType } from '@/context/sizeTypeContext';
import { Banner as BannerVO } from '@/service/banner';

const Padding = 10;

const carouselConfig = {
  delay: 5000,
  translateDuration: 500,
};

/**
 * @typedef {object} HomeCarouselProps
 *
  * @param {{banners: BannerVO[]}}
 * @returns
 */
export default function Banner({banners}) {

  const sizeType = useSizeType();

  const handleClick = useCallback(
    (index) => Array.isArray(banners) && window.open(banners[index].redirectUrl),
    [banners],
  );

  const itemWidth = useMemo(() => {
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
        {banners?.map(({id, sourceUrl, redirectUrl}) => (
          <AnchorBannerItem key={id}>
          <img
          referrerPolicy="no-referrer"
          width={itemWidth}
          height={375}
          src={sourceUrl}
          alt={redirectUrl}
          />
          </AnchorBannerItem>
        ))}
      </Carousel>
    </Container>
  );
}



const Container = styled.section`
  height: 375px;
  margin: 30px 0px;
  overflow: hidden;
  cursor: pointer;

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

