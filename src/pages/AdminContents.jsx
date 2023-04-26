import { useState, useMemo } from 'react'
import styled from 'styled-components'
import { ContentsHeader } from '@/components/admin/Contents';
import useJobSection from '@/common/components/JobOffer/hooks/useJobSection';

import { ContentsPosts, ContentsTags, ContentsCategory } from '@/components/admin/Contents/components';

export default function AdminContents() {

  const [activeTab, setActiveTab] = useState('게시글');
  const { context } = useJobSection();

  const onActiveTab = (value) => {
    setActiveTab(value);
  };

  const Tab = useMemo(()=>{
    if(activeTab === '게시글'){
      return <ContentsPosts />
    }else if(activeTab === '태그'){
      return <ContentsTags />
    }else{
      return <ContentsCategory />
    }
  },[activeTab])

  return (
    <Container>
      <ContentsHeader onActiveTab={onActiveTab} activeTab={activeTab} />
      <Layout width={`${context.perPage * 320 - 20}px`}>
        { Tab }
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f3fa;
  display: flex;
  flex-direction: column;
`;

const Layout = styled.div``;