import styled from 'styled-components';

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

const Container = styled.div`
  margin-top: 24px;
`;

const Title = styled.p``;

const Content = styled.div`
  margin-top: 8px;
  padding: 12px;
  border: 1px solid #454545;
  border-radius: 4px;
`;

const LinkInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 4px;
  padding: 8px;
  border: 1px solid #454545;
`;

const SwitchContainer = styled.div`
  margin-top: 10px;
`;

const SwitchItemWrap = styled.div`
  display: inline-block;
  font-weight: 300;
`;
