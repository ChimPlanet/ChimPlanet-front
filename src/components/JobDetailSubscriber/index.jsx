import { useArticleContext } from '@/context/articleContext';
import { Modal } from '@mui/material';
import { Suspense } from 'react';
import styled from 'styled-components';
import JobDetailMenuBar from './jobDetailMenuBar';
import JobDetailContent from './jobDetailContent';
import Loading from '@/common/components/Loading';
import { styled as muiStyled } from '@mui/material/styles';

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
  background-color: white;
  border-radius: 8px;
`;

export default function JobDetailSubscriber() {
  const [id, { close }] = useArticleContext();

  return (
    <ScrollModal open={typeof id === 'number'} onClose={close}>
      <>
        <ContentWrapper>
          <Suspense fallback={<Loading />}>
            {typeof id === 'number' && <JobDetailContent id={id} />}
          </Suspense>
        </ContentWrapper>
        <JobDetailMenuBar id={id} />
      </>
    </ScrollModal>
  );
}
