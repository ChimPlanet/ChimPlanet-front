import styled from 'styled-components';
import { Suspense, useState } from 'react';
import { Modal } from '@mui/material';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ModalState } from '@/atoms/ContentManagement';
import Loading from '@/common/components/Loading';
import { styled as muiStyled } from '@mui/material/styles';
import ContentOfferSidebar from './ContentOfferSidebar';
import ContentOfferDetail from './ContentOfferDetail';
import ContentSetting from './settingModal/ContentSetting';

export default function ContentOfferSubscriber() {
  const [openModal, setOpenModal] = useState(false);
  const modalState = useRecoilValue(ModalState);
  const sort = useSetRecoilState(ModalState);

  const handleClickOutSide = (e) => {
    sort(null);
    setOpenModal(false);
  };

  const handleSettings = () => {
    setOpenModal(!openModal);
  };

  return (
    <ScrollModal open={modalState !== null} onClose={handleClickOutSide}>
      <>
        <ContentContainer>
          <ContentWrapper>
            <Suspense fallback={<Loading />}>
              <ContentOfferDetail offer={modalState} />
            </Suspense>
          </ContentWrapper>
          <ContentOfferSidebar
            handleSettings={handleSettings}
            id={modalState?.articleId}
          />
        </ContentContainer>
        <ContentSetting
          offer={modalState}
          openModal={openModal}
          handleSettings={handleSettings}
        />
      </>
    </ScrollModal>
  );
}

const ScrollModal = muiStyled(Modal)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '30px',
  margin: '0 0 0 240px',
  padding: '100px 0px',
  overflowY: 'scroll',
  '::-webkit-scrollbar': {
    width: 0,
    backgroundColor: 'transparent',
  },
});

const ContentWrapper = styled.div`
  width: 700px;
  min-height: 70vh;
  height: fit-content;
  background-color: white;
  border-radius: 8px;
  margin-right: 47px;
`;

const ContentContainer = styled.div`
  display: flex;
  outline: none;
`;
