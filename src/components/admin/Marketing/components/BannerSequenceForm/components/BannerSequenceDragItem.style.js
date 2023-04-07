import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 18px;
  display: flex;
  border-bottom: 1px solid #454545;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  justify-content: space-between;

  &[data-last='true'] {
    border-bottom: none;
  }
`;

export const Handle = styled.div`
  display: flex;
  justify-content: center;
  & svg {
    display: block;
    margin: auto;
  }
`;

export const Image = styled.img`
  width: 70px;
  height: 44px;
  user-select: none;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  column-gap: 10px;
`;

export const ContentItemName = styled.span`
  margin-right: 4px;
  font-weight: 700;
`;

export const ContentItemValue = styled.span``;

export const ContentTypo = styled.span``;

export const DeleteButton = styled.button``;
