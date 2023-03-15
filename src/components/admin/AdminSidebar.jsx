import Sidebar from '@/common/components/Sidebar';
import {
  DashboardIcon,
  NotificationIcon,
  PopupIcon,
  UlIcon,
  UserIcon,
} from '@/common/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  ADMIN_WRAPPER_PATH,
  CONTENTS_PATH,
  DASHBOARD_PATH,
  MARKETING_PATH,
} from '@/constants/route';
import { Divider } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';

export default function AdminSidebar() {
  return (
    <Style>
      <Sidebar>
        <LogoLink to={`/${ADMIN_WRAPPER_PATH}`}>침플래닛</LogoLink>
        <Content>
          <Sidebar.Group>
            <Sidebar.GroupItem to="/" openTab icon={<PopupIcon />}>
              사이트 바로가기
            </Sidebar.GroupItem>
            <Sidebar.GroupItem icon={<UserIcon />}>
              운영진 설정
            </Sidebar.GroupItem>
          </Sidebar.Group>
          <GroupDivider />
          <Sidebar.Group
            title={<GroupTitle className="group-item">사이트 관리</GroupTitle>}
          >
            <Sidebar.GroupItem to={DASHBOARD_PATH} icon={<DashboardIcon />}>
              대시보드
            </Sidebar.GroupItem>
            <Sidebar.GroupItem to={CONTENTS_PATH} icon={<UlIcon />}>
              컨텐츠 관리
            </Sidebar.GroupItem>
            <Sidebar.GroupItem to={MARKETING_PATH} icon={<NotificationIcon />}>
              마케팅 관리
            </Sidebar.GroupItem>
          </Sidebar.Group>
        </Content>
      </Sidebar>
    </Style>
  );
}

const Style = styled.div`
  background-color: #2e2e2e;
  min-height: 100vh;
  min-height: 100svh;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

const LogoLink = styled(Link)`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.logo};
  padding: 15px 24px;
  border: 1px solid #454545;
  height: 64px;
`;

const Content = styled.div`
  margin-top: 24px;
  & .group-item,
  .group-title {
    padding-left: 24px;
  }
`;

const GroupTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #8c8c8c;
  margin-bottom: 20px;
`;

const GroupDivider = muiStyled(Divider)({
  margin: 24,
  borderColor: '#454545',
});
