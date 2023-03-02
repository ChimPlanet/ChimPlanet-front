import styled from 'styled-components';
import MenuIcon from '@/components/icons/MenuIcon';
import { Link } from 'react-router-dom';
import { EVENT_PATH, OFFICIAL_PATH } from '@/constants/route';

const Container = styled.div`
  margin-top: 25px;
`;

const MenuItem = styled.span`
  display: inline-block;
  font-weight: 700;
  font-size: 14px;
  vertical-align: middle;
  width: 100px;
  margin-left: 10px;
`;

export default function MenuBar() {
  return (
    <Container>
      <MenuIcon />
      <MenuItem>카테고리</MenuItem>
      <MenuItem>
        <Link to={EVENT_PATH}>이벤트</Link>
      </MenuItem>
      <MenuItem>
        <Link to={OFFICIAL_PATH}>공식</Link>
      </MenuItem>
    </Container>
  );
}
