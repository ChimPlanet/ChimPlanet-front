import HomeCarousel from '@/components/Home/HomeCarousel';
import styled from 'styled-components';
import { Suspense } from 'react';
import OfficialSection from '@/components/Home/Sections/OfficialSection';
import RecentSection from '@/components/Home/Sections/RecentSection';
import PopularSection from '@/components/Home/Sections/PopularSection';
import SubBanner from '@/components/Home/SubBanner';
import MoreOfferButton from '@/components/Home/MoreOfferButton';

const Content = styled.div`
  margin: 0 auto;
  margin-top: 70px;

  ${({ theme }) => theme.media.desktop`
    ${`width: ${theme.widths.desktop}px`};
  `}
  ${({ theme }) => theme.media.tablet`
    ${`width: ${theme.widths.tablet}px`};
  `}
`;

export default function Home() {
  return (
    <>
      <Suspense>
        <HomeCarousel />
      </Suspense>
      <Content>
        <OfficialSection />
        <SubBanner />
        <PopularSection />
        <RecentSection />
        <MoreOfferButton />
      </Content>
    </>
  );
}
