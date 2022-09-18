import { Box, chakra } from '@chakra-ui/react';
import Link from 'next/link';

const BrowseNavbar = ({ name, urlKey, category }) => {
  const activeCategory = name.toLowerCase() === category;

  const h2Styles = {
    fontWeight: 600,
    fontSize: '16px',
    marginBottom: 2,
    lineHeight: '24px',
    minH: '0vw',
    letterSpacing: '1px',
    color: activeCategory ? 'green.700' : 'black',
  };

  return (
    <Box marginBottom="7px" role="button" textTransform="uppercase">
      <chakra.h2 {...h2Styles}>
        <Link href={urlKey}>{name}</Link>
      </chakra.h2>
    </Box>
  );
};

export default BrowseNavbar;
