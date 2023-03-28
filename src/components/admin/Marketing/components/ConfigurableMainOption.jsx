import { WriteIcon } from '@/common/icons';

import OptionBelowArrowIcon from '@/common/icons/OptionBelowArrowIcon';
import { useState } from 'react';
import { useAdminSidebarMenu } from '@/components/admin/AdminSidebar';
import ConfigurableSidebarMenu from './ConfigurableSidebarMenu';

import {
  Container,
  PreviewButton,
  Menu,
  MenuItem,
} from './ConfigurableMainOption.style';

export default function ConfigurableOption() {
  const [open, setOpen] = useState(false);

  const [, { clear, push }] = useAdminSidebarMenu();

  const toggleMenu = () => setOpen((p) => !p);

  const setupSidebarMenu = (type) => {
    clear();
    push(<ConfigurableSidebarMenu type={type} />);
  };

  const onBannerRegisterClick = () => setupSidebarMenu('register');
  const onBannerSequenceClick = () => setupSidebarMenu('sequence');

  return (
    <Container>
      <PreviewButton onClick={toggleMenu}>
        <WriteIcon />
        &nbsp; 배너 설정&nbsp;
        <OptionBelowArrowIcon />
      </PreviewButton>
      {open && (
        <Menu>
          <MenuItem onClick={onBannerRegisterClick}>배너 등록</MenuItem>
          <MenuItem onClick={onBannerSequenceClick}>순서 편집</MenuItem>
        </Menu>
      )}
    </Container>
  );
}
