import styled from 'styled-components';

export const Layout = styled.div`
  box-style: border-box;
  height: 375px;

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
