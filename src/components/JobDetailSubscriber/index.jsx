import { useArticleContext } from '@/context/articleContext';
import { Modal } from '@mui/material';
import { Suspense, useState } from 'react';
import { styled, Loading, useScreenType } from 'chimplanet-ui';
import JobDetailMenuBar from './jobDetailMenuBar';
import JobDetailMobileMenuBar from './jobDetailMobileMenuBar';
import JobDetailContent from './jobDetailContent';

import { styled as muiStyled } from '@mui/material/styles';

import { LeftChevronIcon, ThreeDotIcon } from '@/common/icons';
import { BookmarkContext } from '@/utils/Context/bookmarkContext';
import useBookmark from '@/hooks/useBookmark';

export default function JobDetailSubscriber() {
  const [article, { close }] = useArticleContext();
  const [modal, setModal] = useState(false);
  const [userProfile, setUserProfile] = useState();
  const sizeType = useScreenType();
  const { toggle } = useBookmark();
  const bookmarkSet = BookmarkContext.getInstance().getBookmarkSet();

  const handleModal = () => {
    setModal(!modal);
  };

  const handelProfile = (user) => {
    setUserProfile(user)
  }
  
  return (
    <ScrollModal open={article !== null} onClose={close} full={sizeType}>
      <>
        <ContentWrapper full={sizeType}>
          <MobileContainer full={sizeType}>
            <div onClick={close}>
              <LeftChevronIcon />
            </div>
            <div onClick={handleModal}>
              <ThreeDotIcon />
            </div>
          </MobileContainer>
          <Suspense fallback={<Loading />}>
            {article && <JobDetailContent handelProfile={handelProfile} full={sizeType} offer={article} />}
          </Suspense>
        </ContentWrapper>
        <JobDetailMenuBar
          id={article?.id}
          writer={article?.writer}
          userProfile={userProfile}
          isBookmarked={bookmarkSet.has(article?.id)}
          onBookmarkClick={() => toggle(article?.id)}
        />
        <JobDetailMobileMenuBar
          id={article?.id}
          handleModal={handleModal}
          modal={modal}
          userProfile={userProfile}
          writer={article?.writer}
          isBookmarked={bookmarkSet.has(article?.id)}
          onBookmarkClick={() => toggle(article?.id)}
        />
      </>
    </ScrollModal>
  );
}

const ScrollModal = muiStyled(Modal)(({ full }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: full === 'desktop' ? '30px' : '0',
  padding: full === 'desktop' ? '100px 0px' : '0',
  overflowY: 'scroll',
  '::-webkit-scrollbar': {
    width: 0,
    backgroundColor: 'transparent',
  },
}));

const ContentWrapper = styled.div`
  width: ${({ full }) => (full === 'desktop' ? '700px' : '100vw')};
  min-height: ${({ full }) => (full === 'desktop' ? '70vh' : '100vh')};
  height: fit-content;
  //height: ${({ full }) => (full === 'desktop' ? '' : '100vh')};
  background-color: ${({ theme }) => theme.backgroundColor.modal};
  border-radius: ${({ full }) => (full === 'desktop' ? '8px' : '')};
`;

const MobileContainer = styled.header`
  position: fixed;
  width: 100vw;
  z-index: 20000;
  background-color: ${({ theme }) => theme.backgroundColor.modal};
  display: ${({ full }) => (full === 'desktop' ? 'none' : 'flex')};
  justify-content: space-between;
  align-items: center;
  height: 43px;
  padding: ${({ full }) => (full === 'mobile' ? '0 20px' : '0 40px')};
  border-bottom: 1px solid #dbdee2;
`;
