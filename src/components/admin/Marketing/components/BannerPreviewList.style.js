import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #454545;

  border-radius: 4px;
`;

export const Wrapper = styled.div`
  cursor: pointer;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #454545;
  &:hover {
    background-color: #454545;
  }
  &:last-child {
    border-bottom: none;
  }
`;

export const BannerPreviewImg = styled.img`
  width: 125px;
  height: 44px;

  &:hover {
    transform-origin: top left;
    transform: scale(2.85);
    cursor: zoom-in;
  }
`;

export const Content = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.p``;

export const Information = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const InformationType = styled.span`
  color: #fff;
  font-weight: 700;
`;

export const InformationDetail = styled.span`
  margin-left: 4px;
`;

export const NonBannerComment = styled.p`
  text-align: center;
  padding: 10px 0px;
  font-size: 14px;
`;
