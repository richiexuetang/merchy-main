import { Box, chakra, Checkbox } from '@chakra-ui/react';
import Link from 'next/link';

const BrowseNavbar = ({ name, slug, active, nextLevel }) => {
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
        <Link key={slug} href={`/category/${slug}`}>
          <a>{name}</a>
        </Link>
      </chakra.h2>
      {nextLevel &&
        nextLevel.length > 0 &&
        nextLevel.map(({ slug, name }) => (
          <Box key={slug} mb="0px" w="100%">
            <Link key={slug} href={`/category/${slug}`}>
              <a>
                <Checkbox
                  fontWeight="400"
                  m="0 0 8px"
                  textTransform="capitalize"
                >
                  {name}
                </Checkbox>
              </a>
            </Link>
          </Box>
        ))}
    </Box>
  );
};

export default BrowseNavbar;
