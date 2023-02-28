import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ListSort, PostSort } from "@/atoms/PostList";
import Arrow from "../../assets/Arrow.png"

const NavContainer = styled.div`
    margin-top: 25px;
    margin-bottom: 55px;
    display: flex;
    justify-content: space-between;
`;

const Nav = styled.nav`
    
`

const NavListContainer = styled.ul`
    display: flex;
`;

const NavList = styled.li`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: ${({ color }) => color};
    margin-right: 24px;
    cursor: pointer;
`;

const Sort = styled.select`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    border: 1px solid #DBDEE2;
    border-radius: 4px;
    padding: 8px 32px 9px 18px;
    appearance:none;
    background:url(${Arrow}) no-repeat right 14px center;
`;

const Option = styled.option`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
`;

export default function JobNavBar(){

    const [navState, setNavState] = useRecoilState(PostSort)
    const sort = useSetRecoilState(ListSort)

    const directButton = (key) =>{
        setNavState([...navState].map(item=>{
            return{
                key : item.key,
                isClicked: item.key === key ? 1 : 0, 
                text : item.text
            };
        }));
    };

    return(
        <NavContainer>
            <Nav>
                <NavListContainer>
                    {navState.map(item=> <NavList 
                    key={item.key}
                    onClick={()=>directButton(item.key)}
                    color={item.isClicked ? '#101C33' : '#AAB1BC' }
                    >{item.text}</NavList>)}
                </NavListContainer>
            </Nav>
            <div>
                <Sort onChange={(e)=>{sort(e.target.value)}}>
                    <Option value="최신순">최신순</Option>
                    <Option value="조회순">조회순</Option>
                    <Option value="좋아요순">좋아요순</Option>
                </Sort>
            </div>
        </NavContainer>
    )
}