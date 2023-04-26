import { useState, useCallback } from 'react'
import styled from 'styled-components';
import backend from '@/service/backend';

export default function Menubar({
    parents,
    close,
    children
}) {

    const [isTagVisible, setIsTagVisible] = useState(null);
    const [inCliked, setIsCliked] = useState(false)
    const [addCategory, setAddCategory] = useState('')

    const currentChild = children.filter(el=>el.parentTagId === isTagVisible)

    const handleAddCategory = (e) => {
        if(e.key === 'Enter'){
            const param = [{
                "childTagId": String(parents[parents.length - 1].tagId + 100),
                "parentTagId": String(parents[parents.length - 1].tagId + 100),
                "tagId": parents[parents.length - 1].tagId + 100,
                "tagName": addCategory
            }];
            if(addCategory.length !== 0 ){
                if (confirm(`${addCategory}를 추가하시겠습니까?`) == true){
                backend.tags.tag(param)
                }
            }else{
                alert('카테고리를 입력해주세요')
            };
        };
    };

    return (
        <>
            <Container>   
                <CategoryColumn 
                    onMouseOver={()=>setIsTagVisible(null)}
                    onMouseDown={()=>close()}
                >
                    전체
                </CategoryColumn>
                {parents.map(el => 
                    <CategoryColumn 
                        key={el.tagId}
                        onMouseOver={()=>setIsTagVisible(String(el.tagId))}
                        onMouseDown={()=>close()}>
                        {el.tagName.replace('전체', '')}
                    </CategoryColumn>
                )}
                <div  
                    onClick={()=>setIsCliked(true)}
                    onMouseOver={()=>setIsTagVisible(null)}
                >
                    {!inCliked ? 
                    <AddCategoryColumn>
                        + 추가
                    </AddCategoryColumn> : 
                    <AddCategoryColumn>
                        <CategoryInput 
                            placeholder='추가'
                            value={addCategory}
                            onChange={e=>setAddCategory(e.target.value)}
                            onKeyDown={handleAddCategory}
                        />
                    </AddCategoryColumn>
                    }
                </div>
            </Container>
            {isTagVisible &&
                <ChildTagsColumn>
                        {currentChild.map(tag=> 
                            <ChildTag 
                                key={tag.tagId}
                                onMouseDown={()=>close()}
                                >
                                {tag.tagName}
                            </ChildTag>
                        )}
                </ChildTagsColumn>
            }
        </>
    );
}

const Container = styled.ul`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    position: absolute;
    top: 35px;
    left: 0;
    z-index: 100; 
    background: #ffffff;
`;

const CategoryColumn = styled.li`
    cursor: pointer;
    width: 220px;
    height: 40px;
    padding: 12px 20px;
    &:last-child{
        padding: 8px 14px;
    }
`;

const AddCategoryColumn = styled(CategoryColumn)`
    color: #8E94A0;
`;

const ChildTagsColumn = styled.ul`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    position: absolute;
    top: 35px;
    right: 620px;
    z-index: 100; 
    background: #ffffff;
`;

const ChildTag = styled.li`
    cursor: pointer;
    width: 220px;
    height: 40px;
    padding: 12px 20px;
`;  

const CategoryInput = styled.input`
    padding: 4px 7px;
    border: 1px solid #E0E0E0;
    margin-bottom: 5px;
    font-size: 14px;
    width: 192px;
    height: 24px;
`;