import { css } from 'styled-components';

// ! @media 감지 너비
const sizes = {
  tablet: 768,
  desktop: 1200,
};

// ! 실제 컨테이너 너비
const widths = {
  tablet: 720,
  desktop: 1060,
};

const colors = {
  main: '#101C33',
  sub: '#868E96',
  logo: '#00BD2F',
  border: '#DBDEE2',
  black: '#000000',
};

const backgroundColor = {
  main: '#fff',
  input: '#f5f6f7',
};

const media = {
  tablet: (...args) => undefined,
  desktop: (...args) => undefined,
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
          @media only screen and (max-width: ${sizes.desktop}px) {
            ${args}
          }
        `;
      break;
    default:
      break;
  }
  return acc;
}, media);

const theme = {
  colors,
  media,
  widths,
  sizes,
  backgroundColor,
};

export default theme;
