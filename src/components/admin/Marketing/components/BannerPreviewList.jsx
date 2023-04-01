import React from 'react';

import useAdminSidebarMenu from '@/components/admin/AdminSidebar/hooks/useAdminSidebarMenu';

import {
  Wrapper,
  Container,
  Content,
  Title,
  Information,
  InformationDetail,
  InformationType,
  BannerPreviewImg,
  NonBannerComment,
} from './BannerPreviewList.style';
import { BannerForm } from './BannerForm';

/** @param {{title: string, items: import('./utils').PairedBanner[]}} */
export default function BannerPreviewList({ title, items }) {
  return (
    <Container>
      {items.length === 0 ? (
        <NonBannerComment children="등록된 배너가 없습니다." />
      ) : null}

      {items.map((element, i) => (
        <BannerPreviewListItem
          key={element.pc.id}
          data={element}
          index={i + 1}
          maxLength={items.length}
          title={title}
        />
      ))}
    </Container>
  );
}
/** @param {{data: import('./utils').PairedBanner, index: number, maxLength: number, title: string}} */
function BannerPreviewListItem({ data, maxLength, index, title }) {
  const [, { push }] = useAdminSidebarMenu();

  const handleClick = () => {
    push(<BannerForm type="update" payload={data} />);
  };

  return (
    <Wrapper onClick={handleClick}>
      <BannerPreviewImg
        src={data.mobile.sourceUrl}
        alt={data.mobile.fileName}
      />
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
