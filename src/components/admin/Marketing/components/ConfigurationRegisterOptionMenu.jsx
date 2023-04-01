import { useEffect } from 'react';

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
import { groupBannerToPairItem } from './utils/index';

export default function ConfigurationRegisterOptionMenu() {
  const [banners, setBanners] = useAdminBannerState();

  useEffect(() => {
    getBannerFromServer();
  }, []);

  const getBannerFromServer = () => {
    backend.banners.mainBanner().then((banners) => {
      const processed = groupBannerToPairItem(groupBy(banners, 'redirectUrl'));
      setBanners(processed);
    });
  };

  const handleRefresh = () => {
    getBannerFromServer();
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
          items={filterMainBanner(banners) || []}
        />
        <BannerPreviewList
          title="서브배너"
          items={filterSubBanner(banners) || []}
        />
        <SubmitBannerButton />
      </Content>
    </Wrapper>
  );
}
