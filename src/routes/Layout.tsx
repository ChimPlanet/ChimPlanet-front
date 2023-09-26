import { useMemo } from 'react';

import '@styles/layout.scss';

import {
  Outlet,
  Banner as SwippleBanner,
  styled,
  useLocation,
  useScreenType,
} from '@chimplanet/ui';

import { Centering } from '@common/components/Centering';
import { ArticleRenderer, DesktopThemeChangeButton, Footer, Header } from '@components';
import useBanner from '@hooks/useBanner';
import { Banner } from '@services/entity';
import { Paths } from './path';

const BannerWhiteList: string[] = [Paths.Home, Paths.Event, Paths.Official];

export default function Layout() {
  const sizeType = useScreenType();
  const { pathname } = useLocation();
  const { main } = useBanner();

  const computedBanner = useMemo(() => {
    const items = main.map((v) => v[sizeType === 'desktop' ? 'pc' : 'mobile']);

    return <SwippleBanner elements={items.map(implementBannerEl)} />;
  }, [main, sizeType]);

  return (
    <>
      <Container>
        <Header />
        {BannerWhiteList.includes(pathname) && <BannerWrapper children={computedBanner} />}

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

const implementBannerEl = ({ to, redirectType, imageUrl }: Banner) => (
  <a href={to} target={redirectType === 'NewTab' ? '_blank' : '_self'}>
    <img referrerPolicy="no-referrer" src={imageUrl} alt={to} />
  </a>
);

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
