import styled from 'styled-components';

export const Padding = 10;

export const Container = styled.section`
  height: 375px;
  overflow: hidden;
  cursor: pointer;

  ${({ theme }) => theme.media.desktop`
    ${`.carousel__container {
      width: ${theme.widths.desktop + 2 * Padding}px;
    }`}
  `}
  ${({ theme }) => theme.media.tablet`
    ${`.carousel__container {
      width: ${theme.widths.tablet + 2 * Padding}px;
    }`}
  `}
`;

export const AnchorBannerItem = styled.div`
  height: 100%;
  -webkit-user-drag: none;

  ${({ theme }) => theme.media.desktop`
    ${`width: ${theme.widths.desktop + 2 * Padding}px`};
  `}
  ${({ theme }) => theme.media.tablet`
    ${`width: ${theme.widths.tablet + 2 * Padding}px`};
  `}

  & img {
    padding: 0px ${Padding}px;
    border-radius: 25px;
  }
`;
