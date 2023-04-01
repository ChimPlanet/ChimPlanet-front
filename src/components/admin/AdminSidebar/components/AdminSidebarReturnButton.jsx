import { LeftArrowIcon } from '@/common/icons';
import styled from 'styled-components';
import useAdminSidebarMenu from '../hooks/useAdminSidebarMenu';

export default function AdminSidebarReturnButton() {
  const [, { pop }] = useAdminSidebarMenu();

  return (
    <ReturnButton onClick={pop}>
      <LeftArrowIcon />
      <Typography>돌아가기</Typography>
    </ReturnButton>
  );
}

const ReturnButton = styled.button`
  text-align: left;
  display: block;
  color: #fff;
  padding: 20px 0px;
  padding-left: 24px;
  width: 100%;
  border-bottom: 1px solid #454545;
`;

const Typography = styled.span`
  margin-left: 15px;
  font-size: 14px;
  font-weight: 500;
`;
