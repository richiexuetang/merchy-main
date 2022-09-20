import { Box, chakra, Checkbox } from '@chakra-ui/react';
import Link from 'next/link';

const BrowseNavbar = ({ name, urlKey, active, nextLevel }) => {
  const h2Styles = {
    fontWeight: 600,
    fontSize: '16px',
    marginBottom: 2,
    lineHeight: '24px',
    minH: '0vw',
    letterSpacing: '1px',
    color: active ? 'green.700' : 'black',
  };

  return (
    <Box marginBottom="7px" role="button" textTransform="uppercase">
      <chakra.h2 {...h2Styles}>
        <Link href={urlKey}>{name}</Link>
      </chakra.h2>
      {nextLevel &&
        nextLevel.length > 0 &&
        nextLevel.map(({ name, urlKey }) => (
          <Box key={urlKey} mb="0px" w="100%">
            <Checkbox textTransform="none" fontWeight="400" m="0 0 8px">
              {name}
            </Checkbox>
          </Box>
        ))}
    </Box>
  );
};

export default BrowseNavbar;
