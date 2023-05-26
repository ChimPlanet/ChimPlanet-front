import { Suspense } from 'react';

import { Loading, ErrorBoundary } from 'chimplanet-ui';
import { ERROR_PATH } from '@/constants/route';
/**
 * Suspend, ErrorBoundary 복합체
 * @param {{ children: React.ReactNode }}
 * @returns {JSX.Element}
 */
export default function RootBoundary({ children }) {
  if (!children) {
    throw Error('Root Boundary Component는 적어도 하나의 자식이 필요합니다.');
  }

  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary
        fallback={() => {
          window.location.href = ERROR_PATH;
          return <></>;
        }}
      >
        {children}
      </ErrorBoundary>
    </Suspense>
  );
}
