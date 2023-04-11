import styled from 'styled-components';

import {
  ConfigurableBanner,
  ConfigurableSubBanner,
  PseudoHomeHeader,
  PseudoOfferSection,
} from '@/components/admin/Marketing';
import MoreOfferButton from '@/components/Home/MoreOfferButton';

export default function AdminMarketing() {
  return (
    <PaddingContainer>
      <Container>
        <PseudoHomeHeader />
        <ConfigurableBanner />
        <Layout>
          <PseudoOfferSection title="공식 콘텐츠 구인글" />
          <ConfigurableSubBanner />
          <PseudoOfferSection title="인기 구인글" />
          <PseudoOfferSection title="최근 올라온 구인글" numOfLines={2} />
        </Layout>
        <MoreOfferButton />
      </Container>
    </PaddingContainer>
  );
}

const PaddingContainer = styled.div`
  padding: 36px;
`;

const Container = styled.div`
  background-color: #fff;
  padding-bottom: 100px;
`;

const Layout = styled.div`
  margin: 0px auto;
  margin-top: 55px;

  display: flex;
  flex-direction: column;
  row-gap: 65px;

  ${({ theme }) => theme.media.desktop`
    ${`width: ${theme.widths.desktop}px`};
  `}
  ${({ theme }) => theme.media.tablet`
    ${`width: ${theme.widths.tablet}px`};
  `};
`;
