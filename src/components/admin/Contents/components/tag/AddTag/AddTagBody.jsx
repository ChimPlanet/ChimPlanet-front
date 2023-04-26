import { useState } from 'react' 
import styled from "styled-components"
import { styled as muiStyled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AddTagBody({category, onCurrentCategory, handleTag}){

    const [checkboxes, setCheckboxes] = useState(category.map(el=> ({
        ...el,
        value: false
    })));

    const handleCheckBox = (item, event) => {
        const { checked } = event.target;

        if(!checked){
            setCheckboxes(category.map(el=> ({
                ...el,
                value: false
            })))
            onCurrentCategory({})
        }else{
            setCheckboxes(category.map(el=> ({
                ...el,
                value: item.tagId === el.tagId
            })))
            onCurrentCategory(item)    
        }
    }

    return(
        <Container>
            <Title>
                태그
            </Title>
            <InputBox  
                placeholder="태그를 입력해주세요"
                onChange={handleTag}/>
            <Title>
                카테고리
            </Title>
            <CheckboxGroup>
                {checkboxes?.map((el)=> 
                    <CheckboxLabel 
                        onChange={(event)=>handleCheckBox(el.data, event)}
                        key={el.data.tagId} 
                        control={<CheckBox name={el.data.tagName} />}
                        label={el.data.tagName.replace('전체', '')}
                        checked={el.value}
                    />
                )}
            </CheckboxGroup>
        </Container>
    )
}

const Container = styled.div`
    padding: 24px;
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
    padding: 13px 14px;
    border: 1px solid #00BD2F;
    border-radius: 4px;
    margin-bottom: 95px;
    font-weight: 500;
    :focus{
    outline: 1px solid #00BD2F;
    }
`;

const CheckboxGroup = muiStyled(FormGroup)({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    fontSize: '12px !important',
});

const CheckboxLabel = muiStyled(FormControlLabel)({
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '12px',
    lineHeight: '14px',
    margin: '0 0 14px',
    '& .MuiTypography-root': { fontSize: 12, wordBreak: 'keep-all' },
});

const CheckBox = muiStyled(Checkbox)({
    width: '16px',
    height: '16px',
    fontSize: '12px',
    color: '#DBDEE2',
    marginRight: '8px',
    '&.Mui-checked': { color: '#00BD2F' },
})

