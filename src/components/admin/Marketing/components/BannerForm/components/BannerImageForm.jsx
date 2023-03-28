import {
  Container,
  Content,
  Title,
  ItemImageWrap,
  ItemDescription,
  ItemWrap,
} from './BannerImageForm.style';

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
