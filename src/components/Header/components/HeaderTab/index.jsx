import styled from 'styled-components';
import PropTypes from 'prop-types';

import Bookmark from './bookmark';
import Logo from './logo';
import MenuBar from './menuBar';
import OrnamentalSearchBar from './ornamentalSearchBar';
import { MenuIcon, SearchIcon } from '@/common/icons';

export default function HeaderTab({ activeSearchTab, mobile }) {
  return (
    <Container>
      <UpperContainer>
        <Group>
          <Logo />
          <OrnamentalSearchBar onClick={activeSearchTab} />
        </Group>
        {!mobile ? (
          <Bookmark />
        ) : (
          <div>
            <IconButton onClick={activeSearchTab} children={<SearchIcon />} />
            <IconButton children={<MenuIcon />} />
          </div>
        )}
      </UpperContainer>
      <BottomContainer>
        <MenuBar />
      </BottomContainer>
    </Container>
  );
}

HeaderTab.propTypes = {
  activeSearchTab: PropTypes.func.isRequired,
};

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

const IconButton = styled.button`
  & svg {
    margin: auto;
  }
`;
