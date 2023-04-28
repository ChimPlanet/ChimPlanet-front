import { useMemo } from 'react';
import { styled, Banner, useScreenType } from 'chimplanet-ui';

import OfficialSection from '@/components/Home/Sections/OfficialSection';
import RecentSection from '@/components/Home/Sections/RecentSection';
import PopularSection from '@/components/Home/Sections/PopularSection';
import SubBanner from '@/components/Home/SubBanner';
import MoreOfferButton from '@/components/Home/MoreOfferButton';

import { usePreloadContext } from '@/context/preloadContext';
import { getBannerByType } from '@/service/banner/banner-utils';

export default function Home() {
  const sizeType = useScreenType();
  const { banners } = usePreloadContext();

  const mainBanners = useMemo(
    () =>
      banners
        ? getBannerByType(banners, sizeType === 'desktop' ? 'PC' : 'MOBILE')
        : [],
    [banners, sizeType],
  );
  return (
    <>
      <BannerWrapper children={<Banner banners={mainBanners} />} />
      <Content>
        <OfficialSection />
        <SubBanner />
        <PopularSection />
        <RecentSection />
        <MoreOfferButton />
      </Content>
    </>
  );
}

const Content = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  padding-bottom: 100px;
`;
const BannerWrapper = styled.div`
  margin: 30px 0px;
`;
