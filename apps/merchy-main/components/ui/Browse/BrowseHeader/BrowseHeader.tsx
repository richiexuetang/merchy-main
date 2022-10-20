import { VStack, chakra } from '@chakra-ui/react';

const h1Styles = {
  marginBottom: 1,
  fontSize: {
    base: '2xl',
    lg: '3xl',
  },
};

const paragraphStyles = {
  fontSize: {
    base: 'xs',
    md: 'sm',
  },
  maxW: {
    sm: '100%',
    lg: '75%',
  },
  overflow: 'hidden',
};

const BrowseHeader = ({ slug, description }) => {
  return (
    <VStack
      bg="beige.100"
      minH="142px"
      p="6"
      maxW={{ lg: '1248px' }}
      justifyContent="center"
      alignItems="flex-start"
      margin="auto"
      mt={{ sm: '0px', lg: '6' }}
      textTransform="capitalize"
    >
      <chakra.h1 {...h1Styles}>
        {typeof slug === 'string' ? slug.replace(/-/g, ' ') : slug}
      </chakra.h1>
      <chakra.p {...paragraphStyles}>{description}</chakra.p>
    </VStack>
  );
};

export default BrowseHeader;
