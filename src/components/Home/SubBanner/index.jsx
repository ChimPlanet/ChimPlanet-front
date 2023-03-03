import { useSubBanner } from '@/query/banner';
import { Suspense } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #d9d9d9;

  margin-top: 65px;
  margin-bottom: 65px;
  height: 108px;
  border-radius: 8px;

  ${({ theme }) => theme.media.desktop`
    ${`width: ${theme.widths.desktop}px`};
  `}
  ${({ theme }) => theme.media.tablet`
    ${`width: ${theme.widths.tablet}px`};
  `};
`;

const SubBannerImage = styled.img`
  object-fit: fill;
`;

export default function SubBanner() {
  return (
    <Container>
      <Suspense>
        <SubBannerContent />
      </Suspense>
    </Container>
  );
}

function SubBannerContent() {
  const { data: subBanner } = useSubBanner();

  return <SubBannerImage src={subBanner} />;
}
