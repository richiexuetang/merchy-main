export const ButtonStyles = {
  baseStyle: {
    fontFamily: 'proximaNova',
    fontWeight: 700,
    letterSpacing: '0px',
    margin: '4px 2px',
  },
  sizes: {},
  variants: {
    continue: {
      color: '#0f0f0f',
      border: 'solid #0f0f0f 1px',
      h: '50px',
      margin: '4px 2px',
      minW: '50px',
      w: '99%',
      borderRadius: '2px',
      padding: '0px',
      fontSize: '16px',
      bg: '#fff',
    },
    authentication: {
      w: 'full',
      h: '50px',
      fontSize: '14px',
      letterSpacing: '0.5px',
      padding: '0px',
      background: '#0f0f0f',
      color: '#fff',
      border: 'none',
    },
    accessToggle: {
      borderRadius: '2px',
      background: '#fff',
      w: '50%',
      border: '2px solid transparent',
      borderBottom: '2px solid #e0e0e0',
      color: '#616161',
      fontWeight: 600,
      fontSize: '14px',
      padding: '14px',
    },
    signup: {
      borderRadius: '0',
      appearance: 'none',
      variant: 'solid',
      bg: 'neutral.600',
      color: 'white',
      _hover: { bg: 'neutral.black', color: 'neutral.200' },
      h: '32px',
      w: 'auto',
      lineHeight: '1.375',
      fontWeight: 'semibold',
      fontFamily: 'suisseIntlRegular',
      minH: 'auto',
    },
    login: {
      display: 'inline-flex',
      borderRadius: '0',
      _hover: { bgColor: 'neutral.black', color: 'neutral.white' },
      lineHeight: '1.375',
      fontWeight: 'semibold',
      fontFamily: 'suisseIntlRegular',
      border: '1px solid',
      borderColor: 'neutral.black',
      color: 'neutral.600',
      bg: 'transparent',
      h: '32px',
    },
  },
  defaultProps: {},
};
