import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px;
  font-size: 14px;
  font-weight: 500;
`;

export const UseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UseTypography = styled.span``;

export const UseSwitch = styled.div``;

export const BannerSubmitFormButton = styled.button`
  margin-top: 24px;
  display: block;
  background-color: #252525;
  border: 1px solid ${({ theme }) => theme.colors.logo};
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #fff;
  width: 100%;
  padding: 11px 0px;
`;
