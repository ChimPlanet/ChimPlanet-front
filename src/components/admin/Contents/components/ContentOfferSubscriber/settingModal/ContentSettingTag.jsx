import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { MinXIcon } from "@/common/icons";
import { useAdminBoardState } from "../../../atoms/adminBoard.atom";

export default function ContentSettingTag({tag}){

    
    const [board, setBoard] = useAdminBoardState()
    const [inputValue, setInputValue] = useState('');
    const [tagList, setTagList] = useState(
        tag.filter(el=> (
            board.boardTags.map(tag=> tag.childTagId).includes(el.childTagId)
            )).map(el=>{
                return({
                childTagId : el.childTagId,
                parentTagId : el.parentTagId,
                tagId: el.tagId,
                tagName: el.tagName
            })
        })
    );

    useEffect(()=>{
        setBoard({
            "articleId": board.articleId,
            "boardTags": tagList.map(el=>{
              return({
                childTagId : el.childTagId,
                parentTagId : el.parentTagId,
              })
            }),
            "isEnd": board.isEnd
        }) 
    },[tagList])

    const handleValue = (value) => {
        setInputValue(value.target.value);
    };
    
    const handleKeyDown = (e) => {
        const currentTag = tag.find(el=> (el.tagName.includes(inputValue)))
        
        if(e.key === 'Enter' && currentTag !== undefined){
            
            setTagList(tagList => [...tagList, {
                childTagId : currentTag.childTagId,
                parentTagId : currentTag.parentTagId,
                tagId: currentTag.tagId,
                tagName: currentTag.tagName
            }])

        }else if(e.key === 'Enter' && inputValue.charAt(0) !== '#'){
            alert('일치하는 태그가 없습니다.')
        }
    };

    const deleteTag = (el) => {
        setTagList([...tagList].filter(item=> item !== el ));
    };

    return(
        <Container>
           <Title>
                태그
            </Title>
            <InputBox value={inputValue} placeholder="태그를 입력해주세요" onKeyPress={handleKeyDown} onChange={handleValue}/>
            <Tags> 
                {Array.isArray(tagList) ? tagList.map((el, index)=>(
                    <Tag key={index}>
                        {'# ' + el.tagName} 
                        <IconContainer onClick={()=>deleteTag(el)}>
                            <MinXIcon />
                        </IconContainer>
                    </Tag>
                )) : null}
            </Tags>
        </Container>
    )
}

const Container = styled.div`

`;

const Title = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 8px;
`;

const InputBox = styled.input`
    width: 472px;
    height: 42px;
    border: 1px solid #DBDEE2;
    border-radius: 4px;
    padding: 13px 14px;
    margin-bottom: 7px;
    :focus{
    outline: 1px solid #00BD2F;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Tag = styled.div`
    display: flex;
    padding: 5px 10px;
    border: 1px solid #DBDEE2;
    border-radius: 100px;
    margin: 0 8px 8px 0 ;
`;

const IconContainer = styled.div`
    width: 12px;
    height: 12px;
    border: 1px solid #00BD2F;
    border-radius: 100%;
    margin-left: 6px;
    background: #00BD2F;
    display: flex;
    justify-content: center;
    align-items: center;
`;  