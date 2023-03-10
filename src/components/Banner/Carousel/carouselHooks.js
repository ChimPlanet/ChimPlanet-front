import useInterval from '@/common/hooks/useInterval';
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
    generateMoveStartHandle(baseXPosRef, setCursor),
    [baseXPosRef, setCursor],
  );

  const onMouseMove = useCallback(generateMovingHandle(baseXPosRef, setDelta), [
    setDelta,
    baseXPosRef,
  ]);

  const onMouseUp = useCallback(
    () => handleDeltaConfirm(),
    [handleDeltaConfirm],
  );

  // 마우스가 올라가 있는 경우 자동 Slider 를 멈춤
  const onMouseLeave = useCallback(() => {
    handleDeltaConfirm(false);
    setStop(false);
  }, [setStop, handleDeltaConfirm]);

  const onMouseEnter = useCallback(() => setStop(true), [setStop]);

  return {
    onTransitionEnd,
    onMouseEnter,
    ...changeToMobileEvent({
      onMouseDown,
      onMouseUp,
      onMouseMove,
      onMouseLeave,
    }),
  };
}

function changeToMobileEvent(events) {
  return !isMobile()
    ? events
    : {
        onTouchStart: events.onMouseDown,
        onTouchEnd: events.onMouseUp,
        onTouchMove: events.onMouseMove,
        onTouchCancel: events.onMouseLeave,
      };
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
}

function generateMoveStartHandle(baseXPosRef, setCursor) {
  if (isMobile()) {
    (e) => {
      baseXPosRef.current = e.touches[0].clientX;
      setCursor(undefined, false);
    };
  }

  // ! Desktop 인 경우
  return (e) => {
    if (e.buttons === 1) {
      baseXPosRef.current = e.clientX;
      setCursor(undefined, false);
    }
  };
}

function generateMovingHandle(baseXPosRef, setDelta) {
  if (isMobile()) {
    return (e) => {
      setDelta(e.touches[0].clientX - baseXPosRef.current);
    };
  }

  return (e) => {
    if (e.buttons === 1) {
      setDelta(e.clientX - baseXPosRef.current);
    }
  };
}
