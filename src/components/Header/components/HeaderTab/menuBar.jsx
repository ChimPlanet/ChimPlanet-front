import styled from 'styled-components';
import { useState, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { MenuIcon } from '@/common/icons';
import { EVENT_PATH, HOME_PATH, OFFICIAL_PATH } from '@/constants/route';
import CategoryOverlay from '../CategoryOverlay/index';
import { FloatingMenu } from '@/common/components';
import useTimer from '@/common/hooks/useTimer';
import { useSizeType } from '@/context/sizeTypeContext';

export default function MenuBar() {
  const { pathname } = useLocation();
  const sizeType = useSizeType();

  const categoryAnchor = useRef(null);
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);

  const closeCategory = useCallback(
    () => setIsCategoryVisible(false),
    [setIsCategoryVisible],
  );

  // ! 1 초 안에 카테고리 안으로 들어가지 않는 경우, 카테고리가 닫힘
  const { clear, fire } = useTimer(closeCategory, 500);

  return (
    <>
      <Container>
        {/* Size에 따라서 메뉴바 변경 */}
        {sizeType !== 'mobile' ? (
          <CategoryItem
            ref={categoryAnchor}
            onMouseOver={() => setIsCategoryVisible(true)}
            onMouseOut={fire}
          >
            <MenuIcon />
            &nbsp;&nbsp; 카테고리
          </CategoryItem>
        ) : (
          <MenuItem active={pathname === HOME_PATH}>
            <MenuLink to={HOME_PATH}>홈</MenuLink>
          </MenuItem>
        )}

        <MenuItem active={pathname === EVENT_PATH}>
          <MenuLink to={EVENT_PATH}>이벤트</MenuLink>
        </MenuItem>
        <MenuItem active={pathname == OFFICIAL_PATH}>
          <MenuLink to={OFFICIAL_PATH}>공식</MenuLink>
        </MenuItem>
      </Container>
      {isCategoryVisible && (
        <FloatingMenu
          position="fixed"
          anchorRef={categoryAnchor}
          close={closeCategory}
          onMouseEnter={clear}
        >
          <CategoryOverlay />
        </FloatingMenu>
      )}
    </>
  );
}

const Container = styled.div`
  position: relative;
  color: #444444;
  font-size: 14px;
  font-weight: 700;
  margin-top: 30px;
`;

const MenuItem = styled.div`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  height: 35px;
  user-select: none;
  padding: 0px 23px;

  color: ${({ theme }) => theme.colors.main};

  border-bottom: ${({ theme, active }) =>
    active ? `2px solid ${theme.colors.logo}` : 'none'};

  &:hover {
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.border}`};
  }
`;

const CategoryItem = styled(MenuItem)`
  padding-left: 0;
`;

const MenuLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`;
