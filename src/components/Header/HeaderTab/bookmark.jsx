import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BookmarkIcon from '@/components/icons/BookmarkIcon';
import { BOOKMARK_PATH } from '@/constants/route';

const BookmarkLink = styled(Link)`
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
    <BookmarkLink to={BOOKMARK_PATH}>
      북마크 &nbsp;
      <BookmarkIcon />
    </BookmarkLink>
  );
}
