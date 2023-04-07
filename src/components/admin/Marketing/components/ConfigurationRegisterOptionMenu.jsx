import backend from '@/service/backend';
import {
  filterMainBanner,
  filterSubBanner,
} from '@/service/banner/banner-utils';

import BannerPreviewList from './BannerPreviewList';
import SubmitBannerButton from './SubmitBannerButton';
import { useAdminBannerState } from '../atoms/adminBanner.atom';

import {
  ControlBox,
  RefreshButton,
  Typography,
  Content,
} from './ConfigurationRegisterOptionMenu.style';

export default function ConfigurationRegisterOptionMenu() {
  const [banners, setBanners] = useAdminBannerState();

  const handleRefresh = () => {
    backend.banners.banners().then(setBanners);
  };

  return (
    <>
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
    </>
  );
}
