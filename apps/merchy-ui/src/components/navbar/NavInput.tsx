import { SearchIcon } from '@chakra-ui/icons';
import { InputGroup, InputLeftElement, Input, Box } from '@chakra-ui/react';

const NavInput = () => {
  const leftElementStyles = {
    left: { base: 1, md: 0 },
    top: '0',
    fontSize: 'lg',
    w: '12',
    h: '12',
  } as const;

  const inputStyles = {
    borderColor: 'var(--chakra-colors-neutral-400)',
    fontSize: { base: 'lg', md: '14px' },
    paddingInlineStart: '12',
    h: { base: 12, md: '44px' },
    borderRadius: '3px',
    backgroundColor: '#fafafa',
    pr: '2',
    boxShadow: 'none',
    textOverflow: 'ellipsis',
    _focus: {
      zIndex: '1',
      borderColor: '#0f0f0f',
      boxShadow: 'none',
    },
    _hover: {
      borderColor: '5f5f5f',
    },
  } as const;

  return (
    <Box w='90%' paddingRight={8}>
      <InputGroup>
        <InputLeftElement {...leftElementStyles} children={<SearchIcon />} />
        <Input {...inputStyles} placeholder='Search for brand, color, etc.' />
      </InputGroup>
    </Box>
  );
};

export default NavInput;
