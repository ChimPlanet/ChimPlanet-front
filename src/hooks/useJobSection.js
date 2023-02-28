import useResize from './useResize';
import { useLayoutEffect, useCallback, useState } from 'react';

const INITIAL = Object.freeze({
  page: 1,
  perPage: 4,
  length: 0,
  isNext: false,
  isPrev: false,
});

function processContext(context) {
  context.isNext = context.page * context.perPage < context.length;
  context.isPrev = context.page > 1;
  return context;
}

export default function useJobSection() {
  const [context, setContext] = useState(INITIAL);
  // ! 화면 크기에 따라 per Page 변경
  const sizeType = useResize();

  useLayoutEffect(() => {
    setContext((prev) => ({
      ...prev,
      perPage: sizeType === 'desktop' ? 4 : 3, // 큰 화면 일 때 4개, 작은 화면 일 때 3개로 출력
    }));
  }, [sizeType]);

  const nextPage = useCallback(() => {
    if (context.isNext) {
      setContext((prev) =>
        processContext({
          ...prev,
          page: prev.page + 1,
        }),
      );
    }
  }, [context, setContext]);

  const prevPage = useCallback(() => {
    if (context.isPrev) {
      setContext((prev) =>
        processContext({
          ...prev,
          page: prev.page - 1,
        }),
      );
    }
  }, [context, setContext]);

  return {
    context,
    setLength(length) {
      setContext((prev) => processContext({ ...prev, length }));
    },
    nextPage,
    prevPage,
  };
}
