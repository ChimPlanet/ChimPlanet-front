import styled from "styled-components";
import Arrow from "../../assets/Arrow.png";

export default function JobNavBar({
    total, 
    setValue, 
    directButton, 
    selectValue, 
    currentList,
    select,
    onSelect,
    }){

    return(
        <NavContainer>
            <nav>
                <NavListContainer>
                   <NavList 
                    onClick={directButton}
                    color={currentList === '구인중' ? '#101C33' : '#AAB1BC' }
                    >구인중</NavList>
                   <NavList 
                    onClick={directButton}
                    color={currentList === '모집마감' ? '#101C33' : '#AAB1BC' }
                    >모집마감</NavList>
                   <NavList 
                    onClick={directButton}
                    color={currentList === '전체' ? '#101C33' : '#AAB1BC' }
                    >전체</NavList>
                </NavListContainer>
            </nav>
            <Nav>
                <Total>
                    총 {total}개
                </Total>
                <SortContainer>
                    <Sort onClick={onSelect} /* onChange={(e)=>{sort(e.target.value)}} */>
                        {selectValue}
                    </Sort>
                        { select &&
                        <OptionContainer>
                            <Option 
                            onClick={setValue}
                            color={selectValue === '최신순' ? '#00BD2F' : '#8E94A0'}>최신순</Option>
                            <Option 
                            onClick={setValue}
                            color={selectValue === '조회순' ? '#00BD2F' : '#8E94A0'}>조회순</Option>
                            <Option 
                            onClick={setValue}
                            color={selectValue === '추천순' ? '#00BD2F' : '#8E94A0'}>추천순</Option>
                        </OptionContainer>
                        }
                </SortContainer>
            </Nav>
        </NavContainer>
    );
};

const NavContainer = styled.div`
    margin-top: 30px;
    margin-bottom: 22px;
    justify-content: space-between;
    align-items: center;
`;

const Nav = styled.nav`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
`;

const NavListContainer = styled.ul`
    display: flex;
    margin-bottom: 40px;
`;

const NavList = styled.li`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: ${({ color }) => color};
    margin-right: 24px;
    cursor: pointer;
`;

const Total = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #101C33;
`;

const SortContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

const Sort = styled.div`
    width: 100px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    border: 1px solid #DBDEE2;
    border-radius: 4px;
    padding: 8px 32px 9px 18px;
    appearance:none;
    background:url(${Arrow}) no-repeat right 14px center;
`;

const OptionContainer = styled.div`
    position: absolute;
    top: 45px;
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    width: 100px;
    z-index: 1;
`;

const Option = styled.div`
    height: 36px;
    padding: 8px 40px 9px 18px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
    color: ${({color})=>color};
`;
