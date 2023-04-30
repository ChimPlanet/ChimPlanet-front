import React, { useMemo } from 'react';

import { styled, useScreenType, Banner } from 'chimplanet-ui';

import { usePreloadContext } from '@/context/preloadContext';
import { getBannerByType } from '@/service/banner/banner-utils';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Centering } from '@/common/components/Centering';

export default function BaseLayout({ children }) {
  const sizeType = useScreenType();
  const { banners } = usePreloadContext();

  const mainBanners = useMemo(
    () =>
      banners
        ? getBannerByType(banners, sizeType === 'desktop' ? 'PC' : 'MOBILE')
        : [],
    [banners, sizeType],
  );

  return (
    <>
      <Header />
      <BannerWrapper children={<Banner banners={mainBanners} />} />

      <Centering
        styles={{
          mobile: `padding-bottom: ${Footer.mobileHeight}px;`,
          default: `padding-bottom: ${Footer.defaultHeight}px;`,
        }}
        children={children}
      />
      <Footer />
    </>
  );
}

const BannerWrapper = styled.div`
  margin: 30px 0px;
  width: 100vw;
`;
