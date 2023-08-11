import { styled } from '@chimplanet/ui';

import OfficialSection from '@/components/Home/Sections/OfficialSection';
import PopularSection from '@/components/Home/Sections/PopularSection';
import RecentSection from '@/components/Home/Sections/RecentSection';
import SubBanner from '@/components/Home/SubBanner';

export const Home = () => {
  return (
    <Content>
      <OfficialSection />
      <SubBanner />
      <PopularSection />
      <RecentSection />
    </Content>
  );
};

const Content = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  padding-bottom: 100px;
`;
