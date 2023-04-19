import styled from "styled-components";
import Arrow from "../../../../../assets/Arrow.png";

export default function ContnetsTab({select, selectValue, onSelect, setValue, totalNum}){

    return(
        <Container>
            <Layout>
                <Nav>
                    <Total>
                        총 {totalNum}개
                    </Total>
                    <SortContainer>
                        <Sort onClick={onSelect}>
                            {selectValue}
                        </Sort>
                            { select &&
                            <OptionContainer>
                                <Option 
                                onClick={()=>{setValue('최신순')}}
                                color={selectValue === '최신순' ? '#00BD2F' : '#8E94A0'}>최신순</Option>
                                <Option 
                                onClick={()=>{setValue('조회순')}}
                                color={selectValue === '조회순' ? '#00BD2F' : '#8E94A0'}>조회순</Option>
                                <Option 
                                onClick={()=>{setValue('추천순')}}
                                color={selectValue === '추천순' ? '#00BD2F' : '#8E94A0'}>추천순</Option>
                            </OptionContainer>
                            }
                    </SortContainer>
                </Nav>
            </Layout>
        </Container>
    );
} ;

const Container = styled.div`
    padding: 32px;
    width: 1060px;
`;

const Layout = styled.div`
    //margin: 0 auto;
`;

const Nav = styled.nav`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
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