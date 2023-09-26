import { styled } from '@chimplanet/ui';
import EventSection from '@components/Home/Sections/EventSection';
import SubBanner from '@components/Home/SubBanner';

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
