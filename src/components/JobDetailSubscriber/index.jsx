import { useArticleContext } from '@/context/articleContext';
import { Modal } from '@mui/material';
import { Suspense } from 'react';
import styled from 'styled-components';
import JobDetailMenuBar from './jobDetailMenuBar';
import JobDetailContent from './jobDetailContent';
import Loading from '@/common/components/Loading';
import { styled as muiStyled } from '@mui/material/styles';

export default function JobDetailSubscriber() {
  const [article, { close }] = useArticleContext();

  return (
    <ScrollModal open={article !== null} onClose={close}>
      <>
        <ContentWrapper>
          <Suspense fallback={<Loading />}>
            {article && <JobDetailContent offer={article} />}
          </Suspense>
        </ContentWrapper>
        <JobDetailMenuBar id={article?.id} />
      </>
    </ScrollModal>
  );
}

const ScrollModal = muiStyled(Modal)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '30px',
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
  background-color: ${({ theme }) => theme.backgroundColor.modal};
  border-radius: 8px;
`;
