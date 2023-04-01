import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -36px;
  margin-left: -4px;
  border-radius: 8px;
  overflow: hidden;
  width: 130px;
  background-color: #fff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
`;

export const PreviewButton = styled.button`
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.logo};
  height: 36px;
  padding: 10px;
`;

export const Menu = styled.div``;

export const MenuItem = styled.button`
  width: 100%;
  display: block;
  font-size: 16px;
  padding: 8px 18px;
  color: #8e94a0;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
`;
