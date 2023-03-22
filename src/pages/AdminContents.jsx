import styled from 'styled-components'
import { ContentsHeader, ContentsTab, ContentsOfferSection } from '@/components/admin/Contents';
import useJobSection from '@/common/components/JobOffer/hooks/useJobSection';

export default function AdminContents() {

  const { context } = useJobSection();

  return (
    <Container>
      <ContentsHeader />
      <Layout width={`${context.perPage * 320 - 20}px`}>
        <ContentsTab />
        <ContentsOfferSection />
      </Layout>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
`;

const Layout = styled.div`
  margin-left: 200px;
  ${({ theme }) => theme.media.desktop`
  ${`max-width: ${theme.widths.desktop}px`};
  `}
  ${({ theme }) => theme.media.tablet`
    ${`max-width: ${theme.widths.tablet}px`};
  `};
  min-width: 670px
`;