import { Loading, styled, useScreenType, useTheme } from '@chimplanet/ui';
import { ChevronLeft, MoreHorizontal } from '@chimplanet/ui/icons';
import { Suspense, useEffect, useState } from 'react';

import { Modal } from '@mui/material';
import JobDetailContent from './jobDetailContent';
import JobDetailMenuBar from './jobDetailMenuBar';
import JobDetailMobileMenuBar from './jobDetailMobileMenuBar';

import { styled as muiStyled } from '@mui/material/styles';

import useBookmark from '@hooks/useBookmark';
import { BookmarkContext } from '@utils/Context/bookmarkContext';

import useModalGoBack from '@hooks/useModalGoBack';
import 'styles/naver-se.css';

import { useArticle } from '@components/ArticleRenderer/hook';

export default function JobDetailSubscriber() {
  const [article, { close }] = useArticle();
  const [isOpen, toggleActive] = useModalGoBack('#article-view');
  const [modal, setModal] = useState(false);
  const [userProfile, setUserProfile] = useState();
  const sizeType = useScreenType();
  const { toggle } = useBookmark();
  const bookmarkSet = BookmarkContext.getInstance().getBookmarkSet();
  const theme = useTheme();

  useEffect(() => {
    if (article) toggleActive(true);
  }, [article]);

  useEffect(() => {
    if (!isOpen) close();
  }, [isOpen, close]);

  const handleModal = () => {
    setModal(!modal);
  };

  const handelProfile = (user) => {
    setUserProfile(user);
  };

  return (
    <ScrollModal open={article !== null} onClose={close} full={sizeType}>
      <>
        <ContentWrapper full={sizeType}>
          <MobileContainer full={sizeType}>
            <div onClick={close}>
              <ChevronLeft color={theme.textColors.primary} />
            </div>
            <div onClick={handleModal}>
              <MoreHorizontal color={theme.textColors.primary} />
            </div>
          </MobileContainer>
          <Suspense fallback={<Loading />}>
            {article && (
              <JobDetailContent
                close={close}
                handelProfile={handelProfile}
                full={sizeType}
                offer={article}
              />
            )}
          </Suspense>
        </ContentWrapper>
        <JobDetailMenuBar
          close={close}
          id={article?.id}
          writer={article?.writer}
          userProfile={userProfile}
          isBookmarked={bookmarkSet.has(article?.id)}
          onBookmarkClick={() => toggle(article?.data)}
        />
        <JobDetailMobileMenuBar
          id={article?.id}
          handleModal={handleModal}
          modal={modal}
          userProfile={userProfile}
          writer={article?.writer}
          isBookmarked={bookmarkSet.has(article?.id)}
          onBookmarkClick={() => toggle(article?.data)}
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
