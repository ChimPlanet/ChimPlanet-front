import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchIcon from '@/components/icons/SearchIcon';
import { useLayoutEffect, useRef } from 'react';
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
};

/**
 * 실제 동작하는 검색바 컴포넌트
 * (ornamental click -> display real component)
 * @param {{tags: string[], removeTag(id: number): void, addTag(tag: string): void}}
 * @returns
 */
export default function RealSearchBar({ tags, removeTag, addTag }) {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    // 검색창이 rendering 되면 input에 focus를 가져옴.
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Container>
      <SearchIcon />
      <SearchContent>
        <TagContainer>
          <Tag name="디자이너" color="blue" removeSelf={() => removeTag(0)} />
          {/* 그냥 레아이웃만 보는 임시 컴포넌트 */}
        </TagContainer>
        <SearchInput ref={inputRef} placeholder="#태그 검색" />
      </SearchContent>
    </Container>
  );
}
