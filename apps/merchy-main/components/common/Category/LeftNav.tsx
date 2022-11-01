import { Box, chakra, Heading, Checkbox } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BrowseNavbar } from '../../ui';

const LeftNav = ({
  handleCheckboxChange,
  rootLevel,
  levelOne,
  levelTwo,
  filterAttributes,
}) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Box
      display={{ base: 'none', lg: 'block' }}
      paddingLeft={4}
      gridColumn={{
        base: 'span 3/span 3',
        md: 'span 2/span 2',
        lg: 'span 1/span 1',
      }}
    >
      <Box>
        {/* Left Top Nav Menu */}
        <Box marginBottom={8}>
          {rootLevel.map(({ name, slug: url, level }) => {
            let active = false;
            if (
              typeof slug === 'string' &&
              name.toLowerCase() === slug?.replace('-', ' ').toLowerCase()
            ) {
              active = true;
            }

            return (
              level === 0 && (
                <BrowseNavbar
                  key={url}
                  name={name}
                  slug={url}
                  active={active}
                  nextLevel={[]}
                />
              )
            );
          })}
        </Box>
        {/* End of Left Top Nav Menu */}

        {/* Below Retail Section  */}
        <Box marginBottom={8}>
          <Box marginBottom="7px" role="button">
            <Heading variant="h2"> BELOW RETAIL </Heading>
          </Box>
        </Box>
        {/* End of Below Retail */}

        <Box marginBottom={8}>
          {levelOne?.map(({ name, slug: url, level }) => {
            let active = false;
            let children = [];
            if (
              typeof slug === 'string' &&
              name.toLowerCase() === slug?.replace('-', ' ').toLowerCase()
            ) {
              active = true;
              children = levelTwo;
            }

            return (
              level === 1 && (
                <BrowseNavbar
                  key={url}
                  name={name}
                  slug={url}
                  active={active}
                  nextLevel={children}
                />
              )
            );
          })}
        </Box>

        <Box>
          {filterAttributes.map(({ node }) => {
            return (
              <Box key={node.fieldValue}>
                <Heading variant="h2" textTransform="uppercase">
                  {node.displayName}
                </Heading>
                <chakra.ul display="flex" flexWrap="wrap">
                  {node.productAttribute.edges.map(({ node: x }) => {
                    return (
                      <chakra.li key={x.value} w="100%" mb="0">
                        <Checkbox
                          m="0px 0px 8px"
                          fontWeight="400"
                          colorScheme="blackAlpha"
                          value={x.value}
                          onChange={(e) =>
                            handleCheckboxChange(e, node.fieldValue)
                          }
                        >
                          {x.displayName}
                        </Checkbox>
                      </chakra.li>
                    );
                  })}
                </chakra.ul>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default LeftNav;
