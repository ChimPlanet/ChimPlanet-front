import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 32px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.span``;

export const HeaderButton = styled.button`
  padding: 8px;
  color: white;
  background-color: ${({ theme }) => theme.colors.logo};
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
`;

export const WrapForm = styled.div`
  margin-top: 10px;
`;
