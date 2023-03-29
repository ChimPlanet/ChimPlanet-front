import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.p``;

export const Content = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  border: 1px solid #454545;
  border-radius: 4px;
  padding: 25px 15px;
`;

export const ItemWrap = styled.div``;

export const ItemDescription = styled.p``;

export const ItemImageWrap = styled.div`
  margin-top: 8px;
  width: 357px;
  height: 169px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;

export const PlaceHolderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.main};
`;

export const PlaceHolderRow = styled.p`
  line-height: 20px;
`;
