import { useState } from 'react';
import { Header as BaseHeader } from 'chimplanet-ui';
import { styled as muiStyled } from '@mui/material/styles';

import SearchTab from './SearchTab';
import CategoryOverlay from './CategoryOverlay';
import { Drawer } from '@mui/material';
import { MobileMenu } from '@/components/MobileMenu';

export default function Header() {
  const [visibleMobileMenu, setVisibleMobileMenu] = useState(false);

  const handleOpenMobilMenu = () => setVisibleMobileMenu(true);

  const handleClose = () => setVisibleMobileMenu(false);

  return (
    <>
      <BaseHeader
        CategoryOverlayComponent={CategoryOverlay}
        SearchTabComponent={SearchTab}
        activeMobileMenu={handleOpenMobilMenu}
        hideMenuBar={false}
        alternativeComponent={null}
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
