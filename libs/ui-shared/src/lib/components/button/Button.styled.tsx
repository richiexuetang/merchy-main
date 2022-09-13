import type { ComponentStyleConfig } from '@chakra-ui/react';

const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 0,
    type: 'button',
    display: 'inline-flex',
    appearance: 'none',
  },
  variants: {
    outline: {
      bg: 'neutral.black',
      color: 'neutral.white',
    },
    solid: {},
  },
  defaultProps: {
    variant: 'outline',
  },
};
