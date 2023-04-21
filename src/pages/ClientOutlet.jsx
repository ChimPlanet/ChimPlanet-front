import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Banner } from '@/components/Banner';
import { Header } from '@/components/Header';
import { usePreloadContext } from '@/context/preloadContext';
import { HOME_PATH, OFFICIAL_PATH , EVENT_PATH } from '@/constants/route';
import { useMemo } from 'react';
import { getBannerByType } from '@/service/banner/banner-utils';
import { useSizeType } from '@/context/sizeTypeContext';

export default function ClientOutlet() {
  const { pathname } = useLocation();

  const sizeType = useSizeType();
  const { banners } = usePreloadContext();

  const validPaths = [HOME_PATH, OFFICIAL_PATH, EVENT_PATH];

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
      {validPaths.includes(pathname) && (
        <BannerWrapper children={<Banner banners={mainBanners} />} />
      )}
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
${({ theme }) => theme.media.mobile`
    width: 350px;
  `}
`;

const BannerWrapper = styled.div`
  margin: 30px 0px;
`;
