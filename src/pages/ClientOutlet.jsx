import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Banner from '@/components/Banner';
import { Header } from '@/components/Header';
import { usePreloadContext } from '@/context/preloadContext';

export default function ClientOutlet() {

  const preloaded = usePreloadContext();

  return (
    <>
      <Header />
      <Banner banners={preloaded?.mainBanner} />
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
