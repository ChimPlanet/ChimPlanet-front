import React from 'react';
import styled from 'styled-components';
import { useAdminSidebarMenu } from '../../AdminSidebar';
import { BannerForm } from './BannerForm';

export default function SubmitBannerButton() {
  const [, { push }] = useAdminSidebarMenu();

  const handleClick = () => {
    push(<BannerForm type="new" />);
  };

  return <Button onClick={handleClick}>배너 등록</Button>;
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
