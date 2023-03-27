import styled from 'styled-components';
import { useState } from 'react'
import { DetailedSettingsIcon, CafeIcon, PreviewIcon } from '@/common/icons'


export default function ContentOfferSidebar({ id, handleSettings}) {

  return (
    <>
      <Container>
        <a href={`https://cafe.naver.com/steamindiegame/${id}`} target="_blank">
          <IconContainer>
            <CafeIcon />
          </IconContainer>
        </a>
        <IconText>원문</IconText>
        <div onClick={handleSettings}>
          <IconContainer>
            <DetailedSettingsIcon />
          </IconContainer>
        </div>
        <IconText>세부 정보 설정</IconText>
        <div>
          <IconContainer>
            <PreviewIcon />
          </IconContainer>
        </div>
        <IconText>미리보기</IconText>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: 20px;
  position: sticky;
  top: 20px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  width: 46px;
  height: 46px;
  background: #ffffff;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const IconText = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #ffffff;
  margin-bottom: 16px;
`;
