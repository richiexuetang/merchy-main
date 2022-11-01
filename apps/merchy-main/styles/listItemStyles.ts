export const ListItemStyles = {
  baseStyle: {
    listStyle: 'none',
    fontWeight: 700,
    letterSpacing: '0px',
    margin: '4px 2px',
  },
  sizes: {},
  variants: {
    nav: {
      pos: 'relative',
      m: { base: '0', md: '0 2px', lg: '0 4px' },
      fontWeight: '500',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
    },
    account: {
      paddingInline: '4',
      py: '4',
      cursor: 'pointer',
      _hover: {
        bg: 'neutral.300',
      },
    },
  },
  defaultProps: {},
};
