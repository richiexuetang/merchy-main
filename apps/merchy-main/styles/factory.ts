import {
  chakra,
  defineStyleConfig,
  Icon,
  ListItem,
  List,
  Link,
  IconButton,
  Tr,
  Th,
} from '@chakra-ui/react';

export const NavListItem = chakra(ListItem, {
  baseStyle: {
    pos: 'relative',
    m: { base: '0', md: '0 2px', lg: '0 4px' },
    fontWeight: '500',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
  },
});

export const LogoIcon = chakra(Icon, {
  baseStyle: {
    h: 'auto',
    w: { base: '95px', md: '125px' },
    display: 'inline-block',
    lineHeight: '44px',
    flexShrink: '0',
    verticalAlign: 'middle',
  },
});

export const LogoSpan = chakra('span', {
  baseStyle: {
    display: { base: 'flex', md: 'block' },
    mx: { base: '0px', md: '2.5rem' },
  },
});

export const NavList = chakra(List, {
  baseStyle: {
    display: { base: 'none', md: 'flex' },
    flexFlow: 'row nowrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    h: '90px',
    m: '0',
    pr: '30px',
  },
});

export const NavLink = chakra(Link, {
  baseStyle: {
    padding: { md: '8px 1px', xl: '8px' },
    fontSize: { md: 'xs', lg: 'md' },
  },
});

export const NavIconButton = chakra(IconButton, {
  baseStyle: {
    bg: 'none',
    w: '6',
    h: '42px',
    minW: 'auto',
    mr: '0',
    fontSize: '1.25rem',
    _hover: {
      bg: 'transparent',
    },
  },
});

export const ProductFooterSpan = chakra('span', {
  baseStyle: {
    display: 'inline-flex',
    verticalAlign: 'top',
    alignItems: 'center',
    maxW: '100%',
    fontWeight: 'normal',
    lineHeight: '1.2',
    outline: 'transparent solid 2px',
    outlineOffset: '2px',
    mb: '1',
    mr: '1',
    mt: '1',
    minW: '1.5rem',
    minH: '1.5rem',
    fontSize: 'xs',
    borderRadius: '0',
    paddingInline: '1',
    bg: 'beige.100',
    color: 'neutral.black',
    h: '22px',
    fontFamily: 'suisseIntlMedium',
    py: '2px',
  },
});

export const AccountTr = chakra(Tr, {
  baseStyle: {
    display: 'flex',
    flex: '1 0 auto',
    minW: '0px',
    h: 'fit-content',
    borderBottom: '1px solid #EDEDED',
  },
});

export const AccountTh = chakra(Th, {
  baseStyle: {
    px: '0px',
    verticalAlign: 'top',
    minW: '0px',
    cursor: 'pointer',
    paddingInline: { base: '4', sm: '6', md: '6' },
    py: '2',
    lineHeight: '1rem',
    alignSelf: 'center',
    w: '250px',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    fontWeight: 'medium',
  },
});

export const CustomBox = defineStyleConfig({
  baseStyle: {},
  variants: {
    inlineBlock: {
      display: { base: 'none', md: 'inline-block' },
    },
    smooth: {
      padding: 6,
      borderRadius: 'base',
      boxShadow: 'md',
    },
    productCard: {
      border: 'solid #E2E8F0',
      borderWidth: 'thin',
      borderRadius: '3px',
      minW: '141px',
      h: 'auto',
      pos: 'relative',
      mr: '0',
      _hover: {
        cursor: 'pointer',
      },
    },
    productCardImage: {
      display: 'flex',
      justifyContent: 'center',
      w: '140px',
      h: '75px',
      maxW: '100%',
      m: '0px auto',
    },
    productCardInfo: {
      display: 'flex',
      flexDir: 'column',
      h: '100%',
      padding: '2',
      textAlign: 'left',
      pos: 'relative',
    },
  },
  defaultProps: {
    variant: 'smooth',
  },
});

export const CustomContainer = defineStyleConfig({
  baseStyle: {},
  variants: {
    account: {
      width: '100%',
      marginInline: 'auto',
      py: { base: '4', md: '8', lg: '6' },
      paddingInline: 4,
    },
  },
  defaultProps: {
    variant: 'account',
  },
});

export const CustomListItem = defineStyleConfig({
  baseStyle: {},
  variants: {
    account: {
      paddingInline: '4',
      py: '4',
      cursor: 'pointer',
      _hover: {
        bg: 'neutral.300',
      },
    },
  },
  defaultProps: {
    variant: 'account',
  },
});
