import { useMemo } from 'react';
import { styled, useScreenType } from 'chimplanet-ui';

import { usePreloadContext } from '@/context/preloadContext';
import {
  filterSubBanner,
  getBannerByType,
} from '@/service/banner/banner-utils';
import { Banner } from '@/service/banner';

export default function SubBanner() {
  const screenType = useScreenType();
  const { banners } = usePreloadContext();

  /** @type {Banner} */
  const bannerItem = useMemo(
    () =>
      banners
        ? getBannerByType(
            filterSubBanner,
            banners,
            screenType === 'desktop' ? 'PC' : 'MOBILE',
          )[0]
        : undefined,
    [banners, screenType],
  );

  return (
    <Container
      href={bannerItem?.redirectUrl || '#'}
      target={bannerItem?.redirectType === 'NewTab' ? '_blank' : '_self'}
    >
      <SubBannerImage src={bannerItem?.sourceUrl || ''} />
    </Container>
  );
}

const Container = styled.a`
  display: block;
  background-color: #d9d9d9;

  margin-top: 65px;
  margin-bottom: 65px;
  height: 108px;
  border-radius: 8px;
  overflow: hidden;

  ${({ theme }) => theme.media.desktop`
    ${`width: ${theme.widths.desktop}px`};
  `}
  ${({ theme }) => theme.media.tablet`
    ${`width: ${theme.widths.tablet}px`};
  `};
`;

const SubBannerImage = styled.img`
  object-fit: fill;
`;
