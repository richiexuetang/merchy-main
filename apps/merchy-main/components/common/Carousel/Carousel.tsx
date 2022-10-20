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

interface ImageSliderProps {
  slides: ImageUrl[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const buttonStyles = {
    borderRadius: '50%',
    background: '#0f0f0f',
    color: 'white',
    pos: 'absolute',
    top: '50%',
    w: '10',
    mt: '-22px',
    h: '42px',
    p: '0.625rem',
    maxWidth: '2.5rem',
    maxHeight: '2.5rem',
    _disabled: {
      _hover: {
        background: '#ededed',
        color: '#A1A5A4',
      },
      background: '#ededed',
      color: '#A1A5A4',
    },
    _hover: {
      background: '#0f0f0f',
      color: 'white',
    },
  } as const;

  const RightIcon = createIcon({
    displayName: 'RightIcon',
    viewBox: '0 0 50 50',
    path: (
      <path
        fill="currentColor"
        d="M14.2 40.2001L30.4 25.0001L14.2 9.8001L16.7 7.1001L35.8 25.0001L16.7 42.9001L14.2 40.2001Z"
      />
    ),
  });

  const iconStyles = {
    w: '1em',
    h: '0.5rem',
    lineHeight: '1em',
    flexShrink: '0',
    color: 'white',
    verticalAlign: 'middle',
  } as const;

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

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <IconButton
        aria-label="next image"
        className={className}
        right="1 !important"
        style={{
          display: 'block',
          zIndex: '10',
          borderRadius: '50%',
          color: 'white',
          position: 'absolute',
          top: '50%',
          width: '10',
          marginTop: '-22px',
          height: '42px',
          padding: '0.625rem',
          maxWidth: '2.5rem',
          maxHeight: '2.5rem',
        }}
        onClick={onClick}
        icon={<RightIcon {...iconStyles} />}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <IconButton
        aria-label="prev image"
        className={className}
        left="1 !important"
        style={{
          display: 'block',
          zIndex: '10',
          borderRadius: '50%',
          color: 'white',
          position: 'absolute',
          top: '50%',
          width: '10',
          marginTop: '-22px',
          height: '42px',
          padding: '0.625rem',
          maxWidth: '2.5rem',
          maxHeight: '2.5rem',
        }}
        onClick={onClick}
        icon={<ChevronRightIcon bg="transparent" color="transparent" />}
      />
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
