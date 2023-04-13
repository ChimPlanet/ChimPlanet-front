import styled from "styled-components";
import { styled as muiStyled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const categories = [
    'IT·게임',
    '디자인·2D',
    '3D·건축·인테리어',
    '미디어·연예·창작',
    '일러스트',
    '기타',
];

export default function ContentSettingCategory({boardTags, tag}) {

    return(
        <Container>
            <Title>
                카테고리
            </Title>
            <CheckboxGroup>
                {(tag.map((el)=> 
                    el.childTagId === el.parentTagId ? 
                    <CheckboxLabel 
                        key={el.tagId} 
                        control={<CheckBox defaultChecked={ boardTags.includes(el.parentTagId) } />}
                        label={el.tagName}
                    /> : null
                ))}
            </CheckboxGroup>
        </Container>
    );
};

const Container = styled.div`
    margin-bottom: 37px;
`;

const Title = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 9px;
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

