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
    &.slick-next {
      right: 2rem;
    }

    &.slick-next::before {
      content: none;
    }
    &.slick-next::after {
      content: none;
    }
  `;

  const PrevArrow = styled.div`
    z-index: 10;

    &.slick-prev {
      left: 0.5rem;
    }

    &.slick-prev::before {
      content: none;
    }
    &.slick-prev::after {
      content: none;
    }
  `;

  function SampleNextArrow(props) {
    const { className, onClick } = props;

    return (
      <NextArrow className={className} onClick={onClick}>
        <IconButton
          bg="black"
          aria-label="next arrow"
          borderRadius="50%"
          icon={<ChevronRightIcon color="white" />}
        />
      </NextArrow>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <PrevArrow className={className} onClick={onClick}>
        <IconButton
          bg="black"
          aria-label="prev arrow"
          borderRadius="50%"
          icon={<ChevronLeftIcon color="white" />}
        />
      </PrevArrow>
    );
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
