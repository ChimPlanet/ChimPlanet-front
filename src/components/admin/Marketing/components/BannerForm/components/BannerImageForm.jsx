import DragAndDropImage from '@/common/components/DragAndDropImage';
import {
  Container,
  Content,
  Title,
  ItemImageWrap,
  ItemDescription,
  ItemWrap,
  PlaceHolderContainer,
  PlaceHolderRow,
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
      <ItemImageWrap>
        <DragAndDropImage id={title} elementWhenEmpty={<PlaceHolderImage />} />
      </ItemImageWrap>
    </ItemWrap>
  );
}

function PlaceHolderImage() {
  return (
    <PlaceHolderContainer>
      <PlaceHolderRow>이곳에 파일을 드롭하여</PlaceHolderRow>
      <PlaceHolderRow>업로드 해주세요.</PlaceHolderRow>
    </PlaceHolderContainer>
  );
}
