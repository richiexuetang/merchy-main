import React from 'react';
import {
  Box,
  Image,
  createIcon,
  AspectRatio,
  chakra,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { ImageUrl, imageSlideData } from './imageSliderData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import './index.module.css';
import styled from '@emotion/styled';

interface ImageSliderProps {
  slides: ImageUrl[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const renderSlides = () =>
    slides.map((slide, sid) => (
      <Box key={`slide-${sid}`}>
        <AspectRatio maxW="1264px" ratio={2 / 1}>
          <Image
            src={slide.image}
            alt="carousel image"
            boxSize="full"
            backgroundSize="cover"
          />
        </AspectRatio>
      </Box>
    ));

  const NextArrow = styled.div`
    display: block;
    position: relative;

    &.slick-next::before {
      content: '';
      position: absolute;
      top: -50%;
      width: 2rem;
      height: 1px;
      transform: rotate(45deg);
      background-color: rgba(0, 0, 0, 0.8);
      transition: all 0.2s;
      left: 1rem;
    }
    &.slick-next::after {
      content: '';
      top: 50%;
      position: absolute;
      width: 2rem;
      height: 1px;
      transform: rotate(-45deg);
      background-color: rgba(0, 0, 0, 0.8);
      transition: all 0.2s;
      left: 1rem;
    }
    &.slick-next:hover::before {
      top: -40%;
      transform: rotate(35deg);
    }
    &.slick-next:hover::after {
      top: 40%;
      transform: rotate(-35deg);
    }
  `;

  const PrevArrow = styled.div`
    display: block;
    position: relative;
    transform: rotate(360deg);

    &.slick-prev::before {
      content: '';
      position: absolute;
      top: -50%;
      width: 2rem;
      height: 1px;
      transform: rotate(-45deg);
      background-color: rgba(0, 0, 0, 0.8);
      transition: all 0.2s;
      right: 1rem;
    }
    &.slick-prev::after {
      content: '';
      top: 50%;
      position: absolute;
      width: 2rem;
      height: 1px;
      transform: rotate(45deg);
      background-color: rgba(0, 0, 0, 0.8);
      transition: all 0.2s;
      right: 1rem;
    }
    &.slick-prev:hover::before {
      top: -40%;
      transform: rotate(-35deg);
    }
    &.slick-prev:hover::after {
      top: 40%;
      transform: rotate(35deg);
    }
  `;

  function SampleNextArrow(props) {
    const { className, onClick } = props;

    return <NextArrow className={className} onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <PrevArrow className={className} onClick={onClick} />;
  }
  const settings = {
    customPaging: function (i) {
      return (
        <Button
          border="0"
          color="transparent"
          bg="transparent"
          cursor="pointer"
          display="block"
          fontSize="0"
          p="1"
          lineHeight="0"
          bottom="10"
          _hover={{
            bg: 'transparent',
          }}
        >
          Slide + {i}
        </Button>
      );
    },
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Box>
      <Slider {...settings}>{renderSlides()}</Slider>
    </Box>
  );
};

const Carousel = () => {
  return (
    <chakra.section mt={{ base: '6', md: '6' }} w="full">
      <ImageSlider slides={imageSlideData} />
    </chakra.section>
  );
};

export default Carousel;
