import BookmarkSection from '@/components/BookmarkSection';
import Loading from '@/common/components/Loading';
import { Suspense } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  margin-top: 55px;

  ${({ theme }) => theme.media.desktop`
    ${`width: ${theme.widths.desktop}px`};
  `}
  ${({ theme }) => theme.media.tablet`
    ${`width: ${theme.widths.tablet}px`};
  `}
`;

const Header = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  margin-bottom: 20px;
`;

export default function Bookmark() {
  return (
    <Container>
      <Header>북마크</Header>
      <Suspense fallback={<Loading />}>
        <BookmarkSection />
      </Suspense>
    </Container>
  );
}
