import useNormalize from '@/hooks/useNormalize';
import { Children, useCallback, useState } from 'react';
import { useCarouselCounter, useCarouselEvents } from './carouselHooks';
import CarouselItem from './carouselItem';

export default function CarouselContent({
  children,
  itemWidth,
  index,
  setCursor,
  enableAnimationRef,
  translateDuration,
  length,
  delay,
  isStop,
  setIsStop,
  onClick,
}) {
  // 마우스 드래그 반영
  const [delta, setDelta] = useState(0);

  const normalize = useNormalize(length);

  const handleDeltaConfirm = useCallback(
    (isUp = true) => {
      enableAnimationRef.current = true;
      if (Math.abs(delta) >= itemWidth / 3)
        setCursor((prev) => prev - Math.sign(delta));
      else if (isUp) onClick(normalize(index));
      setDelta(0);
    },
    [delta, setDelta, enableAnimationRef, onClick, index, normalize],
  );

  useCarouselCounter(setCursor, delay, isStop);

  const events = useCarouselEvents(
    index,
    setCursor,
    normalize,
    setIsStop,
    setDelta,
    handleDeltaConfirm,
  );

  // 최적화를 위해서 css object 사용함.
  const styles = {
    transform: `translate3d(${
      -(index + length) * itemWidth + delta
    }px,0px,0px)`,
    width: `${length * itemWidth * 3}px`,
    transition: enableAnimationRef.current
      ? `all ${translateDuration}ms ease-in-out`
      : 'none',
  };
  return (
    <div className="carousel-content__container" style={styles} {...events}>
      {Children.map(children, (child, i) => {
        return (
          <CarouselItem key={-i - 1} width={`${itemWidth}px`} child={child} />
        );
      })}
      {Children.map(children, (child, i) => {
        return <CarouselItem key={i} width={`${itemWidth}px`} child={child} />;
      })}
      {Children.map(children, (child, i) => {
        return (
          <CarouselItem
            key={i + length}
            width={`${itemWidth}px`}
            child={child}
          />
        );
      })}
    </div>
  );
}
