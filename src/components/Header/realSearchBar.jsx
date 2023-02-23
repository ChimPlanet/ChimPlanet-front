import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchIcon from '@/components/icons/SearchIcon';
import { useLayoutEffect, useRef } from 'react';

const Container = styled.div`
  display: grid;
  grid-template-columns: 16px auto;
  width: 1060px;
  padding: 16px 16px;
  border: 1px solid #00bd2f;
  border-radius: 100px;
`;

const SearchInput = styled.input`
  font-size: 16px;
  padding: 0px;
  margin: 0px;
  margin-left: 20px;
  outline: none;
  &:focus {
    outline: none;
  }
`;

RealSearchBar.propTypes = {
  tags: PropTypes.array.isRequired,
  removeTag: PropTypes.func.isRequired,
  addTag: PropTypes.func.isRequired,
};

export default function RealSearchBar({ tags, removeTag, addTag }) {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Container>
      <SearchIcon />
      <SearchInput ref={inputRef} placeholder="#태그 검색" />
    </Container>
  );
}
