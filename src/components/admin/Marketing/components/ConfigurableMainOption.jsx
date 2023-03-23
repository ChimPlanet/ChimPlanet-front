import { WriteIcon } from '@/common/icons';
import styled from 'styled-components';
import OptionBelowArrowIcon from '@/common/icons/OptionBelowArrowIcon';
import { useState } from 'react';

export default function ConfigurableOption() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((p) => !p);

  return (
    <Container>
      <PreviewButton onClick={toggleMenu}>
        <WriteIcon />
        &nbsp; 배너 설정&nbsp;
        <OptionBelowArrowIcon />
      </PreviewButton>
      {open && (
        <Menu>
          <MenuItem>배너 등록</MenuItem>
          <MenuItem>순서 편집</MenuItem>
        </Menu>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top: -36px;
  margin-left: -4px;
  border-radius: 8px;
  overflow: hidden;
  width: 130px;
  background-color: #fff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
`;

const PreviewButton = styled.button`
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.logo};
  height: 36px;
  padding: 10px;
`;

const Menu = styled.div``;

const MenuItem = styled.button`
  width: 100%;
  display: block;
  font-size: 16px;
  padding: 8px 18px;
  color: #8e94a0;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
`;
