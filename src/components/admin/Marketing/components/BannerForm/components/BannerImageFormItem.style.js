import styled from 'styled-components';

export const Container = styled.div``;

export const Description = styled.p``;

export const ImageWrap = styled.div`
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

export const PlaceHolderItem = styled.p`
  line-height: 20px;
`;

export const UnDraggingPane = styled.div``;

export const DraggingPane = styled.div``;
