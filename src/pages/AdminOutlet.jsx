import AdminSidebar from '@/components/admin/AdminSidebar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Loading from '../common/components/Loading';

export default function AdminOutlet() {
  return (
    <Layout>
      <AdminSidebar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </Layout>
  );
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
  background-color: red;
`;
