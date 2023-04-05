import React from 'react';
import { useAdminBannerState } from '../atoms/adminBanner.atom';
import { BannerSequenceForm } from './BannerSequenceForm';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderButton,
} from './ConfigurationSequenceOptionMenu.style';
import { useMemo } from 'react';
import { getBannerByType } from '@/service/banner/banner-utils';

export default function ConfigurationSequenceOptionMenu() {
  const [rawBanners] = useAdminBannerState();

  const banners = useMemo(
    () => (rawBanners ? getBannerByType(rawBanners, 'PC') : []),
    [rawBanners],
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>배너목록</HeaderTitle>
        <HeaderButton>적용</HeaderButton>
      </Header>
      <BannerSequenceForm banners={banners} />
    </Container>
  );
}
