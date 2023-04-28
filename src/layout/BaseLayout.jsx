import React from 'react';

import { styled } from 'chimplanet-ui';

import { Header } from '@/components/Header';

export default function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}

const Content = styled.div`
  margin: 0 auto;

  ${({ theme }) => theme.media.desktop`
    ${`width: ${theme.widths.desktop}px`};
  `}
  ${({ theme }) => theme.media.tablet`
    ${`width: ${theme.widths.tablet}px`};
  `}
${({ theme }) => theme.media.mobile`
    width: 350px;
  `}
`;
