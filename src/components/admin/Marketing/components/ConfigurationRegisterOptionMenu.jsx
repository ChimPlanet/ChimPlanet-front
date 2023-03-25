import { Loading } from '@/common/components';
import { useBanner } from '@/query/banner';
import { Suspense } from 'react';
import styled from 'styled-components';

import BannerPreviewList from './BannerPreviewList';
import SubBannerPreviewList from './SubBannerPreviewList';
import SubmitBannerButton from './SubmitBannerButton';

export default function ConfigurationRegisterOptionMenu() {
  return (
    <Wrapper>
      <Typography>배너목록</Typography>
      <Content>
        <Suspense fallback={<Loading />}>
          <OptionMenuContent />
        </Suspense>
      </Content>
    </Wrapper>
  );
}

function OptionMenuContent() {
  const { data: banner } = useBanner();

  return (
    <>
      <BannerPreviewList items={banner} />
      <SubBannerPreviewList />
      <SubmitBannerButton />
    </>
  );
}

const Wrapper = styled.div`
  color: #fff;
  padding: 24px 32px;
`;

const Typography = styled.p`
  font-weight: 500;
  font-size: 14px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 8px;
`;
