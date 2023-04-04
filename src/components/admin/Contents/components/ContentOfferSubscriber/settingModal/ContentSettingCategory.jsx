import { useCallback } from "react";
import styled from "styled-components";
import { styled as muiStyled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const categories = [
    'api',
    '영상/모션그래픽',
    '영상/모션그래픽',
    '영상/모션그래픽',
    '영상/모션그래픽',
    '영상/모션그래픽',
    '영상/모션그래픽',
    '영상/모션그래픽',
    '영상/모션그래픽',
    '영상/모션그래픽',
    '영상/모션그래픽',
    '영상/모션그래픽',
];

export default function ContentSettingCategory({offer}) {

    const a = useCallback(()=>{
        
        offer.tags.filter(x=> categories.includes(x))
    },[offer])

    return(
        <Container>
            <Title>
                카테고리
            </Title>
            <CheckboxGroup>
                {categories.map((el, index)=> (
                    <CheckboxLabel 
                        key={index} 
                        control={<CheckBox defaultChecked={true} />}
                        label={el}
                    />
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
    margin-bottom: 8px;
`;

const CheckboxGroup = muiStyled(FormGroup)({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    fontSize: '12px !important',
});

const CheckboxLabel = muiStyled(FormControlLabel)({
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '12px',
    lineHeight: '14px',
    margin: '0 auto 14px',
    '& .MuiTypography-root': { fontSize: 12 },
});

const CheckBox = muiStyled(Checkbox)({
    width: '16px',
    height: '16px',
    fontSize: '12px',
    color: '#DBDEE2',
    '&.Mui-checked': {color: '#00BD2F',},
})

