import { useState, useCallback } from 'react'
import styled from 'styled-components';
import { MenuIcon } from '@/common/icons';
import Bookmark from '@/components/Header/components/HeaderTab/bookmark';
import Logo from '@/components/Header/components/HeaderTab/logo';
import OrnamentalSearchBar from '@/components/Header/components/HeaderTab/ornamentalSearchBar';
import Menubar from "./Menubar";
import useTimer from '@/common/hooks/useTimer';
import { useTagList } from "@/query/tag";

export default function PseudoHomeHeader() {

  const [isCategoryVisible, setIsCategoryVisible] = useState(false);

  const { data: tag } = useTagList();

  const closeCategory = useCallback(
    () => setIsCategoryVisible(false),
    [setIsCategoryVisible],
  );

  const parents = tag.filter((el) => (el.childTagId === el.parentTagId))

  const children = tag.filter((el) => (el.childTagId !== el.parentTagId))

  //console.log(children,parents)

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
              <FloatMenu 
                  onMouseOver={() => setIsCategoryVisible(true)}
                  onMouseOut={() => setIsCategoryVisible(false)}>
                  <MenuIcon />
                  <MenuItem>카테고리</MenuItem>
                  { isCategoryVisible && 
                    <>
                      <Menubar 
                        parents={parents}
                        children={children}
                        close={closeCategory}
                      />
                    </>
                  }
              </FloatMenu>
              <MenuItem>이벤트</MenuItem>
              <MenuItem>공식</MenuItem>
          </Bottom>
      </Content>
    </Container>
  );
}

function EmptyFn() {}

const Container = styled.header`
  border-bottom: 1px solid #dbdee2;
`;

const Content = styled.div`
  margin: 0px auto;
  padding-top: 13px;
  padding-bottom: 18px;
  position: relative;

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
  position: relative;
  margin-top: 34px;
  color: #444444;
  font-weight: 700;
  font-size: 14px;
`;

const FloatMenu = styled.span`
  padding-bottom: 19px;
`;

const MenuItem = styled.span`
  margin-right: 40px;
  cursor: pointer;
  &:first-of-type {
    padding-left: 12px;
  }
`;
