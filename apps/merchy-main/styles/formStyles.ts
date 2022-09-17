const activeLabelStyles = {
  transform: 'scale(0.60) translateY(-24px)',
  top: '8px',
};

export const FormStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    floating: {
      container: {
        marginBottom: '8px',
        input: {
          borderRadius: '2px',
          h: '48px',
        },
        _focusWithin: {
          label: {
            ...activeLabelStyles,
          },
          input: {
            border: '1px solid black',
            boxShadow: 'none',
          },
        },
        'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
          {
            ...activeLabelStyles,
          },
        label: {
          fontFamily: 'proximaNova',
          top: '5px',
          left: '0',
          color: '#949494',
          fontSize: '16px',
          position: 'absolute',
          pointerEvents: 'none',
          mx: 3,
          px: 1,
          my: 2,
          transformOrigin: 'left top',
        },
      },
    },
  },
  defaultProps: {},
};
