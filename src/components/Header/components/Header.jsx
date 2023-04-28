import { Header as BaseHeader } from 'chimplanet-ui';

import SearchTab from './SearchTab';
import CategoryOverlay from './CategoryOverlay';
import { useState } from 'react';
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
      />
      <Drawer anchor="right" open={visibleMobileMenu} onClick={handleClose}>
        <MobileMenu close={handleClose} />
      </Drawer>
    </>
  );
}
