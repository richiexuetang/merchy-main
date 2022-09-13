import { imageSlideData } from '../../data/imageSliderData';
import Carousel from './Carousel';

const ImageSlider = () => {
  return <Carousel slides={imageSlideData} />;
};

export default ImageSlider;
