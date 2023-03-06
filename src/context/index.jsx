import PropTypes from 'prop-types';
import { ArticleProvider } from './articleContext';
import { SizeTypeContextProvider } from './sizeTypeContext';
import { ThemeProvider } from './themeContext';

/**
 * @param {{children: JSX.Element}} param0
 */
export default function AppContextProvider({ children }) {
  return (
    <SizeTypeContextProvider>
      <ThemeProvider>
        <ArticleProvider children={children} />
      </ThemeProvider>
    </SizeTypeContextProvider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
