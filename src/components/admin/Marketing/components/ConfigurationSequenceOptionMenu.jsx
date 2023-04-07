import React, { useState } from 'react';
import { useAdminBannerState } from '../atoms/adminBanner.atom';
import { BannerSequenceForm } from './BannerSequenceForm';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderButton,
  WrapForm,
} from './ConfigurationSequenceOptionMenu.style';

import {
  filterMainBanner,
  groupBannerToPairItem,
} from '@/service/banner/banner-utils';

import { sequenceFromPairedBanner } from './BannerSequenceForm/utils';
import { groupBy } from '@/utils';
import backend from '@/service/backend';
import { updateSequencesRequest } from '@/service/banner/banner-request';

export default function ConfigurationSequenceOptionMenu() {
  const [rawBanners] = useAdminBannerState();

  const [sequences, setSequences] = useState(
    sequenceFromPairedBanner(
      filterMainBanner(
        groupBannerToPairItem(groupBy(rawBanners, 'redirectUrl')),
      ),
    ) || [],
  );

  function handleSubmit() {
    backend.banners.updateSequences(updateSequencesRequest(sequences));
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>배너목록</HeaderTitle>
        <HeaderButton onClick={handleSubmit}>적용</HeaderButton>
      </Header>
      <WrapForm>
        <BannerSequenceForm setSequence={setSequences} sequence={sequences} />
      </WrapForm>
    </Container>
  );
}
