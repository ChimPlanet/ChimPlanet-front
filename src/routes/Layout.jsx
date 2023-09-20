import { useMemo } from 'react';

import '@styles/layout.scss';

import {
  Banner,
  Outlet,
  styled,
  useLocation,
  useScreenType,
} from '@chimplanet/ui';

import { Centering } from '@common/components/Centering';
import {
  ArticleRenderer,
  DesktopThemeChangeButton,
  Footer,
  Header,
} from '@components';
import useBanner from '@hooks/useBanner';
import { Paths } from './path';

const BannerWhileList = [Paths.Home, Paths.Event, Paths.Official];

export default function Layout() {
  const sizeType = useScreenType();
  const { pathname } = useLocation();
  const { main } = useBanner();

  /** @type {import('@services/entity').Banner[]} */
  const banners = useMemo(
    () => main.map((v) => v[sizeType === 'desktop' ? 'pc' : 'mobile']),
    [main, sizeType],
  );

  return (
    <>
      <Container>
        <Header />
        {BannerWhileList.includes(pathname) && banners ? (
          <BannerWrapper children={<Banner banners={banners} />} />
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
      <ArticleRenderer />
    </>
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
