import styled from "styled-components"
import { useState } from "react"
import Arrow from "../../../../../assets/Arrow.png";

export default function TagTab({category, selectValue, setSelectValue, handleModal}){

    const [select, setSelect] = useState(false);

    const setValue = (e) => {
        setSelectValue(e);
        setSelect(!select);
    };

    return(
        <Container>
            <TagMenu>
                <TagMenuItem onClick={handleModal} color='#00BD2F'>
                    태그 등록
                </TagMenuItem>
                <TagMenuItem color='#ED2040'>
                    태그 삭제
                </TagMenuItem>
            </TagMenu>
            <Select>
                <Sort onClick={()=> {setSelect(true)}}>
                    {selectValue}
                </Sort>
                    { select &&
                    <OptionContainer>
                        <Option 
                            onClick={()=>{setValue('전체')}}
                            color={selectValue === '전체' ? '#00BD2F' : '#8E94A0'}>전체</Option>
                            {category.map(category =>(
                                <Option 
                                key={category.tagId}
                                onClick={()=>{setValue(category.tagName)}}
                                color={selectValue === category.tagName ? '#00BD2F' : '#8E94A0'}>{category.tagName}</Option>
                            ))}
                    </OptionContainer>
                    }
            </Select>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 30px;
    margin-bottom: 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TagMenu = styled.div`
    
`;

const TagMenuItem = styled.span`
    cursor: pointer;
    padding: 8px 30px;
    border: ${({ color }) => `1px solid ${color}`};
    border-radius: 8px;
    margin-right: 24px;
    color: ${({ color }) => color };
`;

const Select = styled.div`
    margin-right: 10%;
    position: relative;
`;

const Sort = styled.div`
    //width: 100px;
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
    right: 0;
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    width: max-content;
    z-index: 1;
`;

const Option = styled.div`
    text-align: center;
    height: 36px;
    padding: 8px 40px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
    color: ${({color})=>color};
`;