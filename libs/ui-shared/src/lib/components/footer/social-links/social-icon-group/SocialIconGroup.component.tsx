import { VStack, Text, List, ListItem, Icon, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

interface SocialIconGroupProps {
  text: string;
  icons: any[];
}

const SocialIconGroup: React.FC<SocialIconGroupProps> = ({ text, icons }) => {
  return (
    <VStack paddingTop={{ base: 3, md: 0 }}>
      <Text
        color='neutral.white'
        fontSize='sm'
        letterSpacing='0.0004rem'
        lineHeight='md'
        textAlign={{ base: 'center', lg: 'inherit' }}
      >
        {text}
      </Text>
      <List
        justifyContent={{ base: 'center', lg: 'inherit' }}
        display='flex'
        flexDirection='row'
        lineHeight='1.5rem'
        letterSpacing='0.004rem'
        marginLeft={0}
        marginInlineStart='1em'
      >
        {icons.map((icon, index) => {
          return (
            <ListItem
              width='auto'
              paddingInlineStart={2}
              paddingInlineEnd={2}
              _first={{ paddingLeft: '0' }}
              sx={{
                '>a': {
                  bg: 'transparent',
                  color: 'inherit',
                  textDecoration: 'inherit',
                },
              }}
            >
              <Link as={ReachLink} to='/'>
                <Icon as={icon} color='white' />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </VStack>
  );
};
export default SocialIconGroup;
