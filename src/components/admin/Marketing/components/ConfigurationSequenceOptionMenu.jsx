import React, { useState } from 'react';
import { useAdminBannerState } from '../atoms/adminBanner.atom';
import { BannerSequenceForm } from './BannerSequenceForm';

import {
  Header,
  HeaderTitle,
  HeaderButton,
  WrapForm,
} from './ConfigurationSequenceOptionMenu.style';

import { filterMainBanner } from '@/service/banner/banner-utils';

import { sequenceFromPairedBanner } from './BannerSequenceForm/utils';
import backend from '@/service/backend';
import { updateSequencesRequest } from '@/service/banner/banner-request';

export default function ConfigurationSequenceOptionMenu() {
  const [banners] = useAdminBannerState();

  const [sequences, setSequences] = useState(
    sequenceFromPairedBanner(filterMainBanner(banners)) || [],
  );

  function handleSubmit() {
    backend.banners.updateSequences(updateSequencesRequest(sequences));
  }

  return (
    <>
      <Header>
        <HeaderTitle>배너목록</HeaderTitle>
        <HeaderButton onClick={handleSubmit}>적용</HeaderButton>
      </Header>
      <WrapForm>
        <BannerSequenceForm setSequence={setSequences} sequence={sequences} />
      </WrapForm>
    </>
  );
}
