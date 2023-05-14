import { useState } from 'react';
import {
  Header as BaseHeader,
  useLocation,
  useScreenType,
} from 'chimplanet-ui';
import { styled as muiStyled } from '@mui/material/styles';

import SearchTab from './SearchTab';
import CategoryOverlay from './CategoryOverlay';
import { Drawer } from '@mui/material';
import { MobileMenu } from '@/components/MobileMenu';
import {
  AlternativeHeader,
  AlternativeHeaderMenu,
  enableAlternativeHeader,
  enableAlternativeMenu,
  hideHeaderMenubar,
} from '@/components/AlternativeHeader';

export default function Header() {
  const { pathname } = useLocation();
  const screenType = useScreenType();

  const [visibleMobileMenu, setVisibleMobileMenu] = useState(false);

  const handleOpenMobilMenu = () => setVisibleMobileMenu(true);

  const handleClose = () => setVisibleMobileMenu(false);

  return (
    <>
      <BaseHeader
        CategoryOverlayComponent={CategoryOverlay}
        SearchTabComponent={SearchTab}
        activeMobileMenu={handleOpenMobilMenu}
        hideMenuBar={hideHeaderMenubar(screenType, pathname)}
        alternativeComponent={
          enableAlternativeHeader(screenType, pathname) ? (
            <AlternativeHeader pathname={pathname} />
          ) : null
        }
        alternativeMenuComponent={
          enableAlternativeMenu(screenType, pathname) ? (
            <AlternativeHeaderMenu />
          ) : null
        }
      />
      <StyledDrawer
        anchor="right"
        open={visibleMobileMenu}
        onClick={handleClose}
      >
        <MobileMenu close={handleClose} />
      </StyledDrawer>
    </>
  );
}

const StyledDrawer = muiStyled(Drawer)(() => ({
  '& root': {
    backgroundColor: 'red',
  },
}));
