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

export default function BannerLinkForm() {
  return (
    <Container>
      <Title>링크</Title>
      <Content>
        <LinkInput placeholder="링크를 입력해주세요" />
        <SwitchContainer row>
          <FormControlLabel
            value={1}
            label={<RadioText children="현재탭에서 이동" />}
            control={<SwitchRadio />}
          />
          <FormControlLabel
            value={2}
            label={<RadioText children="새탭 열기" />}
            control={<SwitchRadio />}
          />
        </SwitchContainer>
      </Content>
    </Container>
  );
}
