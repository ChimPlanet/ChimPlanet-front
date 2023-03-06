import theme from '@/theme';
import PropTypes from 'prop-types';
import { ThemeProvider as __ThemeProvider } from 'styled-components';

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

/**
 * @param {{children: JSX.Element}} param0
 */
export function ThemeProvider({ children }) {
  return <__ThemeProvider theme={theme}>{children}</__ThemeProvider>;
}
