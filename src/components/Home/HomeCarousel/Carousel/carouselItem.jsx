import { string, element } from 'prop-types';

CarouselItem.propTypes = {
  child: element.isRequired,
};

export default function CarouselItem({ child }) {
  return <div className="carousel-item__container">{child}</div>;
}
