import { Children } from 'react';
import CarouselItem from './carouselItem';

export default function CarouselContent({ children, itemWidth }) {
  return (
    <>
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
    </>
  );
}
