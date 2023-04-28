import { PropTypes, styled } from 'chimplanet-ui';

export default function SidebarGroup({ children, title }) {
  return (
    <Container>
      {title}
      {children}
    </Container>
  );
}

SidebarGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

const Container = styled.div``;
