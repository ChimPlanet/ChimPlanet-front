import { styled, useScreenType } from '@chimplanet/ui';
import { ChevronLeft, MoreHorizontal } from '@chimplanet/ui/icons';
import '@styles/naver-se.css';
import { useState } from 'react';
import { ArticleProvider } from '.';
import JobImageModal from './JobImageModal';
import { Menubar } from './Menubar';
import MobileMenubar from './MobileMenubar';
import { useArticle } from './hook';
import JobDetailContent from './jobDetailContent';

interface Props {
  id: string;
}

export const ArticleRendererCore = ({ id }: Props) => {
  const [imageURI, setImageURI] = useState<string | null>(null);
  const full = useScreenType() !== 'desktop';
  const [visiableMobileMenu, setVisibleMobileMenu] = useState(false);

  const closeImageModal = () => setImageURI(null);
  const openMobileMenu = () => setVisibleMobileMenu(true);
  const closeMobileMenu = () => setVisibleMobileMenu(false);

  return (
    <Container id="hh" full={full}>
      <ArticleProvider id={id}>
        <ContentWrapper full={full}>
          {full && <MobileHeader openMobileMenu={openMobileMenu} />}
          <JobDetailContent setFocusedImageSrc={setImageURI} />
          <JobImageModal close={closeImageModal} src={imageURI} />
        </ContentWrapper>
        {!full && <Menubar id={id} />}
        {visiableMobileMenu && <MobileMenubar id={id} close={closeMobileMenu} />}
      </ArticleProvider>
    </Container>
  );
};

export default ArticleRendererCore;

interface MobileHeaderProps {
  openMobileMenu: () => void;
}

const MobileHeader = ({ openMobileMenu }: MobileHeaderProps) => {
  const [, { close }] = useArticle();

  return (
    <MobileContainer>
      <button onClick={close}>
        <ChevronLeft />
      </button>
      <button onClick={openMobileMenu}>
        <MoreHorizontal />
      </button>
    </MobileContainer>
  );
};

const Container = styled.div<{ full: boolean }>`
  display: flex;
  gap: ${({ full }) => (full ? 0 : '30px')};
  padding: ${({ full }) => (full ? 0 : '100px 0px')};
  height: fit-content;
`;

const ContentWrapper = styled.div<{ full: boolean }>`
  width: ${({ full }) => (full ? '100vw' : '700px')};
  min-height: ${({ full }) => (full ? '100vh' : '70vh')};
  height: fit-content;
  background-color: ${({ theme }) => theme.bgColors.quaternary};
  border-radius: ${({ full }) => (full ? '' : '8px')};
`;

const MobileContainer = styled.header`
  position: fixed;
  width: 100vw;
  z-index: 20000;
  background-color: ${({ theme }) => theme.bgColors.quaternary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 43px;
  border-bottom: 1px solid #dbdee2;
  color: ${({ theme }) => theme.textColors.modalMobileHeader};

  & svg {
    color: ${({ theme }) => theme.textColors.primary};
  }
`;
