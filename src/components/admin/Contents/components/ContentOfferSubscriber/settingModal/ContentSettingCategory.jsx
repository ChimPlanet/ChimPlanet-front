import styled from "styled-components";
import { useState, useEffect } from 'react'
import { styled as muiStyled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useAdminBoardState } from "../../../atoms/adminBoard.atom";

export default function ContentSettingCategory({tag}) {

    const [board] = useAdminBoardState();
 
    const category = tag.filter((el)=> el.childTagId === el.parentTagId)

    return(
        <Container>
            <Title>
                카테고리
            </Title>
            <CheckboxGroup>
                {(category.map((el)=> 
                    <CheckboxLabel 
                        key={el.tagId} 
                        control={<CheckBox 
                            name={el.tagName}
                            checked={board.boardTags?.map(item=> 
                                (item.parentTagId)
                                ).includes(el.parentTagId)} />}
                        label={el.tagName}
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

