import theme from '@/theme';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

Theme.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

/**
 * Theme 관련 Component (Dark mode 지원?)
 */
export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
