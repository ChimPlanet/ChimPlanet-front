import styled from 'styled-components';
import PropTypes from 'prop-types';

import Bookmark from './bookmark';
import Logo from './logo';
import MenuBar from './menuBar';
import OrnamentalSearchBar from './ornamentalSearchBar';

const Container = styled.div``;

const UpperContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BottomContainer = styled.div``;

const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

HeaderTab.propTypes = {
  activeSearchTab: PropTypes.func.isRequired,
};

export default function HeaderTab({ activeSearchTab }) {
  return (
    <Container>
      <UpperContainer>
        <Group>
          <Logo />
          <OrnamentalSearchBar onClick={activeSearchTab} />
        </Group>
        <Bookmark />
      </UpperContainer>
      <BottomContainer>
        <MenuBar />
      </BottomContainer>
    </Container>
  );
}
