import { styled } from 'chimplanet-ui';
import SubBanner from '@/components/Home/SubBanner';
import EventSection from '@/components/Home/Sections/EventSection';

export default function Event() {
  return (
    <Container>
      <SubBanner />
      <EventSection />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  padding-bottom: 100px;
`;
