import { useArticleContext } from '@/context/articleContext';
import { Backdrop, Dialog, Modal } from '@mui/material';
import { Suspense } from 'react';
import styled from 'styled-components';
import JobDetailMenuBar from './jobDetailMenuBar';
import JobDetailContent from './jobDetailContent';
import Loading from '@/components/Loading';
import { styled as muiStyled } from '@mui/material/styles';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 75px;
  width: 700px;
  margin: 100px auto;
  &:focus {
    outline: none;
  }
`;

const ScrollModal = muiStyled(Modal)({
  overflowY: 'scroll',
  '::-webkit-scrollbar': {
    width: 0,
    backgroundColor: 'transparent',
  },
});

const ContentWrapper = styled.div`
  width: 700px;
  /* max-height: 70vh; */
  /* max-height: 875px; */

  background-color: white;
  border-radius: 8px;
`;

export default function JobDetailSubscriber() {
  const [id, { close }] = useArticleContext();

  return (
    <ScrollModal open={typeof id === 'number'} onClose={close} style={{}}>
      <Container>
        <ContentWrapper>
          <Suspense fallback={<Loading />}>
            {typeof id === 'number' && <JobDetailContent id={id} />}
          </Suspense>
        </ContentWrapper>
        <JobDetailMenuBar id={id} />
      </Container>
    </ScrollModal>
  );
}
