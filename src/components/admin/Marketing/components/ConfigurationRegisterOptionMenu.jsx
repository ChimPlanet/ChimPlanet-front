import { useEffect, useState } from 'react';

import backend from '@/service/backend';
import {
  filterMainBanner,
  filterSubBanner,
} from '@/service/banner/banner-utils';
import { groupBy } from '@/utils';

import BannerPreviewList from './BannerPreviewList';
import SubmitBannerButton from './SubmitBannerButton';
import { useAdminBannerState } from '../atoms/adminBanner.atom';

import {
  Wrapper,
  ControlBox,
  RefreshButton,
  Typography,
  Content,
} from './ConfigurationRegisterOptionMenu.style';
import { groupBannerToPairItem } from '@/service/banner/banner-utils';
import { useMemo } from 'react';

export default function ConfigurationRegisterOptionMenu() {
  const [banners, setBanners] = useAdminBannerState();

  const pairedBanner = useMemo(
    () => groupBannerToPairItem(groupBy(banners, 'redirectUrl')),
    [banners],
  );

  const handleRefresh = () => {
    backend.banners.banners().then(setBanners);
  };

  return (
    <Wrapper>
      <ControlBox>
        <Typography>배너목록</Typography>
        <RefreshButton onClick={handleRefresh}>reload</RefreshButton>
      </ControlBox>
      <Content>
        <BannerPreviewList
          title="메인비주얼"
          items={filterMainBanner(pairedBanner) || []}
        />
        <BannerPreviewList
          title="서브배너"
          items={filterSubBanner(pairedBanner) || []}
        />
        <SubmitBannerButton />
      </Content>
    </Wrapper>
  );
}
