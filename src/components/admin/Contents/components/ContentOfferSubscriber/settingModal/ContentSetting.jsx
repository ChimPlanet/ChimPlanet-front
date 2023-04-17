import styled from 'styled-components';
import { Suspense } from 'react';
import { Modal } from '@mui/material';
import Loading from '@/common/components/Loading';
import { styled as muiStyled } from '@mui/material/styles';
import ContentSettingHeader from './ContentSettingHeader';
import ContentSettingBody from './ContentSettingBody';
import { useTagList } from '@/query/tag'

export default function ContentSetting({openModal, handleSettings, id, date}) {

    const { data: tag } = useTagList();

    return(
        <>
            <SettingsModal open={openModal} onClose={handleSettings} >
                <ContentWrapper>
                    <Suspense fallback={<Loading />}>   
                        <ContentSettingHeader handleSettings={handleSettings}/>
                        <ContentSettingBody id={id} date={date} tag={tag} />
                        <ButtonContainer>
                            <Button color='#000000' onClick={handleSettings}>
                                취소
                            </Button>
                            <Button bgc='#00BD2F' color='#FFFFFF' onClick={handleSettings}>
                                완료
                            </Button>
                        </ButtonContainer>
                    </Suspense>
                </ContentWrapper>
            </SettingsModal>
        </>
    )
}

const SettingsModal = muiStyled(Modal)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '130px 0px',
    margin: '0 0 0 115px',
    overflowY: 'scroll',
    '::-webkit-scrollbar': {
      width: 0,
      backgroundColor: 'transparent',
    },
});

const ContentWrapper = styled.div`
  width: 520px;
  //min-height: 70vh;
  height: fit-content;
  background-color: white;
  border-radius: 8px;
  //margin-right: 47px;
  outline: none;
`;
  
const ContentContainer = styled.div`
    display: flex;
    outline: none;
`;

const ButtonContainer = styled.div`
    padding: 10px 16px;
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.button`
    padding: 9px 41px;
    border: 1px solid #DBDEE2;
    margin-right: 8px;
    background-color: ${({bgc})=>bgc};
    color: ${({color})=> color}
`;