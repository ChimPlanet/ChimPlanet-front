import { useState } from 'react'
import { Modal } from "@mui/material";
import styled from "styled-components";
import { styled as muiStyled } from '@mui/material/styles';
import { AddTagHeader, AddTagFooter, AddTagBody } from "./index"
import backend from '@/service/backend';

export default function AddTagModal({openModal, handleModal, category, tag}){

    const [currentCategory, setCurrentCategory] = useState({});
    const [inputText, setInputText] = useState('')

    const addCategory = () => {
        const tags = tag.filter((el) => (
            el.childTagId !== el.parentTagId &&
            el.parentTagId === currentCategory.parentTagId
        ));
        const param = [{
            "childTagId": String(tags[tags.length - 1].tagId + 1),
            "parentTagId": currentCategory.parentTagId,
            "tagId": tags[tags.length - 1].tagId + 1,
            "tagName": inputText
        }];
        if(inputText.length !== 0
           && Object.values(currentCategory).length !== 0){
            if (confirm(`${inputText}를 추가하시겠습니까?`) == true){ 
                backend.tags.tag(param)
                setCurrentCategory({});
                handleModal();
            }
        }else{
            alert('빈칸을 입력해주세요')
        }
    };

    const onClear = () => {
        setCurrentCategory({});
        setInputText('');
        handleModal();
    }

    const onCurrentCategory = (item) => {
        setCurrentCategory(item);
    };

    const handleTag = (e) => {
        const { value } = e.target;
        setInputText(value);
    };

    return(
        <SettingsModal open={openModal} onClose={handleModal}>    
            <Container>
                <AddTagHeader handleModal={onClear} />
                <AddTagBody 
                    handleTag={handleTag}
                    category={category} 
                    onCurrentCategory={onCurrentCategory}
                     />
                <AddTagFooter addCategory={addCategory} handleModal={onClear} />
            </Container>
        </SettingsModal>
    );
};

const SettingsModal = muiStyled(Modal)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
});

const Container = styled.div`
    width: 520px;
    height: fit-content;
    outline: none;
    background-color: #fff;
    border-radius: 8px;
`;
