import React from 'react';

import { Banner } from '@/service/banner';
import {
  Wrapper,
  Container,
  Content,
  Title,
  Information,
  InformationDetail,
  InformationType,
  BannerPreviewImg,
} from './BannerPreviewList.style';

/** @param {{title: string, items: Banner[]}} */
export default function BannerPreviewList({ title, items }) {
  return (
    <Container>
      {items.map((element, i) => (
        <BannerPreviewListItem
          key={element.id}
          data={element}
          index={i + 1}
          maxLength={items.length}
          title={title}
        />
      ))}
    </Container>
  );
}
/** @param {{data: Banner, index: number, maxLength: number, title: string}} */
function BannerPreviewListItem({ data, maxLength, index, title }) {
  return (
    <Wrapper>
      <BannerPreviewImg src={data.sourceUrl} alt={data.fileName} />
      <Content>
        <Title>
          {title}[{index}/{maxLength}]
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
