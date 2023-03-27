import styled from "styled-components"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled as muiStyled } from '@mui/material/styles';
import ContentSettingCategory from './ContentSettingCategory'
import ContentSettingTag from "./ContentSettingTag";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ContentSettingBody(){

    return(
        <Container>
            <JobOfferSection>
                <ThumbnailContainer>
                    썸네일
                    <ThumbnailInput  placeholder='이곳에 파일을 드롭하여 &#13;&#10;&#13;&#10; 업로드 해주세요'/>
                </ThumbnailContainer>
                <ValuesContainer>
                    <InputBoxTitle>
                        ID
                    </InputBoxTitle>
                    <InputBox />
                    <InputBoxTitle>
                        작성일
                    </InputBoxTitle>
                    <InputBox />
                    <InputBoxTitle margin=''>
                        진행상황
                    </InputBoxTitle>
                    <CheckboxGroup>
                        <CheckboxLabel sx={{ '& .MuiTypography-root': { fontSize: 12} }} control={<CheckBox defaultChecked />} label="마감" />
                        <CheckboxLabel sx={{ '& .MuiTypography-root': { fontSize: 12} }} control={<CheckBox />} label="구인 중" />
                        <CheckboxLabel sx={{ '& .MuiTypography-root': { fontSize: 12} }} control={<CheckBox />} label="상시모집" />
                    </CheckboxGroup>
                </ValuesContainer>
            </JobOfferSection>
            <ContentSettingCategory />
            <ContentSettingTag />
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

const ThumbnailInput = styled.input`
    margin: 9px 0 0;
    width: 200px;
    height: 200px;
    border: 1px solid #DBDEE2;
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
});

const CheckBox = muiStyled(Checkbox)({
    width: '16px',
    height: '16px',
    fontSize: '12px',
    marginRight: '8px',
    color: '#DBDEE2',
    '&.Mui-checked': {color: '#00BD2F',},
})


