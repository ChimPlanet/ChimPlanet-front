import { FormControlLabel } from '@mui/material';
import {
  Container,
  Title,
  Content,
  LinkInput,
  SwitchContainer,
  RadioText,
  SwitchRadio,
} from './BannerLinkForm.style';

/**
 * @typedef {import('@/service/banner/banner-request').UploadBannerRequestOptions['redirectionType']} RedirectType
 *
 *
 * @typedef {object} BannerLinkFormProps
 * @property {string} redirectURL
 * @property {RedirectType} redirectType
 * @property {(type: RedirectType)=>void} setRedirectType
 * @property {(type: string)=>void} setRedirectURL
 *
 * @param {BannerLinkFormProps}
 * @returns
 */
export default function BannerLinkForm({
  redirectType,
  redirectURL,
  setRedirectType,
  setRedirectURL,
}) {
  const handleRedirectTypeChange = setRedirectType;

  /** @param {React.ChangeEvent<HTMLInputElement>} e */
  function handleRedirectURLChange(e) {
    if (e && e.target.value) {
      setRedirectURL(e.target.value);
    }
  }

  return (
    <Container>
      <Title>링크</Title>
      <Content>
        <LinkInput
          value={redirectURL}
          onChange={handleRedirectURLChange}
          placeholder="링크를 입력해주세요"
        />
        <SwitchContainer
          row
          defaultValue="CurrentTab"
          value={redirectType}
          onChange={handleRedirectTypeChange}
        >
          <FormControlLabel
            value="CurrentTab"
            label={<RadioText children="현재탭에서 이동" />}
            control={<SwitchRadio />}
          />
          <FormControlLabel
            value="NewTab"
            label={<RadioText children="새탭 열기" />}
            control={<SwitchRadio />}
          />
        </SwitchContainer>
      </Content>
    </Container>
  );
}
