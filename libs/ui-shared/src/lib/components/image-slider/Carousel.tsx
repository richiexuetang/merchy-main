import React, { useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  Image,
  createIcon,
  IconButton,
} from '@chakra-ui/react';
import { ImageUrl } from '../../data';

interface CarouselProps {
  slides: ImageUrl[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const RightIcon = createIcon({
    displayName: 'RightIcon',
    viewBox: '0 0 50 50',
    path: (
      <path
        fill='currentColor'
        d='M14.2 40.2001L30.4 25.0001L14.2 9.8001L16.7 7.1001L35.8 25.0001L16.7 42.9001L14.2 40.2001Z'
      />
    ),
  });

  const LeftIcon = createIcon({
    displayName: 'LeftIcon',
    viewBox: '0 0 50 50',
    path: (
      <path
        fill='currentColor'
        d='M35.8 9.7999L19.6 24.9999L35.8 40.1999L33.3 42.8999L14.2 24.9999L33.3 7.0999L35.8 9.7999Z'
      />
    ),
  });

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
        color: 'A1A5A4',
      },
      background: '#ededed',
      color: 'A1A5A4',
    },
    _hover: {
      background: '#0f0f0f',
      color: 'white',
    },
  } as const;

  const iconStyles = {
    w: '1em',
    h: '0.5rem',
    lineHeight: '1em',
  } as const;

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide: number) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex
      mt={6}
      w='full'
      bg='#edf3f8'
      _dark={{ bg: '#3e3e3e' }}
      alignItems='center'
      justifyContent='center'
    >
      <Flex w='full' overflow='hidden' pos='relative'>
        <Flex h='400px' w='full' {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize='full' shadow='md' flex='none'>
              <Image
                src={slide.image}
                alt='carousel image'
                boxSize='full'
                backgroundSize='cover'
              />
            </Box>
          ))}
        </Flex>

        <IconButton
          aria-label='Prev Slide'
          {...buttonStyles}
          left='8'
          onClick={prevSlide}
          disabled={currentSlide === 0}
          icon={<LeftIcon {...iconStyles} />}
        />

        <IconButton
          aria-label='Next Slide'
          {...buttonStyles}
          right='2rem'
          onClick={nextSlide}
          disabled={currentSlide === slidesCount - 1}
          icon={<RightIcon {...iconStyles} />}
        />

        <HStack justify='center' pos='absolute' bottom='8px' w='full'>
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor='pointer'
              boxSize={['7px', null, '5px']}
              m='0 2px'
              bg={currentSlide === slide ? '#5f5f5f' : 'white'}
              display='inline-block'
              transition='background-color 0.6s ease'
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Carousel;
