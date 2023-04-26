import { useMemo, useState } from "react";
import styled from "styled-components";
import TagTab from "./TagTab";
import { useTagList } from "@/query/tag";
import { XIcon } from "@/common/icons";
import AddTagModal from "./AddTag/AddTagModal";

export default function ContentsTags() {

    const [selectValue, setSelectValue] = useState('전체');
    const [tagList, setTagList] = useState([]);
    const [openModal, setModal] = useState(false);

    const { data: tag } = useTagList();

    const category = tag.filter((el)=> el.childTagId === el.parentTagId);

    const tags = useMemo(()=>{
        const set = category.find(category=> selectValue === '전체' ? category : category.tagName === selectValue)
        if(selectValue === '전체'){
            return tag.filter((el)=> el.childTagId !== el.parentTagId)
        }else{
            return tag.filter((el)=> el.childTagId !== el.parentTagId && el.parentTagId === set.parentTagId)
        }
    },[selectValue]);

    const selectTag = (tag) => {
        if(tagList.some(el=> el.tagId === tag.tagId)){
            const newList = [...tagList]
            setTagList(newList.filter(el=> el.tagId !== tag.tagId))
        }else{
            setTagList((tagList) => [...tagList, tag])
        }
    }

    const handleModal = () => {
        setModal(!openModal)
    }

    return(
        <Container>
            <Box>
                <TagTab 
                category={category} 
                setSelectValue={setSelectValue} 
                selectValue={selectValue}
                handleModal={handleModal} />
                <TagsContainer>
                    {tags?.map((tag)=>
                        <Tags 
                            current={tagList.find(el=>el.tagId === tag.tagId)}
                            key={tag.tagId}
                            onClick={()=>selectTag(tag)}
                        >
                            # {tag.tagName}
                            <Icon>
                                <XIcon />
                            </Icon>
                        </Tags>
                    )}
                </TagsContainer>
            </Box>
            <AddTagModal openModal={openModal} handleModal={handleModal} category={category} tag={tag}/>
        </Container>
    );
};

const Container = styled.div`
    background-color: #fff;
    min-height: 81vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Box = styled.div`
    width: 80vw;
`

const TagsContainer = styled.div`
    margin-right: 10%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Tags = styled.div`    
    cursor: pointer;
    width: max-content;
    height: 36px;
    padding: 8px 16px;
    border: 1px solid #E2FBCE;
    border-radius: 100px;
    margin: 0 8px 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({current})=> current ? '#00BD2F' : '#E2FBCE'};
    color: ${({current})=> current ? '#FFFFFF' : '#000000'};
`;

const Icon = styled.div`
    margin-left: 5px;
`;