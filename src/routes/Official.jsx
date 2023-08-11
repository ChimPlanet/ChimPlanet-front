import FixMemberSection from '@/components/Home/Sections/FixMemberSection';
import SubBanner from '@/components/Home/SubBanner';
import { styled } from '@chimplanet/ui';
//import IsegyeSection from '@/components/Home/Sections/IsegyeSection';

export const Official = () => {
  return (
    <Container>
      <SubBanner />
      <FixMemberSection />
      {/*
      <Margin />
      <IsegyeSection />
      */}
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  padding-bottom: 100px;
`;

/* const Margin = styled.div`
  height: 63px;
`; */
