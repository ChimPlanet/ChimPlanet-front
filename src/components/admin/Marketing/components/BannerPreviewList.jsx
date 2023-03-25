import { Banner } from '@/service/banner';
import React from 'react';
import styled from 'styled-components';

/** @param {{items: Banner[]}} */
export default function BannerPreviewList({ items }) {
  return (
    <Container>
      {items.map((element, i) => (
        <BannerPreviewListItem
          key={element.id}
          data={element}
          index={i + 1}
          maxLength={items.length}
        />
      ))}
    </Container>
  );
}
/** @param {{data: Banner, index: number, maxLength: number}} */
function BannerPreviewListItem({ data, maxLength, index }) {
  return (
    <Wrapper>
      <BannerPreviewImg src={data.sourceUrl} alt={data.fileName} />
      <Content>
        <Title>
          메인비주얼[{index}/{maxLength}]
        </Title>
        <Information>
          <div>
            <InformationType>PC</InformationType>
            <InformationDetail>1060 x 375</InformationDetail>
          </div>
          <div>
            <InformationType>모바일</InformationType>
            <InformationDetail>160 x 375</InformationDetail>
          </div>
        </Information>
      </Content>
    </Wrapper>
  );
}

const Container = styled.div`
  border: 1px solid #454545;

  border-radius: 4px;
`;

const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  column-gap: 20px;
  border-bottom: 1px solid #454545;
  &:last-child {
    border-bottom: none;
  }
`;

const BannerPreviewImg = styled.img`
  width: 125px;
  height: 44px;

  &:hover {
    transform-origin: top left;
    transform: scale(2.85);
    cursor: zoom-in;
  }
`;

const Content = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.p``;

const Information = styled.div`
  display: flex;
  column-gap: 10px;
`;

const InformationType = styled.span`
  color: #fff;
  font-weight: 700;
`;

const InformationDetail = styled.span`
  margin-left: 4px;
`;
