import styled from 'styled-components';
import MenuIcon from '../icons/MenuIcon';

const Container = styled.div`
  margin-top: 25px;
`;

const MenuItem = styled.span`
  padding-top: 5px;
  display: inline-block;
  font-weight: 700;
  font-size: 17px;
  line-height: 17px;
  vertical-align: middle;
  width: 100px;
  margin-left: 10px;
`;

export default function MenuBar() {
  return (
    <Container>
      <MenuIcon />
      <MenuItem>카테고리</MenuItem>
      <MenuItem>카테고리</MenuItem>
    </Container>
  );
}
