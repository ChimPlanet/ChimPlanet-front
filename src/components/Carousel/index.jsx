import useNormalize from '@/hooks/useNormalize';
import { element, arrayOf, number } from 'prop-types';
import { Children, useCallback, useRef, useState } from 'react';
import CarouselContent from './carouselContent';
import { useCarouselCounter, useCarouselEvents } from './carouselHooks';
import CarouselIndicator from './carouselIndicator';
// 최적화를 위해서 css sheet를 사용함.
import './carousel.css';

Carousel.propTypes = {
  itemWidth: number.isRequired,
  children: arrayOf(element).isRequired,
  translateDuration: number.isRequired,
  delay: number.isRequired,
};

export default function Carousel({
  children,
  itemWidth,
  translateDuration,
  delay,
}) {
  const length = Children.count(children);
  const enableAnimationRef = useRef(true);
  const [index, setIndex] = useState(0);
  // 마우스 드래그 반영
  const [delta, setDelta] = useState(0);
  // 자동 Slider 동작 조절
  const [isStop, setIsStop] = useState(false);

  const setCursor = useCallback(
    (valueOrCallback, enable = true) => {
      enableAnimationRef.current = enable;
      if (valueOrCallback) setIndex(valueOrCallback);
    },
    [setIndex, enableAnimationRef],
  );

  const handleDeltaConfirm = useCallback(() => {
    enableAnimationRef.current = true;
    if (Math.abs(delta) >= itemWidth / 3)
      setCursor((prev) => prev - Math.sign(delta));
    setDelta(0);
  }, [delta, setDelta, enableAnimationRef]);

  //#region Hooks

  const normalize = useNormalize(length);

  useCarouselCounter(setCursor, delay, isStop);

  const events = useCarouselEvents(
    index,
    setCursor,
    normalize,
    setIsStop,
    setDelta,
    handleDeltaConfirm,
  );

  //#endregion

  // 최적화를 위해서 css object 사용함.
  const carouselStyle = {
    transform: `translate3d(${
      -(index + length) * itemWidth + delta
    }px,0px,0px)`,
    width: `${length * itemWidth * 3}px`,
    transition: enableAnimationRef.current
      ? `all ${translateDuration}ms ease-in-out`
      : 'none',
  };

  return (
    <div className="carousel__container" style={carouselStyle} {...events}>
      <CarouselContent children={children} itemWidth={itemWidth} />
      <CarouselIndicator />
    </div>
  );
}
