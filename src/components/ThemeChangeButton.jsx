import { styled, useThemeMode, useThemeUpdater } from 'chimplanet-ui';
import { MoonIcon, SunIcon } from '@/common/icons';

export default function ThemeChangeButton() {
  const themeMode = useThemeMode();
  const toggle = useThemeUpdater();

  const Icon = themeMode === 'light' ? MoonIcon : SunIcon;

  return (
    <Wrapper role="button" onClick={toggle}>
      <Icon />
      <span>{themeMode === 'light' ? '다크 모드' : '라이트 모드'}로 전환</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 100px;
  font-size: 20px;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.15));
  padding: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.buttonColors.background};
  color: ${({ theme }) => theme.buttonColors.text};

  & svg {
    overflow: visible;
    vertical-align: middle;
    margin-top: -3px;
    /* stroke: ${({ theme }) => theme.textColors.primary}; */
  }

  & span {
    margin-left: 9px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.buttonColors.activeBackground};
    color: ${({ theme }) => theme.buttonColors.activeText};
  }

  &:hover svg {
    color: ${({ theme }) => theme.specialColors.positive};
    stroke: ${({ theme }) => theme.specialColors.positive};
  }

  ${({ theme }) => theme.media.mobile`
    & {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      padding: 0px;
    }

    & span {
      display: none;
    }

    & svg {
      margin-top: 10px;
    }
  `}
`;
