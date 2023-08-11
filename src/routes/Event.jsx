import EventSection from '@/components/Home/Sections/EventSection';
import SubBanner from '@/components/Home/SubBanner';
import { styled } from '@chimplanet/ui';

export const Event = () => {
  return (
    <Container>
      <SubBanner />
      <EventSection />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  padding-bottom: 100px;
`;
