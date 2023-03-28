import {
  Container,
  Title,
  Content,
  LinkInput,
  SwitchContainer,
  SwitchItemWrap,
} from './BannerLinkForm.style';

export default function BannerLinkForm() {
  return (
    <Container>
      <Title>링크</Title>
      <Content>
        <LinkInput placeholder="링크를 입력해주세요" />
        <SwitchContainer>
          <SwitchItemWrap>현재탭에서 이동</SwitchItemWrap>
          <SwitchItemWrap>새탭 열기</SwitchItemWrap>
        </SwitchContainer>
      </Content>
    </Container>
  );
}
