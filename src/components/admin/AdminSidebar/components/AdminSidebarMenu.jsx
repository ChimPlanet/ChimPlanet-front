import styled from 'styled-components';
import AdminSidebarReturnButton from './AdminSidebarReturnButton';

export default function AdminSidebarMenu({ children }) {
  return (
    <Container>
      <AdminSidebarReturnButton />
      {children}
    </Container>
  );
}

const Container = styled.div``;
