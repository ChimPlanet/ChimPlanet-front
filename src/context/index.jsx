import PropTypes from 'prop-types';
import { ArticleProvider } from './articleContext';
import { SizeTypeContextProvider } from './sizeTypeContext';
import { ThemeProvider } from './themeContext';
import { PreloadProvider } from './preloadContext';

/**
 * @param {{children: JSX.Element}} param0
 */
export default function AppContextProvider({ children }) {
  return (
    <PreloadProvider>
      <SizeTypeContextProvider>
        <ThemeProvider>
          <ArticleProvider children={children} />
        </ThemeProvider>
      </SizeTypeContextProvider>
    </PreloadProvider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
