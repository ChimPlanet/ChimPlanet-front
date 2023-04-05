import React from 'react';
import { useAdminBannerState } from '../atoms/adminBanner.atom';
import { BannerSequenceForm } from './BannerSequenceForm';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderButton,
  WrapForm,
} from './ConfigurationSequenceOptionMenu.style';

import { getBannerByType } from '@/service/banner/banner-utils';
import { useState } from 'react';

export default function ConfigurationSequenceOptionMenu() {
  const [rawBanners] = useAdminBannerState();

  const [innerBanners, setInnerBanners] = useState(
    getBannerByType(rawBanners, 'PC') || [],
  );

  function handleSubmit() {}

  return (
    <Container>
      <Header>
        <HeaderTitle>배너목록</HeaderTitle>
        <HeaderButton onClick={handleSubmit}>적용</HeaderButton>
      </Header>
      <WrapForm>
        <BannerSequenceForm banners={innerBanners} />
      </WrapForm>
    </Container>
  );
}
