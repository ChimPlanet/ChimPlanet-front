import theme from '@/theme';
import PropTypes from 'prop-types';
Theme.propTypes = {
  children: PropTypes.element.isRequired,
};

/**
 * Theme 관련 Component (Dark mode 지원?)
 */
export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
