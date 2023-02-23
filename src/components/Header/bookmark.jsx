import styled from 'styled-components';
import BookmarkIcon from '../icons/BookmarkIcon';

const BookmarkStyled = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #101c33;
  border: 1px solid #dbdee2;
  padding: 6px 10px;
  border-radius: 15px;
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default function Bookmark() {
  return (
    <BookmarkStyled>
      북마크 &nbsp;
      <BookmarkIcon />
    </BookmarkStyled>
  );
}
