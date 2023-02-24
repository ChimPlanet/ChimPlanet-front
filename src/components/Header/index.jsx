import { SIZE_WIDTH } from '@/constants/size';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import HeaderTab from './headerTab';
import SearchTab from './searchTab';

const Container = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  border-bottom: 1px solid #dbdee2;
  background-color: #fff;
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 12px 0px;
  max-width: ${SIZE_WIDTH}px;
`;

const BackgroundSheet = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.107);
`;

export default function Header() {
  const [activeTab, setActiveTab] = useState('header');

  const activeSearchTab = useCallback(() => {
    setActiveTab('search');
  }, [setActiveTab]);

  const activeHeaderTab = useCallback(() => {
    setActiveTab('header');
  }, [setActiveTab]);

  return (
    <>
      {activeTab === 'search' && <BackgroundSheet onClick={activeHeaderTab} />}
      <Container>
        <Content>
          {activeTab === 'header' ? (
            <HeaderTab activeSearchTab={activeSearchTab} />
          ) : (
            <SearchTab activeHeaderTab={activeHeaderTab} />
          )}
        </Content>
      </Container>
    </>
  );
}
