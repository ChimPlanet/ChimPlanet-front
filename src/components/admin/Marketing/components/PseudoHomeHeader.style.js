import styled from 'styled-components';

export const Container = styled.header`
  border-bottom: 1px solid #dbdee2;
`;

export const Content = styled.div`
  margin: 0px auto;
  padding-top: 13px;
  padding-bottom: 18px;

  ${({ theme }) => theme.media.desktop`
    ${`width: ${theme.widths.desktop}px`};
  `}
  ${({ theme }) => theme.media.tablet`
    ${`width: ${theme.widths.tablet}px`};
  `}
`;

export const Upper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UpperLeftSize = styled.div`
  display: flex;
  column-gap: 36px;
`;

export const Bottom = styled.div`
  margin-top: 34px;
  color: #444444;
  font-weight: 700;
  font-size: 14px;
`;

export const MenuItem = styled.span`
  margin-right: 40px;

  &:first-of-type {
    padding-left: 12px;
  }
`;
