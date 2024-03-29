import { styled } from '@chimplanet/ui';
import { useLayoutEffect, useRef } from 'react';

import { Search } from '@chimplanet/ui/icons';
import { useSearchContext } from '../../context/searchContext';
import useSearchInput from '../../hooks/useSearchInput';
import RealSearchTagList from './realSearchTagList';

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
export default function RealSearchBar({ desktop }) {
  const [{ input, tags }, { setInput, removeTag }] = useSearchContext();

  const inputRef = useRef(null);
  const handleEnter = useSearchInput();

  // 검색창이 rendering 되면 input에 focus를 가져옴.
  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  // Input Event
  const handleInput = ({ target }) => setInput(target.value);

  return (
    <Container id="search-bar" data-desktop={desktop}>
      <Search width="18px" />
      <SearchContent>
        <RealSearchTagList tags={tags} removeTag={removeTag} />
        <SearchInput
          ref={inputRef}
          value={input}
          placeholder={tags.length > 0 ? '#태그 검색' : '#태그, 팀 검색'}
          onChange={handleInput}
          onKeyDown={handleEnter}
        />
      </SearchContent>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 16px auto;
  padding: 0px 14px;
  border: ${({ theme }) => `1px solid ${theme.specialColors.positive}`};
  border-radius: 100px;
  align-items: center;
  height: 50px;
  flex: 1;
  color: ${({ theme }) => theme.textColors.primary};
  background-color: ${({ theme }) => theme.bgColors.quaternary};

  &[data-desktop='false'] {
    border: none;
    /* background-color: #f5f5f5; */
    background-color: ${({ theme }) => theme.bgColors.tertiary};
  }
`;

const SearchContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 12px;
  overflow-x: auto;
  padding-bottom: 1px;
  margin-top: 2px;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  font-size: 16px;
  padding: 0px;
  margin: 0px;
  outline: none;

  color: ${({ theme }) => theme.textColors.primary};
  &:focus {
    outline: none;
  }
`;
