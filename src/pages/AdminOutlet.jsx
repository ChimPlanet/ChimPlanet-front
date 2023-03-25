import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import {
  AdminSidebar,
  useAdminSidebarMenu,
} from '@/components/admin/AdminSidebar';
import Loading from '@/common/components/Loading';

export default function AdminOutlet() {
  const [Element] = useAdminSidebarMenu();

  return (
    <Layout extend={Element}>
      <AdminSidebar />
      <Wrapper>
        <Header />
        <Content>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </Content>
      </Wrapper>
    </Layout>
  );
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: ${({ extend }) =>
    extend ? '450px auto' : '240px auto'};
`;

const Wrapper = styled.div`
  background-color: #f0f3fa;
`;

const Content = styled.div`
  padding: 36px;
`;

const Header = styled.div`
  height: 64px;
  background-color: #fff;
  box-shadow: 0px 1px 5px rgba(25, 25, 25, 0.25);
`;
