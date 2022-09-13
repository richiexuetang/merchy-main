import { QuestionIcon } from '@chakra-ui/icons';
import {
  Button,
  Text,
  PopoverTrigger,
  Popover,
  PopoverContent,
  PopoverBody,
  Box,
} from '@chakra-ui/react';
import ProductButton from './ProductButton.component';
import { ProductRowButton, ProductRowHeading } from '../../data';
import { chakra } from '@chakra-ui/react';

export interface HeaderProps {
  button: ProductRowButton;
  heading: ProductRowHeading;
}

const ProductHeader: React.FC<HeaderProps> = ({ button, heading }) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      marginTop={6}
      marginBottom={4}
    >
      <chakra.h2
        fontWeight={500}
        fontFamily='var(--chakra-fonts-suisseIntlMedium)'
        fontSize='lg'
        lineHeight='1.333'
        minHeight='0vw'
      >
        {heading.title}

        {heading.popover && (
          <Popover isLazy placement='top' trigger='hover'>
            <PopoverTrigger>
              <Button
                w={4}
                height={4}
                lineHeight='1em'
                flexShrink={0}
                verticalAlign='-0.125em'
                bg='transparent'
                _hover={{
                  bg: 'transparent',
                }}
              >
                <QuestionIcon width={4} height={4} display='inline-block' />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverBody paddingInline={3} padding='1rem'>
                <Text lineHeight='md' letterSpacing='0.0004rem' fontSize='md'>
                  {heading.popoverText}
                </Text>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </chakra.h2>

      {button.text !== '' && <ProductButton button={button} />}
    </Box>
  );
};
export default ProductHeader;
