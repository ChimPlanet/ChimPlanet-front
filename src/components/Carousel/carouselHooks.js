import useInterval from '@/hooks/useInterval';
import { useCallback, useRef } from 'react';

/**
 * @typedef {(cursor: number | (prev: number) => number) => void} DelegateSetNumber
 * @typedef {(cursor: number) => number} ConvertCursorToValid
 */

/**
 *  Carousel Component Item 자동 넘기기 Counter
 * @param {DelegateSetNumber} setCursor
 * @param {number} delay
 * @param {boolean} isStop
 */

export function useCarouselCounter(setCursor, delay, isStop) {
  useInterval(
    useCallback(() => {
      if (document.hasFocus() && !isStop) setCursor((prev) => prev + 1);
    }, [setCursor, isStop]),
    delay,
  );
}
/**
 *
 * @param {DelegateSetCursor} setCursor
 * @param {number} cursor
 * @param {(value: number)=>number} normalize
 * @param {(isStop: boolean)=>void} setStop
 * @param {(delta: number) => void} setDelta
 * @param {()=>void} handleDeltaConfirm
 */
export function useCarouselEvents(
  cursor,
  setCursor,
  normalize,
  setStop,
  setDelta,
  handleDeltaConfirm,
) {
  const baseXPosRef = useRef(0);

  const onTransitionEnd = useCallback(() => {
    setCursor((value) => normalize(value), false);
  }, [setCursor, cursor, normalize, baseXPosRef]);

  const onMouseDown = useCallback(
    (e) => {
      if (e.buttons === 1) {
        baseXPosRef.current = e.clientX;
        setCursor(undefined, false);
      }
    },
    [baseXPosRef, setCursor, setCursor],
  );

  const onMouseUp = useCallback(
    (e) => {
      handleDeltaConfirm();
    },
    [handleDeltaConfirm],
  );

  const onMouseMove = useCallback(
    (e) => {
      if (e.buttons === 1) {
        setDelta(e.clientX - baseXPosRef.current);
      }
    },
    [setDelta, baseXPosRef],
  );

  // 마우스가 올라가 있는 경우 자동 Slider 를 멈춤
  const onMouseLeave = useCallback(
    (e) => {
      handleDeltaConfirm();
      setStop(false);
    },
    [setStop, handleDeltaConfirm],
  );
  const onMouseEnter = useCallback(
    (e) => {
      setStop(true);
    },
    [setStop],
  );

  return {
    onTransitionEnd,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    onMouseLeave,
    onMouseEnter,
  };
}
