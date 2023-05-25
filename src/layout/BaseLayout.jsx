import React, { Suspense, useMemo } from 'react';

import {
  styled,
  useScreenType,
  Banner,
  useLocation,
  Loading,
} from 'chimplanet-ui';

import { usePreloadContext } from '@/context/preloadContext';
import {
  filterMainBanner,
  getBannerByType,
} from '@/service/banner/banner-utils';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Centering } from '@/common/components/Centering';
import { HOME_PATH, OFFICIAL_PATH } from '@/constants/route';
import DesktopThemeChangeButton from '@/components/ThemeChangeButton';

export default function BaseLayout({ children }) {
  const sizeType = useScreenType();
  const { pathname } = useLocation();
  const { banners } = usePreloadContext();

  const validPaths = [HOME_PATH, OFFICIAL_PATH];

  const mainBanners = useMemo(
    () =>
      banners
        ? getBannerByType(
            filterMainBanner,
            banners,
            sizeType === 'desktop' ? 'PC' : 'MOBILE',
          )
        : [],
    [banners, sizeType],
  );

  return (
    <>
      <Header />
      {validPaths.includes(pathname) && banners && (
        <BannerWrapper children={<Banner banners={mainBanners} />} />
      )}

      <Centering
        styles={{
          mobile: `padding-bottom: ${Footer.mobileHeight}px;`,
          default: `padding-bottom: ${Footer.defaultHeight}px;`,
        }}
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Centering>
      <Footer />
      {sizeType === 'desktop' ? <DesktopThemeChangeButton /> : null}
    </>
  );
}

const BannerWrapper = styled.div`
  margin: 30px 0px;
  width: 100vw;
`;
