import styled from 'styled-components';
import OfficialSection from '@/components/Home/Sections/OfficialSection';
import RecentSection from '@/components/Home/Sections/RecentSection';
import PopularSection from '@/components/Home/Sections/PopularSection';
import SubBanner from '@/components/Home/SubBanner';
import MoreOfferButton from '@/components/Home/MoreOfferButton';

const Content = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 100px;
`;

export default function Home() {
  return (
    <Content>
      <OfficialSection />
      <SubBanner />
      <PopularSection />
      <RecentSection />
      <MoreOfferButton />
    </Content>
  );
}
