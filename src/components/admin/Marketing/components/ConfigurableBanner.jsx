import Banner from '@/components/Banner';
import { useSizeType } from '@/context/sizeTypeContext';
import backend from '@/service/backend';
import { getBannerByType } from '@/service/banner/banner-utils';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useAdminBannerState } from '../atoms/adminBanner.atom';
import ConfigurableMainLayout from './ConfigurableMainLayout';
import ConfigurableOption from './ConfigurableMainOption';

export default function ConfigurableBanner() {
  // ! use RecoilState for shareing Sidebar Menu Setting
  const [banners, setBanners] = useAdminBannerState();
  const sizeType = useSizeType();

  useEffect(() => {
    backend.banners.banners().then(setBanners);
  }, []);

  const mainsBanners = useMemo(
    () =>
      banners
        ? getBannerByType(banners, sizeType === 'desktop' ? 'PC' : 'MOBILE')
        : [],
    [sizeType, banners],
  );

  return (
    <ConfigurableMainLayout Options={<ConfigurableOption />}>
      <Banner banners={mainsBanners} />
    </ConfigurableMainLayout>
  );
}
