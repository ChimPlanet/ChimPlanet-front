import styled from "styled-components";
import PseudoBanner from "./components/PseudoBanner";
import PseudoHomeHeader from "./components/PseudoHomeHeader";
import PseudoOfferSection from "./components/PseudoOfferSection";  

export default function ContentsCategory() {

    return(
    <PaddingContainer>
      <Container>
        <PseudoHomeHeader />
        <Layout>
          <PseudoBanner />
          <PseudoOfferSection title="공식 콘텐츠 구인글" />
        </Layout>
      </Container>
    </PaddingContainer>
    );
};

const PaddingContainer = styled.div`
    padding: 36px;
    background-color: #f0f3fa;
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
