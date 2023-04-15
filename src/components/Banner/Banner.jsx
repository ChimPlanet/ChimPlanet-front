import { useCallback, useMemo } from 'react';

import { baseTheme } from '@/theme';
import { useSizeType } from '@/context/sizeTypeContext';
import { Banner as BannerVO } from '@/service/banner';

import Carousel from './Carousel';
import { horizontalPadding, Container, AnchorBannerItem } from './Banner.style';

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
export default function Banner({ banners }) {
  const sizeType = useSizeType();

  const handleClick = useCallback(
    (index) =>
      Array.isArray(banners) && window.open(banners[index].redirectUrl),
    [banners],
  );

  const itemWidth = useMemo(() => {
    switch (sizeType) {
      case 'desktop':
        return baseTheme.widths.desktop;
      case 'tablet':
        return baseTheme.widths.tablet;
      case 'mobile':
        return 290;
    }
  }, [sizeType]);

  return (
    <Container>
      <Carousel
        onClick={handleClick}
        itemWidth={itemWidth + 2 * horizontalPadding}
        observedValueToReset={sizeType}
        {...carouselConfig}
      >
        {banners?.map(({ id, sourceUrl, redirectUrl }) => (
          <AnchorBannerItem key={id}>
            <img
              referrerPolicy="no-referrer"
              width={itemWidth}
              src={sourceUrl}
              alt={redirectUrl}
            />
          </AnchorBannerItem>
        ))}
      </Carousel>
    </Container>
  );
}
