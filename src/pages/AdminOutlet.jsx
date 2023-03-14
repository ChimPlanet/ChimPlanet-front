import AdminSidebar from '@/components/admin/AdminSidebar';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function AdminOutlet() {
  return (
    <Layout>
      <AdminSidebar />
      <Outlet />
    </Layout>
  );
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
  background-color: red;
`;
