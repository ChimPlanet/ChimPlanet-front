import { MenuIcon } from '@/common/icons';
import Bookmark from '@/components/Header/components/HeaderTab/bookmark';
import Logo from '@/components/Header/components/HeaderTab/logo';
import OrnamentalSearchBar from '@/components/Header/components/HeaderTab/ornamentalSearchBar';

import {
  Container,
  Content,
  Upper,
  UpperLeftSize,
  Bottom,
  MenuItem,
} from './PseudoHomeHeader.style';

export default function PseudoHomeHeader() {
  return (
    <Container>
      <Content>
        <Upper>
          <UpperLeftSize>
            <Logo />
            <OrnamentalSearchBar onClick={EmptyFn} />
          </UpperLeftSize>
          <Bookmark />
        </Upper>
        <Bottom>
          <MenuIcon />
          <MenuItem>카테고리</MenuItem>
          <MenuItem>이벤트</MenuItem>
          <MenuItem>공식</MenuItem>
        </Bottom>
      </Content>
    </Container>
  );
}

function EmptyFn() {}
