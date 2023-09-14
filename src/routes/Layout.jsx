import { useMemo } from 'react';

import '@styles/layout.scss';

import {
  Banner,
  Outlet,
  styled,
  useLocation,
  useScreenType,
} from '@chimplanet/ui';

import { usePreloadContext } from '@context/preloadContext';
import {
  filterMainBanner,
  getBannerByType,
} from '@services/banner/banner-utils';

import { Centering } from '@common/components/Centering';
import { DesktopThemeChangeButton, Footer, Header } from '@components';
import { Paths } from './path';

const BannerWhileList = [Paths.Home, Paths.Event, Paths.Official];

export default function Layout() {
  const sizeType = useScreenType();
  const { pathname } = useLocation();
  const { banners } = usePreloadContext();

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
    <Container>
      <Header />
      {BannerWhileList.includes(pathname) && banners ? (
        <BannerWrapper children={<Banner banners={mainBanners} />} />
      ) : null}

      <Centering
        styles={{
          mobile: `padding-bottom: ${Footer.mobileHeight}px;`,
          default: `padding-bottom: ${Footer.defaultHeight}px;`,
        }}
      >
        <Outlet />
      </Centering>
      <Footer />
      <DesktopThemeChangeButton />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: 100%;
  color: ${({ theme }) => theme.textColors.primary};
  background-color: ${({ theme }) => theme.bgColors.primary};
`;

const BannerWrapper = styled.div`
  margin: 30px 0px;
  width: 100vw;
`;
