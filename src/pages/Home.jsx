import HomeCarousel from '@/components/Home/HomeCarousel';
import JobOfferSection from '@/components/Home/JobOfferSection';
import styled from 'styled-components';
import { Suspense } from 'react';

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
        <JobOfferSection />
      </Content>
    </>
  );
}
