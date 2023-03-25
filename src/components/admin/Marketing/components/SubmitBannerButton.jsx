import React from 'react';
import styled from 'styled-components';

export default function SubmitBannerButton({ onClick }) {
  return <Button onClick={onClick}>배너 등록</Button>;
}

const Button = styled.button`
  font-size: 14px;
  color: #fff;
  border: 1px solid #00bd2f;
  border-radius: 4px;
  padding: 12px;
  text-align: center;
  background-color: #252525;
`;
