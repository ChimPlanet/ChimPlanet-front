import styled from 'styled-components';

import OfficialSection from '@/components/Home/Sections/OfficialSection';
import RecentSection from '@/components/Home/Sections/RecentSection';
import PopularSection from '@/components/Home/Sections/PopularSection';
import SubBanner from '@/components/Home/SubBanner';
import MoreOfferButton from '@/components/Home/MoreOfferButton';

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

const Content = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  padding-bottom: 100px;
`;
