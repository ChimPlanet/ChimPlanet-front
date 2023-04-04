import { useState, useMemo, useEffect, useCallback } from 'react'
import styled from "styled-components"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled as muiStyled } from '@mui/material/styles';
import ContentSettingCategory from './ContentSettingCategory'
import ContentSettingTag from "./ContentSettingTag";
import ImageUploadBox from './ImageUploadBox';

const states = [
    '마감',
    '구인 중',
    '상시모집',
]

export default function ContentSettingBody({offer}){

    const [idValue, setIdValue] = useState('');
    const [dateValue, setDateValue] = useState('');

    useMemo(()=>{
        setIdValue(offer.id)
        setDateValue(offer.rawDateTime)
    },[offer])

    const a = useCallback(()=>{
        if(offer.isClosed === true){
            return '구인 중'
        }else if(offer.isClosed === false){
            return '마감'
        }
    },[offer])

    return(
        <Container>
            <JobOfferSection>
                <ThumbnailContainer>
                    썸네일
                    <ImageUploadBox />
                </ThumbnailContainer>
                <ValuesContainer>
                    <InputBoxTitle>
                        ID
                    </InputBoxTitle>
                    <InputBox value={idValue} onChange={(e)=>{setIdValue(e.target.value)}}/>
                    <InputBoxTitle>
                        작성일
                    </InputBoxTitle>
                    <InputBox value={dateValue} onChange={(e)=>{setDateValue(e.target.value)}}/>
                    <InputBoxTitle margin=''>
                        진행상황
                    </InputBoxTitle>
                    <CheckboxGroup>
                        {states.map(el=>(
                            <CheckboxLabel 
                            key={el}
                            control={<CheckBox defaultChecked={a() === el ? true : false} />} 
                            label={el} />
                        ))}
                    </CheckboxGroup>
                </ValuesContainer>
            </JobOfferSection>
            <ContentSettingCategory offer={offer}/>
            <ContentSettingTag offer={offer}/>
        </Container>
    )
}

const Container = styled.section`
    padding: 18px 23px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    border-bottom: 1px solid #DBDEE2;
`;

const JobOfferSection = styled.div`
    display: flex;
    margin-bottom: 35px;
`;

const ThumbnailContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 33px;
`;

const ValuesContainer = styled.div`
`;

const InputBoxTitle = styled.div`
    margin-bottom: 9px;
`;

const InputBox = styled.input`
    width: 240px;
    height: 42px;
    border: 1px solid #DBDEE2;
    padding: 13px 14px;
    margin-bottom: 23px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
`;

const CheckboxGroup = muiStyled(FormGroup)({
    display: 'flex !important',
    flexDirection: 'row !important',
    justifyContent: 'space-around !important',
    fontSize: '12px !important',
});

const CheckboxLabel = muiStyled(FormControlLabel)({
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '12px',
    lineHeight: '14px',
    '& .MuiTypography-root': { fontSize: 12},
});

const CheckBox = muiStyled(Checkbox)({
    width: '16px',
    height: '16px',
    fontSize: '12px',
    marginRight: '8px',
    color: '#DBDEE2',
    '&.Mui-checked': {color: '#00BD2F',},
})


