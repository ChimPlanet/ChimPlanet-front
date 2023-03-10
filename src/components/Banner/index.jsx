import Carousel from './Carousel';
import { useBanner } from '@/query/banner';
import styled from 'styled-components';
import { useCallback, useMemo, Suspense } from 'react';
import theme from '@/theme';
import { useSizeType } from '@/context/sizeTypeContext';
import BannerSkeleton from '@/components/Skeletons/BannerSkeleton';
import { useLocation } from 'react-router-dom';
import { HOME_PATH } from '@/constants/route';

const Padding = 10;

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

const carouselConfig = {
  delay: 5000,
  translateDuration: 500,
};

function HomeCarouselContent() {
  const { data: banners } = useBanner();
  const sizeType = useSizeType();

  const handleClick = useCallback(
    (index) => Array.isArray(banners) && window.open(banners[index].href),
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
    <Carousel
      onClick={handleClick}
      itemWidth={itemWidth + 2 * Padding}
      {...carouselConfig}
    >
      {banners.map(({ imageUrl, href }) => (
        <AnchorBannerItem key={imageUrl}>
          <img
            referrerPolicy="no-referrer"
            width={itemWidth}
            height={375}
            src={imageUrl}
            alt={href}
          />
        </AnchorBannerItem>
      ))}
    </Carousel>
  );
}
/**
 * @typedef {object} HomeCarouselProps
 *
 * @param {HomeCarouselProps}
 * @returns
 */
export default function Banner() {
  const { pathname } = useLocation();

  return pathname === HOME_PATH ? (
    <Container>
      <Suspense fallback={<BannerSkeleton />}>
        <HomeCarouselContent />
      </Suspense>
    </Container>
  ) : null;
}
