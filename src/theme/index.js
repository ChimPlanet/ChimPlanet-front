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
  main: '#000',
  sub: '#000',
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
          @media only screen and (max-width: ${sizes.desktop}px) and (min-width: ${sizes.tablet}px) {
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
};

export default theme;
