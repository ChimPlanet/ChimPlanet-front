import { Suspense, useMemo } from 'react';

import '../styles/layout.scss';

import {
  Banner,
  Loading,
  Outlet,
  styled,
  useLocation,
  useScreenType,
} from '@chimplanet/ui';

import { usePreloadContext } from '@/context/preloadContext';
import {
  filterMainBanner,
  getBannerByType,
} from '@/service/banner/banner-utils';

import { Centering } from '@/common/components/Centering';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import JobDetailSubscriber from '@/components/JobDetailSubscriber';
import DesktopThemeChangeButton from '@/components/ThemeChangeButton';
import {
  ARTICLE_PATH,
  BOOKMARK_PATH,
  ERROR_PATH,
  JOB_PATH,
  NOTFOUND_PATH,
  SEARCH_PATH,
} from '@/constants/route';

const invalidPaths = [
  ERROR_PATH,
  SEARCH_PATH,
  NOTFOUND_PATH,
  ARTICLE_PATH,
  JOB_PATH,
  BOOKMARK_PATH,
];

export default function Layout({ children }) {
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
      {pathname !== ERROR_PATH && <Header />}
      {!invalidPaths.includes(pathname) && banners ? (
        <BannerWrapper children={<Banner banners={mainBanners} />} />
      ) : null}

      <Centering
        styles={{
          mobile: `padding-bottom: ${Footer.mobileHeight}px;`,
          default: `padding-bottom: ${Footer.defaultHeight}px;`,
        }}
      >
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Centering>
      <JobDetailSubscriber />
      {pathname !== ERROR_PATH && <Footer />}
      {sizeType === 'desktop' ? <DesktopThemeChangeButton /> : null}
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
