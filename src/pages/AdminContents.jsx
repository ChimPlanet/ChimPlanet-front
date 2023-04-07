import { useState } from 'react'
import styled from 'styled-components'
import { ContentsHeader } from '@/components/admin/Contents';
import ContentsPosts from '@/components/admin/Contents/components/post';
import ContentsTags from '@/components/admin/Contents/components/tag';
import useJobSection from '@/common/components/JobOffer/hooks/useJobSection';

export default function AdminContents() {

  const [activeTab, setActiveTab] = useState('게시글');
  const { context } = useJobSection();

  const onActiveTab = (value) => {
    setActiveTab(value);
  };

  return (
    <Container>
      <ContentsHeader onActiveTab={onActiveTab} activeTab={activeTab} />
      <Layout width={`${context.perPage * 320 - 20}px`}>
        { activeTab === '게시글' ?
        <ContentsPosts /> : <ContentsTags />}
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
`;

const Layout = styled.div`
  margin-left: 150px;
  ${({ theme }) => theme.media.desktop`
  ${`max-width: ${theme.widths.desktop}px`};
  `}
  ${({ theme }) => theme.media.tablet`
    ${`max-width: ${theme.widths.tablet}px`};
  `};
  min-width: 670px
`;