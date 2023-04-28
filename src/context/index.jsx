import { CPThemeProvider, PropTypes, ScreenTypeProvider } from 'chimplanet-ui';
import { ArticleProvider } from './articleContext';
import { PreloadProvider } from './preloadContext';
import { baseTheme } from '@/theme';

/**
 * @param {{children: JSX.Element}}
 */
export default function AppContextProvider({ children }) {
  return (
    <PreloadProvider>
      <ScreenTypeProvider screens={baseTheme.sizes}>
        <CPThemeProvider>
          <ArticleProvider children={children} />
        </CPThemeProvider>
      </ScreenTypeProvider>
    </PreloadProvider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
