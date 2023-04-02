import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Banner from '@/components/Banner';
import { Header } from '@/components/Header';
import { usePreloadContext } from '@/context/preloadContext';
import { HOME_PATH } from '@/constants/route';
import { useMemo } from 'react';
import {
  filterMainBanner,
  groupBannerToPairItem,
} from '@/service/banner/banner-utils';
import { groupBy } from '@/utils';
import { useSizeType } from '@/context/sizeTypeContext';

export default function ClientOutlet() {
  const { pathname } = useLocation();

  const sizeType = useSizeType();
  const preloaded = usePreloadContext();

  const mainBanners = useMemo(
    () =>
      preloaded?.banner
        ? filterMainBanner(
            groupBannerToPairItem(groupBy(preloaded?.banner, 'redirectUrl')),
          ).map((paired) =>
            sizeType === 'desktop' ? paired.pc : paired.mobile,
          )
        : [],
    [preloaded?.banner, sizeType],
  );

  return (
    <>
      <Header />

      {pathname === HOME_PATH && (
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
`;

const BannerWrapper = styled.div`
  margin: 30px 0px;
`;
