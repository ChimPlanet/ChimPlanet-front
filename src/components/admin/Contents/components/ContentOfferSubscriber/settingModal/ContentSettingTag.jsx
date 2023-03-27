import { useState } from "react";
import styled from "styled-components";
import { MinXIcon } from "@/common/icons";


export default function ContentSettingTag(){
    
    const [inputValue, setInputValue] = useState('');
    const [tag, setTag] = useState([
        '#백엔드',
        '#프론트',
        '#UI/UX',
        '#개발자',
        '#디자이너',
        '#웹사이트',
        '#XD',
        '#Figma',
    ]);

    const handleValue = (value) => {
        setInputValue(value.target.value);
    };
    
    const handleKeyDown = (e) => {
        const newTag = [...tag];
        if(e.key === 'Enter' && inputValue.charAt(0) === '#'){
            newTag.push(inputValue);
            setTag(newTag);
            setInputValue('');
        };
    };

    const deleteTag = (el) => {
        setTag([...tag].filter(item=> item !== el ));
    };

    return(
        <Container>
           <Title>
                태그
            </Title>
            <InputBox value={inputValue} placeholder="태그를 입력해주세요" onKeyPress={handleKeyDown} onChange={handleValue}/>
            <Tags> 
                { Array.isArray(tag) ? tag.map((el, index)=>(
                    <Tag key={index}>
                        {el} 
                        <IconContainer onClick={()=>deleteTag(el)}>
                            <MinXIcon />
                        </IconContainer>
                    </Tag>
                )) : null }
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