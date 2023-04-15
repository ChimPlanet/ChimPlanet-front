import PropTypes from 'prop-types';
import { ThemeProvider as __ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from '@/theme';

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

/**
 * @param {{children: JSX.Element}}
 */
export function ThemeProvider({ children }) {
  return <__ThemeProvider theme={lightTheme}>{children}</__ThemeProvider>;
}
