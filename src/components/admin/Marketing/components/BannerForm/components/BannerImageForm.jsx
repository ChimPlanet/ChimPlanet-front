import { Container, Content, Title } from './BannerImageForm.style';
import BannerImageFormItem from './BannerImageFormItem';

export default function BannerImageForm({ setImageFile, imageUrl }) {
  return (
    <Container>
      <Title>이미지 등록</Title>
      <Content>
        <BannerImageFormItem
          title="PC용 이미지"
          type="PC"
          imageSourceUrl=""
          setImageFile={() => {}}
        />
        <BannerImageFormItem
          title="모바일용 이미지"
          type="MOBILE"
          imageSourceUrl=""
          setImageFile={() => {}}
        />
      </Content>
    </Container>
  );
}
