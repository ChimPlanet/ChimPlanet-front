import { Banner } from '@/service/banner';
import styled from 'styled-components';
import BannerImageForm from './BannerImageForm';
import BannerLinkForm from './BannerLinkForm';
import { useReducer } from 'react';
import { useAdminSidebarMenu } from '@/components/admin/AdminSidebar';
import { Switch } from '@mui/material';

/**
 * @param {{type: "update" | "new", payload?: Banner}} param0
 */
export default function BannerForm({ type, payload }) {
  /** @type {[import('@/service/banner/banner-request').UploadBannerRequestOptions, (newState: Partial<import('@/service/banner/banner-request').UploadBannerRequestOptions>)=>void]} */
  const [state, dispatch] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    type === 'new'
      ? {
          deviceType: 'PC',
          fileType: 'MAIN',
          redirectionType: '',
          redirectUrl: '',
          useYn: 'Y',
          sequence: 0,
          formData: null,
        }
      : {
          deviceType: payload.isMain ? 'MAIN' : 'PC',
          fileType: payload.isMain ? 'MAIN' : 'MID',
          redirectUrl: payload.redirectUrl,
          redirectionType: payload.redirectType,
          useYn: payload.yn ? 'Y' : 'N',
          sequence: payload.sequence,
          formData: null,
        },
  );

  const [, { pop }] = useAdminSidebarMenu();

  const handleSubmit = () => {
    pop();
  };

  const handleUseClick = () =>
    dispatch({ useYn: state.useYn === 'Y' ? 'N' : 'Y' });

  return (
    <Container>
      <UseContainer>
        <UseTypography>사용 여부</UseTypography>
        <UseSwitch>
          {state.useYn === 'Y' ? '사용함' : '사용안함'}
          <Switch onClick={handleUseClick} checked={state.useYn === 'Y'} />
        </UseSwitch>
      </UseContainer>
      <BannerImageForm />
      <BannerLinkForm />
      <BannerSubmitFormButton>배너 등록</BannerSubmitFormButton>
    </Container>
  );
}

const Container = styled.div`
  padding: 32px;
  font-size: 14px;
  font-weight: 500;
`;

const UseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UseTypography = styled.span``;

const UseSwitch = styled.div``;

const BannerSubmitFormButton = styled.button`
  margin-top: 24px;
  display: block;
  background-color: #252525;
  border: 1px solid ${({ theme }) => theme.colors.logo};
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #fff;
  width: 100%;
  padding: 11px 0px;
`;
