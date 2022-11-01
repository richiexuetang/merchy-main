export const LinkStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    green: {
      textDecor: 'underline !important',
      color: 'green.500',
      textUnderlinePosition: 'under',
    },
    redirect: {
      textDecor: 'underline !important',
      textUnderlinePosition: 'under',
    },
    accountDropdown: {
      display: 'block',
      h: '80px',
      w: '245px',
      m: '0',
      flexDir: 'row',
      justifyContent: 'space-between',
      whiteSpace: 'normal',
      alignItems: 'center',
      padding: '14px 0px 14px 24px !important',
      fontSize: { md: 'xs', lg: 'md' },
      _hover: { bg: 'neutral.300' },
    },
  },
  defaultProps: {},
};
