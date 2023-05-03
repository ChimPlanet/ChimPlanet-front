import { styled, useThemeMode, useThemeUpdater } from 'chimplanet-ui';
import { Moon, Sun } from 'chimplanet-ui/icons';

export default function ThemeChangeButton() {
  const themeMode = useThemeMode();
  const toggle = useThemeUpdater();

  const Icon = themeMode === 'light' ? Moon : Sun;

  return (
    <Wrapper onClick={toggle}>
      <Icon />
      &nbsp;
      {themeMode === 'light' ? '다크 모드' : '라이트 모드'} 전환
    </Wrapper>
  );
}

const Wrapper = styled.button`
  display: block;
  position: fixed;
  bottom: 0px;
  right: 30px;
  margin-right: 5px;
  margin-bottom: 20px;
  border-radius: 30px;
  font-size: 16px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.bgColors.quaternary};
  color: ${({ theme }) => theme.textColors.primary};
  & svg {
    vertical-align: middle;
    margin-top: -3px;
  }

  &:hover svg {
    fill: ${({ theme }) => theme.specialColors.positive};
  }
`;
