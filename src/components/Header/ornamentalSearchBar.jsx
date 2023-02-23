import styled from 'styled-components';
import SearchIcon from '@/components/icons/SearchIcon';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: grid;
  background-color: #f5f6f7;
  padding: 10px 20px;
  border-radius: 100px;
  width: 350px;
  grid-template-columns: auto 16px;
`;

const SearchInput = styled.input`
  padding: 0px;
  margin: 0px;
  background: 'red';
  outline: none;
  color: #b5bcc5;

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
      <SearchInput placeholder="# 태그 검색"></SearchInput>
      <SearchIcon />
    </Container>
  );
}
