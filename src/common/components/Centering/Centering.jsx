import { styled } from 'chimplanet-ui';

const defaultStyles = {
  mobile: '',
  tablet: '',
  desktop: '',
  default: '',
};

export const Centering = ({ children, styles }) => {
  return (
    <Content styles={{ ...defaultStyles, ...styles }} children={children} />
  );
};

export default Centering;

const Content = styled.div`
  margin: 0 auto;

  ${({ styles }) => styles.default}

  ${({ theme, styles }) => theme.media.desktop`
    ${`width: ${theme.widths.desktop}px`};
    ${styles.desktop}
  `}
  ${({ theme, styles }) => theme.media.tablet`
    ${`width: ${theme.widths.tablet}px`};
    ${styles.tablet}
  `}
${({ theme, styles }) => theme.media.mobile`
    width: 350px;
    ${styles.mobile}
  `}
`;
