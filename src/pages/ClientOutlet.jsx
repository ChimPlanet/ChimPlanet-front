import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Banner from '@/components/Banner';
import { Header } from '@/components/Header';
import { usePreloadContext } from '@/context/preloadContext';
import { HOME_PATH } from '@/constants/route';

export default function ClientOutlet() {

  const {pathname} = useLocation();

  const preloaded = usePreloadContext();

  return (
    <>
      <Header />

    {pathname === HOME_PATH && <BannerWrapper><Banner banners={preloaded?.mainBanner} /></BannerWrapper>}
      <Content>
        <Outlet />
      </Content>
    </>
  );
}

const Content = styled.div`
  margin: 0 auto;

  ${({ theme }) => theme.media.desktop`
    ${`width: ${theme.widths.desktop}px`};
  `}
  ${({ theme }) => theme.media.tablet`
    ${`width: ${theme.widths.tablet}px`};
  `}
`;

const BannerWrapper = styled.div`
  margin: 30px 0px;
`;
