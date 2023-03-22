import styled from "styled-components";
import { useRef } from "react";
import { SearchIcon } from '@/common/icons';

export default function ContentsSearch() {

    const inputRef = useRef();

    const OnClick = () => {
        inputRef.current.focus();
    };

    return (
        <Container onClick={OnClick}>
            <SearchInput ref={inputRef} placeholder="ID 또는 검색어를 입력하세요"/>
            <SearchIcon />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 350px;
    height: 36px;
    border-radius: 100px;
    background: #F5F6F7;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
`;

  const SearchInput = styled.input`
    width: 280px;
    height: 36px;
    padding: 0px;
    margin: 0px;
    outline: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #868E96;
    background: #F5F6F7;
`;