import { styled } from '@chimplanet/ui';

import { RecruitSection } from '@common/components/Recruit/RecruitSection';
import RecentSection from '@components/Home/Sections/RecentSection';
import SubBanner from '@components/Home/SubBanner';
import Paths from './path';

export const Home = () => {
  return (
    <Content>
      <RecruitSection
        goto={Paths.Official}
        title="공식 콘텐츠 구인글"
        payload={RecruitPayloadMap.official}
      />
      <SubBanner />
      <RecruitSection
        goto={Paths.Popular}
        title="인기 구인글"
        payload={RecruitPayloadMap.popular}
      />
      <RecentSection />
    </Content>
  );
};

const RecruitPayloadMap = {
  official: {
    type: 'official',
  },
  popular: {
    type: 'popular',
  },
  recent: {
    type: 'recent',
  },
} as const;

const Content = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  padding-bottom: 100px;
`;
