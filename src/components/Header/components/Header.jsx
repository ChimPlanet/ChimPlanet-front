import { useCallback, useState } from 'react';
import styled from 'styled-components';

import HeaderTab from './HeaderTab';
import SearchTab from './SearchTab';
import { useSizeType } from '@/context/sizeTypeContext';
import { useMemo } from 'react';

export default function Header() {
  const [activeTab, setActiveTab] = useState('header');
  const sizeType = useSizeType();

  const isMobile = useMemo(() => sizeType === 'mobile', [sizeType]);

  const activeSearchTab = useCallback(() => {
    setActiveTab('search');
  }, [setActiveTab]);

  const activeHeaderTab = useCallback(() => {
    setActiveTab('header');
  }, [setActiveTab]);

  return (
    <>
      {activeTab === 'search' && (
        <BackgroundSheet data-mobile={isMobile} onClick={activeHeaderTab} />
      )}
      <Container>
        <Content>
          <HeaderTab mobile={isMobile} activeSearchTab={activeSearchTab} />
          {activeTab === 'search' && (
            <SearchTab
              mobile={isMobile}
              activeHeaderTab={activeHeaderTab}
              afterSearch={activeHeaderTab}
            />
          )}
        </Content>
      </Container>
    </>
  );
}

const Container = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.border}`};
  background-color: ${({ theme }) => theme.backgroundColor.header};
`;

const Content = styled.div`
  margin: 0 auto;
  padding-top: 12px;

  ${({ theme }) => theme.media.desktop`
    ${`width: ${theme.widths.desktop}px`};
  `}

  ${({ theme }) => theme.media.tablet`
    ${`width: ${theme.widths.tablet}px`};
  `}

  ${({ theme }) => theme.media.mobile`
    ${`width: ${theme.widths.mobile}px`};
  `}
`;

const BackgroundSheet = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.107);

  &[data-mobile='true'] {
    background-color: #fff;
  }
`;
