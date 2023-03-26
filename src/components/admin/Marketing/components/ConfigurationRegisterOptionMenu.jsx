import styled from 'styled-components';

import BannerPreviewList from './BannerPreviewList';
import SubBannerPreviewList from './SubBannerPreviewList';
import SubmitBannerButton from './SubmitBannerButton';
import { useEffect } from 'react';
import { useAdminBannerState } from '../atoms/adminBanner.atom';
import backend from '@/service/backend';
import {
  filterMainBanner,
  filterSubBanner,
} from '@/service/banner/banner-utils';

export default function ConfigurationRegisterOptionMenu() {
  const [banners, setBanners] = useAdminBannerState();

  useEffect(() => {
    getBannerFromServer();
  }, []);

  const getBannerFromServer = () => {
    backend.banners.mainBanner().then(setBanners);
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

const Wrapper = styled.div`
  color: #fff;
  padding: 24px 32px;
`;

const ControlBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RefreshButton = styled.button`
  background-color: ${({ theme }) => theme.colors.logo};
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
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
