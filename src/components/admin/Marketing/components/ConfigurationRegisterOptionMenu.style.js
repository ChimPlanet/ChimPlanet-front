import styled from 'styled-components';

export const ControlBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RefreshButton = styled.button`
  background-color: ${({ theme }) => theme.colors.logo};
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
`;

export const Typography = styled.p`
  font-weight: 500;
  font-size: 14px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 8px;
`;
