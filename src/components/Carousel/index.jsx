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

export default function Carousel({ children, ...props }) {
  const enableAnimationRef = useRef(true);
  const [index, setIndex] = useState(0);

  const setCursor = useCallback(
    (valueOrCallback, enable = true) => {
      enableAnimationRef.current = enable;
      if (valueOrCallback) setIndex(valueOrCallback);
    },
    [setIndex, enableAnimationRef],
  );

  return (
    <div className="carousel__container">
      <CarouselContent
        children={children}
        index={index}
        setCursor={setCursor}
        // setIsStop={setIsStop}
        enableAnimationRef={enableAnimationRef}
        {...props}
      />
      <CarouselIndicator />
    </div>
  );
}
