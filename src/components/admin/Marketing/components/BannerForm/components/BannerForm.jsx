import { Banner } from '@/service/banner';
import { useAdminSidebarMenu } from '@/components/admin/AdminSidebar';
import { uploadBannerRequestOptions } from '@/service/banner/banner-request';

import BannerImageForm from './BannerImageForm';
import BannerLinkForm from './BannerLinkForm';

import {
  Switch,
  Container,
  UseContainer,
  UseTypography,
  UseSwitch,
  BannerSubmitFormButton,
} from './BannerForm.style';
import useBannerForm from '../hooks/useBannerForm';
import backend from '@/service/backend';
import { useMemo } from 'react';

/**
 * @param {{type: "update" | "new", payload?: Banner}} param0
 */
export default function BannerForm({ type, payload }) {
  const {
    base: [baseState, baseDispatch],
    pc: [pcState, pcDispatch],
    mobile: [mobileState, mobileDispatch],
  } = useBannerForm(type, payload);

  const [, { pop }] = useAdminSidebarMenu();

  const isUpdate = useMemo(() => type === 'update', [type]);

  const handleSubmit = () => {
    if (type === 'new' && (!pcState.formData || !mobileState.formData)) {
      alert('최초 등록시, PC와 모바일 이미지를 모두 등록 바랍니다.');
      return;
    }

    // type에 따라서 수정, 생성 분류
    Promise.all([
      // PC Update
      backend.banners.upload(
        uploadBannerRequestOptions({
          ...baseState,
          ...pcState,
        }),
        isUpdate,
      ),
      // Mobile Update
      backend.banners.upload(
        uploadBannerRequestOptions({
          ...baseState,
          ...mobileState,
        }),
        isUpdate,
      ),
    ]);
    // 돌아가기
    pop();
  };

  const handleUseClick = () =>
    baseDispatch({ useYn: baseState.useYn === 'Y' ? 'N' : 'Y' });

  // #region Image Form
  const imageSourceSet = useMemo(
    () => ({
      pc: pcState.imageSourceUrl,
      mobile: mobileState.imageSourceUrl,
    }),
    [mobileState.imageSourceUrl, pcState.imageSourceUrl],
  );

  const imageFileSetter = useMemo(
    () => ({
      pc: (value) => pcDispatch({ formData: value }),
      mobile: (value) => mobileDispatch({ formData: value }),
    }),
    [pcDispatch, mobileDispatch],
  );
  // #endregion

  // #region Link Form
  function handleRedirectType(type) {
    baseDispatch({ redirectType: type });
  }
  function handleRedirectURL(url) {
    baseDispatch({ redirectUrl: url });
  }
  // #endregion

  return (
    <Container>
      <UseContainer>
        <UseTypography>사용 여부</UseTypography>
        <UseSwitch>
          {baseState.useYn === 'Y' ? '사용함' : '사용안함'}
          <Switch onClick={handleUseClick} checked={baseState.useYn === 'Y'} />
        </UseSwitch>
      </UseContainer>
      <BannerImageForm
        imageFileSetter={imageFileSetter}
        imageSourceSet={imageSourceSet}
      />
      <BannerLinkForm
        redirectType={baseState.redirectType}
        redirectURL={baseState.redirectUrl}
        setRedirectType={handleRedirectType}
        setRedirectURL={handleRedirectURL}
      />
      <BannerSubmitFormButton
        onClick={handleSubmit}
        children={isUpdate ? '배너 수정' : '배너 등록'}
      />
    </Container>
  );
}
