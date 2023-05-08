import { styled, useThemeMode, useThemeUpdater } from 'chimplanet-ui';

import { styled as muiStyled } from '@mui/material/styles';
import MUISwitch from '@mui/material/Switch';

const MobileThemeChangeButton = () => {
  const themeMode = useThemeMode();
  const toggle = useThemeUpdater();

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <span>다크모드</span>
      <OptionSwitch checked={themeMode !== 'light'} onClick={toggle} />
    </Container>
  );
};

export default MobileThemeChangeButton;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.textColors.primary};
  font-weight: 700;
  font-size: 14px;
  padding: 11px 0px;
  margin: 15px 0px;
`;

export const OptionSwitch = muiStyled(MUISwitch)({
  '& .MuiSwitch-switchBase': {
    color: '#00E4B3',
    '& + .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: '#EFEFEF',
    },
    '&.Mui-checked': {
      color: '#EFEFEF',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#00E4B3',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 18,
    height: 18,
    margin: 2,
  },
});
