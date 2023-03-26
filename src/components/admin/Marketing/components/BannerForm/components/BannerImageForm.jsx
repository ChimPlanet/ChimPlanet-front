import styled from 'styled-components';

export default function BannerImageForm() {
  return (
    <Container>
      <Title>이미지 등록</Title>
      <Content>
        <ImageItem title="PC용 이미지" />
        <ImageItem title="모바일용 이미지" />
      </Content>
    </Container>
  );
}

function ImageItem({ title }) {
  return (
    <ItemWrap>
      <ItemDescription>{title}</ItemDescription>
      <ItemImageWrap />
    </ItemWrap>
  );
}

const Container = styled.div``;

const Title = styled.p``;

const Content = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  border: 1px solid #454545;
  border-radius: 4px;
  padding: 25px 15px;
`;

const ItemWrap = styled.div``;

const ItemDescription = styled.p``;

const ItemImageWrap = styled.div`
  margin-top: 8px;
  width: 357px;
  height: 169px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;
