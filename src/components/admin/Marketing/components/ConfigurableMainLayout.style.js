import styled from 'styled-components';

export const Layout = styled.div`
  box-sizing: content-box;
  height: 375px;

  border: 4px solid transparent;

  &[data-configurable='true'] {
    border: 4px solid ${({ theme }) => theme.colors.logo};
  }
`;

export const OptionsBox = styled.div`
  position: absolute;
  z-index: 1000;
  ${({ posX, posY }) => `
    left: ${posX};
    top: ${posY};
  `}
`;
