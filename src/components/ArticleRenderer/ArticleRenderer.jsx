import { ErrorBoundary, Loading, styled, useScreenType } from '@chimplanet/ui';

import { Modal } from '@mui/material';

import { styled as muiStyled } from '@mui/material/styles';

import '@styles/naver-se.css';
import { Suspense, useState } from 'react';
import JobImageModal from './JobImageModal';
import { Menubar } from './Menubar';
import { ArticleProvider } from './context';
import { useArticle } from './hook';
import JobDetailContent from './jobDetailContent';

const ArticleRenderer = () => {
  const [id, { close }] = useArticle();
  const sizeType = useScreenType();
  const [imageURI, setImageURI] = useState(null);

  return (
    <ScrollModal open={id !== null} onClose={close} full={sizeType}>
      <>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <ArticleProvider id={id}>
              <ContentWrapper full={sizeType}>
                {/* <MobileContainer full={sizeType}>
            <div onClick={close}>
              <ChevronLeft color={theme.textColors.primary} />
            </div>
            <div onClick={handleModal}>
              <MoreHorizontal color={theme.textColors.primary} />
            </div>
          </MobileContainer> */}
                <JobDetailContent
                  setFocusedImageSrc={setImageURI}
                  full={sizeType}
                />
                <JobImageModal close={() => setImageURI(null)} src={imageURI} />
              </ContentWrapper>
              <Menubar id={id} />
              {/* <JobDetailMobileMenuBar
          modal={modal}
          handleModal={handleModal}
          id={article?.id}
          userProfile={userProfile}
          writer={article?.writer}
          isBookmarked={bookmarkSet.has(article?.id)}
          onBookmarkClick={() => toggle(article?.data)}
        /> */}
            </ArticleProvider>
          </Suspense>
        </ErrorBoundary>
      </>
    </ScrollModal>
  );
};

export default ArticleRenderer;

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
    scrollbarGutter: 'stable',
  },
}));

const ContentWrapper = styled.div`
  width: ${({ full }) => (full === 'desktop' ? '700px' : '100vw')};
  min-height: ${({ full }) => (full === 'desktop' ? '70vh' : '100vh')};
  height: fit-content;
  //height: ${({ full }) => (full === 'desktop' ? '' : '100vh')};
  background-color: ${({ theme }) => theme.bgColors.quaternary};
  border-radius: ${({ full }) => (full === 'desktop' ? '8px' : '')};
`;

const MobileContainer = styled.header`
  position: fixed;
  width: 100vw;
  z-index: 20000;
  background-color: ${({ theme }) => theme.bgColors.quaternary};
  display: ${({ full }) => (full === 'desktop' ? 'none' : 'flex')};
  justify-content: space-between;
  align-items: center;
  height: 43px;
  padding: ${({ full }) => (full === 'mobile' ? '0 20px' : '0 40px')};
  border-bottom: 1px solid #dbdee2;
  color: ${({ theme }) => theme.textColors.modalMobileHeader};
`;
