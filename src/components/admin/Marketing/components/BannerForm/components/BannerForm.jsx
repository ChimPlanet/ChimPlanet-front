import { Banner } from '@/service/banner';
import BannerImageForm from './BannerImageForm';
import BannerLinkForm from './BannerLinkForm';
import { useAdminSidebarMenu } from '@/components/admin/AdminSidebar';

import {
  Switch,
  Container,
  UseContainer,
  UseTypography,
  UseSwitch,
  BannerSubmitFormButton,
} from './BannerForm.style';
import useBannerForm from '../hooks/useBannerForm';

/**
 * @param {{type: "update" | "new", payload?: Banner}} param0
 */
export default function BannerForm({ type, payload }) {
  const [state, dispatch] = useBannerForm(type, payload);
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
      <BannerSubmitFormButton onClick={handleSubmit} children="배너 등록" />
    </Container>
  );
}
