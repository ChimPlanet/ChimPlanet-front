import { ErrorBoundary, Loading } from '@chimplanet/ui';
import { Modal } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import { Fragment, Suspense } from 'react';
import ArticleRendererCore from './ArticleRendererCore';
import { useArticle } from './hook';

const ArticleRenderer = () => {
  const [id, { close }] = useArticle();

  return (
    <ScrollModal open={id !== null} onClose={close}>
      <Fragment>
        <ErrorBoundary fallback={<></>}>
          <Suspense fallback={<Loading />}>{id && <ArticleRendererCore id={id} />}</Suspense>
        </ErrorBoundary>
      </Fragment>
    </ScrollModal>
  );
};

export default ArticleRenderer;

const ScrollModal = muiStyled(Modal)(() => ({
  // gap: full ? '0' : '30px',
  // padding: full ? '0' : '100px 0px',
  display: 'flex',
  justifyContent: 'center',
  overflowY: 'scroll',
  '::-webkit-scrollbar': {
    width: 0,
    backgroundColor: 'transparent',
    scrollbarGutter: 'stable',
  },
  scrollbarWidth: 'none',
}));
