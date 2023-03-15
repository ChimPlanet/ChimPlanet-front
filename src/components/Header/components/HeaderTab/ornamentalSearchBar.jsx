import styled from 'styled-components';
import PropTypes from 'prop-types';

import { SearchIcon } from '@/common/icons';

export default function OrnamentalSearchBar({ onClick }) {
  return (
    <Container onClick={onClick}>
      <SearchInput placeholder="#태그 검색" />
      <SearchIcon />
    </Container>
  );
}

OrnamentalSearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Container = styled.div`
  display: grid;
  padding: 10px 20px;
  border-radius: 100px;
  width: 350px;
  grid-template-columns: auto 16px;
  background-color: ${({ theme }) => theme.backgroundColor.input};
`;

const SearchInput = styled.input`
  padding: 0px;
  margin: 0px;
  outline: none;
  color: ${({ theme }) => theme.colors.sub};

  &:focus {
    outline: none;
  }
`;
