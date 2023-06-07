import { ERROR_PATH } from '@/constants/route';
import { baseTheme } from '@/theme';
import {
  CPThemeProvider,
  PropTypes,
  ScreenTypeProvider,
  useLocation,
} from 'chimplanet-ui';
import { ArticleProvider } from './articleContext';

/**
 * @param {{children: JSX.Element}}
 */
export default function AppContextProvider({ children }) {
  const { pathname } = useLocation();
  return (
    <ScreenTypeProvider screens={baseTheme.sizes}>
      <CPThemeProvider onlyLight={pathname === ERROR_PATH}>
        <ArticleProvider children={children} />
      </CPThemeProvider>
    </ScreenTypeProvider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
