import { useRef, useCallback } from 'react';
/**
 * @param {()=>void} callbackWhenExpired
 */
export default function useTimer(callbackWhenExpired, delay = 1000) {
  const timerRef = useRef(null);

  const clear = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const fire = useCallback(() => {
    clear();
    timerRef.current = setTimeout(callbackWhenExpired, delay);
  }, [callbackWhenExpired, clear, delay]);

  return { fire, clear };
}
