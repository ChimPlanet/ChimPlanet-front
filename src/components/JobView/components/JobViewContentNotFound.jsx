import React from 'react';

import { styled } from 'chimplanet-ui';
import { ChimplanetNotFoundIcon } from '@/common/icons';

export default function JobViewContentNotFound() {
  return (
    <Container>
      <ChimplanetNotFoundIcon />
      <Typo>
        <Text>앗! 원하시는 검색결과가 없어요</Text>
        <Text>검색어를 확인하시고 다시 검색해 주세요</Text>
      </Typo>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Typo = styled.div`
  margin-top: 22px;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #aab1bc;
  text-align: center;
  /* margin-left: -10px; */
`;
