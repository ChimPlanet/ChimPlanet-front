import { MenuIcon } from '@/common/icons';
import Bookmark from '@/components/Header/components/HeaderTab/bookmark';
import Logo from '@/components/Header/components/HeaderTab/logo';
import OrnamentalSearchBar from '@/components/Header/components/HeaderTab/ornamentalSearchBar';
import styled from 'styled-components';

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

const Container = styled.header`
  border-bottom: 1px solid #dbdee2;
`;

const Content = styled.div`
  margin: 0px auto;
  padding-top: 13px;
  padding-bottom: 18px;

  ${({ theme }) => theme.media.desktop`
    ${`width: ${theme.widths.desktop}px`};
  `}
  ${({ theme }) => theme.media.tablet`
    ${`width: ${theme.widths.tablet}px`};
  `}
`;

const Upper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UpperLeftSize = styled.div`
  display: flex;
  column-gap: 36px;
`;

const Bottom = styled.div`
  margin-top: 34px;
  color: #444444;
  font-weight: 700;
  font-size: 14px;
`;

const MenuItem = styled.span`
  margin-right: 40px;

  &:first-of-type {
    padding-left: 12px;
  }
`;

function EmptyFn() {}
