import { CPThemeProvider, PropTypes, ScreenTypeProvider } from '@chimplanet/ui';
import { baseTheme } from 'theme';
import { ArticleProvider } from './articleContext';

/**
 * @param {{children: JSX.Element}}
 */
export default function AppContextProvider({ children }) {
  return (
    <ScreenTypeProvider screens={baseTheme.sizes}>
      <CPThemeProvider>
        <ArticleProvider children={children} />
      </CPThemeProvider>
    </ScreenTypeProvider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
