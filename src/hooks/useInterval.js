import { useLayoutEffect, useRef } from 'react';
export default function useInterval(callback, interval) {
  const intervalRef = useRef();

  useLayoutEffect(() => {
    intervalRef.current = setInterval(callback, interval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [callback, interval]);
}
