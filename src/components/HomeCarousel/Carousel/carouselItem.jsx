import { string, element } from 'prop-types';

CarouselItem.propTypes = {
  width: string.isRequired,
  child: element.isRequired,
};

export default function CarouselItem({ child, width }) {
  return (
    <div className="carousel-item__container" style={{ width }}>
      {child}
    </div>
  );
}
