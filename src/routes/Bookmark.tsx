import { styled } from '@chimplanet/ui';

import BookmarkSection from '@components/BookmarkSection';

export const Bookmark = () => {
  return (
    <Container>
      <Header>북마크</Header>
      <BookmarkSection />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  margin-top: 55px;
  padding-bottom: 75px;

  ${({ theme }) => theme.media.desktop`
    ${`width: ${theme.widths.desktop}px`};
  `}
  ${({ theme }) => theme.media.tablet`
    ${`width: ${theme.widths.tablet}px`};
  `}
`;

const Header = styled.h2`
  color: ${({ theme }) => theme.textColors.primary};
  font-size: 20px;
  margin-bottom: 20px;
`;
