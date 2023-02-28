import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchIcon from '@/components/icons/SearchIcon';
import { useLayoutEffect, useRef, useCallback } from 'react';
import Tag from '@/components/Tag';
import { ignorePrefix, isHangulChar } from '@/utils/str';
import { SearchTagSequenceColor } from '@/constants/color';

const Container = styled.div`
  display: grid;
  grid-template-columns: 16px auto;
  padding: 0px 14px;
  border: ${({ theme }) => `1px solid ${theme.colors.logo}`};

  border-radius: 100px;
  align-items: center;
  height: 50px;
  margin-bottom: 35px;
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
  const lastHangulRef = useRef(false);

  useLayoutEffect(() => {
    // 검색창이 rendering 되면 input에 focus를 가져옴.
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInput = useCallback(
    ({ target }) => setInput(target.value),
    [setInput],
  );
  const handleEnter = useCallback(
    (e) => {
      switch (e.key) {
        case 'Enter':
          // 입력된 Tag 값이 있고 비어있는 경우 검색
          if (tags.length !== 0 && input.length === 0) search();
          else {
            // 한글 관련 이벤트 오류 해소
            if (lastHangulRef.current) {
              lastHangulRef.current = false;
              return;
            }
            addTag(ignorePrefix(input));
          }
          break;
        case 'Backspace':
          if (input.length === 0 && tags.length > 0) removeTag(tags.at(-1));
          break;
        default:
          lastHangulRef.current = isHangulChar(e.key);
      }
    },
    [input, addTag, removeTag, tags, search],
  );

  return (
    <Container>
      <SearchIcon />
      <SearchContent>
        <TagContainer>
          {tags.map((tag, i) => (
            <Tag
              key={tag}
              name={tag}
              color="black"
              borderColor="transparent"
              fontSize="16px"
              padding="7px 10px"
              weight={400}
              backgroundColor={SearchTagSequenceColor[i]}
              removeSelf={() => removeTag(tag)}
            />
          ))}
        </TagContainer>
        <SearchInput
          ref={inputRef}
          value={input}
          placeholder="#태그, 팀, 포지션 검색"
          onChange={handleInput}
          onKeyDown={handleEnter}
        />
      </SearchContent>
    </Container>
  );
}
