import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { SearchIcon } from '@/common/icons';
import { ModalState } from '@/atoms/ContentManagement';
import { useSetRecoilState } from "recoil";

export default function ContentsHeader({onActiveTab, activeTab}){
      
    const [value, setValue] = useState('')
    const inputRef = useRef();
    const sort = useSetRecoilState(ModalState);

    const handleKeyDown = (e) => {
      if(e.key === 'Enter'){
        sort(value)
      }
    }
    
    const TabActive = (e) => {
        onActiveTab(e.target.innerText);
    };

    const handleSearch = (e) => {
        setValue(e.target.value)
    }
    
    const OnClick = () => {
        inputRef.current.focus();
    };

    return(
        <Container>
            <Header>
                <Title>게시글 및 태그</Title>
                <NavContainer>
                    <Menu>
                        <MenuItem onClick={TabActive} active={'게시글' === activeTab}>
                            게시글
                        </MenuItem>
                        <MenuItem onClick={TabActive} active={'카테고리' === activeTab}>
                            카테고리
                        </MenuItem>
                        <MenuItem onClick={TabActive} active={'태그' === activeTab}>
                            태그
                        </MenuItem>
                    </Menu>
                </NavContainer>
            </Header>
            <Box>
              <InputContainer onClick={OnClick}>
                  <SearchInput 
                  onKeyPress={handleKeyDown}
                  onChange={handleSearch} 
                  ref={inputRef}
                  value={value} 
                  placeholder="ID 또는 검색어를 입력하세요"/>
                  <SearchIcon />
              </InputContainer>
            </Box>
        </Container>
    );
};

const Box = styled.div`
  margin-left: 42%;
  `;

const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #cdcfd6;
  font-family: 'Pretendard Variable';
  font-style: normal;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const Header = styled.header`
  padding: 32px;
  padding-bottom: 0;
`;

const Title = styled.p`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  font-size: 24px;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 16px;
`;

const Menu = styled.div``;

const MenuItem = styled.span`
  margin-right: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding-bottom: 15px;
  cursor: pointer;
  border-radius: 4px 4px 0px 0px;
  border-bottom: ${({ theme, active }) =>
    active ? `2px solid ${theme.colors.logo}` : 'none'};
  &:hover {
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.border}`};
  }
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 350px;
    height: 36px;
    margin-bottom: 13px;
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






