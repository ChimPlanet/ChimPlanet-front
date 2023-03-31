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

/**
 * @param {{type: "update" | "new", payload?: Banner}} param0
 */
export default function BannerForm({ type, payload }) {
  const [state, dispatch] = useBannerForm(type, payload);
  const [, { pop }] = useAdminSidebarMenu();

  const handleSubmit = () => {
    // type에 따라서 수정, 생성 분류
    const options = uploadBannerRequestOptions(state);
    backend.banners.upload(options, type === 'update');
    pop();
  };

  const handleUseClick = () =>
    dispatch({ useYn: state.useYn === 'Y' ? 'N' : 'Y' });

  // #region Image Form

  // #endregion

  // #region Link Form
  function handleRedirectType(type) {
    dispatch({ redirectionType: type });
  }
  function handleRedirectURL(url) {
    dispatch({ redirectUrl: url });
  }
  // #endregion

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
      <BannerLinkForm
        redirectType={state.redirectionType}
        redirectURL={state.redirectUrl}
        setRedirectType={handleRedirectType}
        setRedirectURL={handleRedirectURL}
      />
      <BannerSubmitFormButton onClick={handleSubmit} children="배너 등록" />
    </Container>
  );
}
