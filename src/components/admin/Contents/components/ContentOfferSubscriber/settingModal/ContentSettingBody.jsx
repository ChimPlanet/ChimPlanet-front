import {  useCallback } from 'react'
import styled from "styled-components"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled as muiStyled } from '@mui/material/styles';
import ContentSettingCategory from './ContentSettingCategory'
import ContentSettingTag from "./ContentSettingTag";

const states = [
    '마감',
    '구인 중',
    '상시모집',
]

export default function ContentSettingBody({offer, tag}){

    const a = useCallback(()=>{
        if(offer.isEnd === 'ING'){
            return '구인 중'
        }else if(offer.isEnd === 'END'){
            return '마감'
        }
    },[offer])

    return(
        <Container>
            <JobOfferSection>
                <ThumbnailContainer>
                    썸네일
                    <InputContainer>
                        이곳에 파일을 드롭하여 <br />
                        업로드 해주세요
                    </InputContainer>
                </ThumbnailContainer>
                <ValuesContainer>
                    <InputBoxTitle>
                        ID
                    </InputBoxTitle>
                    <InputBox>{offer.articleId}</InputBox>
                    <InputBoxTitle>
                        작성일
                    </InputBoxTitle>
                    <InputBox>{offer.regDate}</InputBox>
                    <InputBoxTitle margin=''>
                        진행상황
                    </InputBoxTitle>
                    <CheckboxGroup>
                        {states.map(el=>(
                            <CheckboxLabel 
                            //onChange={(e)=> progress(e, el)}
                            key={el}
                            control={<CheckBox defaultChecked={a() === el ? true : false} />} 
                            label={el} />
                        ))}
                    </CheckboxGroup>
                </ValuesContainer>
            </JobOfferSection>
            <ContentSettingCategory boardTags={offer.boardTags} tag={tag}/>
            <ContentSettingTag boardTags={offer.boardTags} tag={tag}/>
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

const InputContainer = styled.div`
    display: flex;
    margin: 9px 0 0;
    width: 200px;
    height: 200px;
    align-items: center;
    text-align: center;
    justify-content: center;
    border: 1px solid #DBDEE2;
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

const InputBox = styled.div`
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


