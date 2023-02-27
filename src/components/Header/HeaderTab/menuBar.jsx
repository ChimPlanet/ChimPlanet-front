import styled from 'styled-components';
import MenuIcon from '@/components/icons/MenuIcon';

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
      <MenuItem>카테고리</MenuItem>
    </Container>
  );
}
