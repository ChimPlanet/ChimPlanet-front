import useNormalize from '@/hooks/useNormalize';
import { element, arrayOf, number } from 'prop-types';
import { Children, useCallback, useMemo, useRef, useState } from 'react';
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

/**
 * @typedef {Object} CarouselProps
 * @property {number} itemWidth
 * @property {React.Node} children
 * @property {number} translateDuration
 * @property {number} delay
 * @property {(cursor: number)=>void} onClick
 * @param {CarouselProps}
 * @returns
 */
export default function Carousel({ children, ...props }) {
  const enableAnimationRef = useRef(true);
  const [index, setIndex] = useState(0);
  // 자동 Slider 동작 조절
  const [isStop, setIsStop] = useState(false);
  const length = useMemo(() => Children.count(children), [children]);

  const setCursor = useCallback(
    (valueOrCallback, enable = true) => {
      enableAnimationRef.current = enable;
      if (valueOrCallback != undefined) setIndex(valueOrCallback);
    },
    [setIndex, enableAnimationRef],
  );

  return (
    <div className="carousel__container">
      <CarouselContent
        children={children}
        index={index}
        length={length}
        setCursor={setCursor}
        enableAnimationRef={enableAnimationRef}
        isStop={isStop}
        setIsStop={setIsStop}
        {...props}
      />
      <CarouselIndicator
        maxLength={length}
        cursor={index}
        setCursor={setCursor}
        setIsStop={setIsStop}
      />
    </div>
  );
}
