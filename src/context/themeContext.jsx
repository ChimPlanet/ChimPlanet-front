import { useState } from 'react';
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
  const [theme] = useTheme();

  return (
    <__ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {children}
    </__ThemeProvider>
  );
}

export function useTheme() {
  // browser theme information
  const isBrowserDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  let initTheme = isBrowserDarkMode ? 'dark' : 'light';

  // custom theme mode
  const userTheme = localStorage.getItem('theme');

  // priority
  if (userTheme) {
    initTheme = userTheme;
  }

  const [theme, setTheme] = useState(initTheme);

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => setMode(theme === 'light' ? 'dark' : 'light');

  return [theme, toggleTheme];
}
