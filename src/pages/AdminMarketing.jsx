import styled from 'styled-components';

import {
  PseudoHomeHeader,
  PseudoOfferSection,
} from '@/components/admin/Marketing';

export default function AdminMarketing() {
  return (
    <Container>
      <PseudoHomeHeader />
      {/* 배너 추가 */}
      <Layout>
        <PseudoOfferSection title="공식 콘텐츠 구인글" />
        {/* 서브배너 추가 */}
        <PseudoOfferSection title="실시간 인기 구인글" />
        <PseudoOfferSection title="최근 올라온 구인글" />
      </Layout>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
`;

const Layout = styled.div`
  margin: 0px auto;
  margin-top: 55px;

  ${({ theme }) => theme.media.desktop`
    ${`width: ${theme.widths.desktop}px`};
  `}
  ${({ theme }) => theme.media.tablet`
    ${`width: ${theme.widths.tablet}px`};
  `};
`;
