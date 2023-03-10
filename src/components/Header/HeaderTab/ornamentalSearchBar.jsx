import styled from 'styled-components';
import { SearchIcon } from '@/common/icons';
import PropTypes from 'prop-types';

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

OrnamentalSearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default function OrnamentalSearchBar({ onClick }) {
  return (
    <Container onClick={onClick}>
      <SearchInput placeholder="#태그 검색" />
      <SearchIcon />
    </Container>
  );
}
