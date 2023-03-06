import { useArticleContext } from '@/context/articleContext';
import { Modal } from '@mui/material';
import { Suspense } from 'react';
import styled from 'styled-components';
import JobDetailMenuBar from './jobDetailMenuBar';
import JobDetailContent from './jobDetailContent';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: auto 75px;

  &:focus {
    outline: none;
  }
`;

const ContentWrapper = styled.div`
  width: 700px;
  min-height: 500px;

  background-color: white;
  border-radius: 8px;
`;

export default function JobDetailSubscriber() {
  const [id, { close }] = useArticleContext();

  return (
    <Modal open={typeof id === 'number'} onClose={close}>
      <Container>
        <ContentWrapper>
          <Suspense>
            {typeof id === 'number' && <JobDetailContent id={id} />}
          </Suspense>
        </ContentWrapper>
        <JobDetailMenuBar id={id} />
      </Container>
    </Modal>
  );
}
