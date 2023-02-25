import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchIcon from '@/components/icons/SearchIcon';
import { useLayoutEffect, useRef, useCallback } from 'react';
import Tag from '@/components/Tag';

const Container = styled.div`
  display: grid;
  grid-template-columns: 16px auto;
  width: 1060px;
  padding: 0px 14px;
  border: 1px solid #00bd2f;
  border-radius: 100px;
  align-items: center;
  height: 50px;
`;

const SearchContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 12px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  padding-right: 10px;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  font-size: 16px;
  padding: 0px;
  padding-top: 2px;
  margin: 0px;
  outline: none;
  &:focus {
    outline: none;
  }
`;

RealSearchBar.propTypes = {
  tags: PropTypes.array.isRequired,
  removeTag: PropTypes.func.isRequired,
  addTag: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
};

/**
 *
 * @typedef {object} RealSearchBarProps
 * @property {string[]} tags
 * @property {string} input
 * @property {(id: number) => void} removeTag
 * @property {(id: number) => void} addTag
 * @property {(input: string) => void} setInput
 * @property {() => void} search
 *
 *
 * 실제 동작하는 검색바 컴포넌트
 * (ornamental click -> display real component)
 * @param {RealSearchBarProps} props
 * @returns
 */
export default function RealSearchBar({
  tags,
  removeTag,
  addTag,
  input,
  setInput,
  search,
}) {
  const inputRef = useRef(null);
  const isTabRef = useRef(false);

  useLayoutEffect(() => {
    // 검색창이 rendering 되면 input에 focus를 가져옴.
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInput = useCallback(
    ({ target }) => {
      setInput(target.value);
    },
    [setInput],
  );
  const handleEnter = useCallback(
    (e) => {
      const key = e.key;
      if (key === 'Tab') {
        e.preventDefault();
        if (input.trim().length > 0 && isTabRef.current === false) {
          isTabRef.current = true;
        } else if (isTabRef.current === true) {
          isTabRef.current = false;
          addTag(input);
        }
      }
      if (key === 'Enter' && tags.length > 0) search();
      if (key === 'Backspace' && input.length === 0 && tags.length > 0)
        removeTag(tags[tags.length - 1]);
    },
    [input, addTag, removeTag, tags, search],
  );

  return (
    <Container>
      <SearchIcon />
      <SearchContent>
        <TagContainer>
          {tags.map((tag) => (
            <Tag
              key={tag}
              name={tag}
              color="blue"
              removeSelf={() => removeTag(tag)}
            />
          ))}
        </TagContainer>
        <SearchInput
          ref={inputRef}
          value={input}
          placeholder="#태그 검색 (Tab을 눌러 태그 완성)"
          onChange={handleInput}
          onKeyDown={handleEnter}
        />
      </SearchContent>
    </Container>
  );
}
