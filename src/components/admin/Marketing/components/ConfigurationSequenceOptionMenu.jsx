import React from 'react';
import { useAdminBannerState } from '../atoms/adminBanner.atom';
import { BannerSequenceForm } from './BannerSequenceForm';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderButton,
} from './ConfigurationSequenceOptionMenu.style';

export default function ConfigurationSequenceOptionMenu() {
  const [banners] = useAdminBannerState();

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
