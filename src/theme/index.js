import { css } from 'styled-components';

// ! @media 감지 너비
const sizes = {
  mobile: 420,
  tablet: 768,
  desktop: 1200,
};

// ! 실제 컨테이너 너비
const widths = {
  tablet: 720,
  desktop: 1060,
  mobile: 390,
};

const media = {
  tablet: (...args) => undefined,
  desktop: (...args) => undefined,
  mobile: (...args) => undefined,
};

Object.keys(sizes).reduce((acc, label) => {
  switch (label) {
    case 'desktop':
      acc.desktop = (...args) =>
        css`
          @media only screen and (min-width: ${sizes.desktop}px) {
            ${args}
          }
        `;
      break;
    case 'tablet':
      acc.tablet = (...args) =>
        css`
          @media only screen and (min-width: ${sizes.tablet}px) and (max-width: ${sizes.desktop}px) {
            ${args}
          }
        `;
      break;
    case 'mobile':
      acc.mobile = (...args) =>
        css`
          @media only screen and (max-width: ${sizes.tablet}px) {
            ${args}
          }
        `;
      break;
    default:
      break;
  }
  return acc;
}, media);

const lightColors = {
  main: '#101C33',
  sub: '#868E96',
  logo: '#00BD2F',
  border: '#DBDEE2',
  borderSpecial: '#DBDEE2',
  borderPoint: '#DBDEE2',
  black: '#000000',
  help: '#8e94a0',
};

const lightBackgroundColor = {
  main: '#fff',
  header: '#fff',
  modal: '#fff',
  input: '#f5f6f7',
  sub: '#f5f6f7',
  searchbarActive: '#f5f6f7',
  searchbar: '#fff',
};

const darkColors = {
  main: '#fff',
  sub: '#868E96',
  logo: '#00BD2F',
  border: '#3A3B3D',
  borderSpecial: '#DBDEE2',
  borderPoint: '#A4ACB3',
  black: '#000000',
  help: '#fff',
};

const darkBackgroundColor = {
  main: '#1E1E1E',
  header: '#292A2D',
  modal: '#28292B',
  input: '#f5f6f7',
  sub: '#3E4145',
  searchbar: '#28292B',
  searchbarActive: '#242527',
};

export const baseTheme = {
  media,
  widths,
  sizes,
};

export const lightTheme = {
  colors: lightColors,
  backgroundColor: lightBackgroundColor,
  ...baseTheme,
};

export const darkTheme = {
  colors: darkColors,
  backgroundColor: darkBackgroundColor,
  ...baseTheme,
};
