import { VStack, Text, List, ListItem, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';

interface SocialIconGroupProps {
  text: string;
  icons: any[];
}

const SocialIconGroup: React.FC<SocialIconGroupProps> = ({ text, icons }) => {
  return (
    <VStack paddingTop={{ base: 3, md: 0 }}>
      <Text
        color="neutral.white"
        fontSize="sm"
        letterSpacing="0.0004rem"
        lineHeight="md"
      >
        {text}
      </Text>
      <List
        display="flex"
        flexDirection="row"
        lineHeight="1.5rem"
        letterSpacing="0.004rem"
        marginLeft={0}
        marginInlineStart="1em"
      >
        {icons.map((icon, index) => {
          return (
            <ListItem
              key={index}
              width="auto"
              paddingInlineStart={2}
              paddingInlineEnd={2}
              _first={{ paddingLeft: '0' }}
              sx={{
                '>a': {
                  bg: 'transparent',
                  color: 'white',
                },
              }}
            >
              <ChakraLink as="a" href="/">
                {icon}
              </ChakraLink>
            </ListItem>
          );
        })}
      </List>
    </VStack>
  );
};
export default SocialIconGroup;
