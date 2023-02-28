import useResize from './useResize';
import { useLayoutEffect } from 'react';
import theme from '@/theme';

const INITIAL = Object.freeze({
  page: 1,
  perPage: 4,
  isNext: false,
  isPrev: false,
});

export default function useJobSection() {
  const [context, setContext] = useState(INITIAL);
  // ! 화면 크기에 따라 per Page 변경
  const width = useResize();

  useLayoutEffect(() => {
    if (width >= theme.sizes.desktop) {
      setContext((prev) => ({ ...prev, perPage: 4 }));
    }
  }, [width]);

  return {};
}
