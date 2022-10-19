import { ArrowForwardIcon, QuestionIcon } from '@chakra-ui/icons';
import {
  Button,
  Text,
  PopoverTrigger,
  Popover,
  PopoverContent,
  PopoverBody,
  Box,
} from '@chakra-ui/react';
// import ProductButton from './ProductButton.component';
// import { ProductRowButton, ProductRowHeading } from '../../data';
import { chakra } from '@chakra-ui/react';
import Link from 'next/link';

interface ProductRowHeaderProps {
  title: string;
  helpMessage: string;
  redirectUrl: string;
}

const ProductRowHeader: React.FC<ProductRowHeaderProps> = ({
  title,
  helpMessage,
  redirectUrl,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      marginTop={6}
      marginBottom={4}
    >
      <chakra.h2
        fontWeight={500}
        fontFamily="var(--chakra-fonts-suisseIntlMedium)"
        fontSize="lg"
        lineHeight="1.333"
        minHeight="0vw"
      >
        {title}
        <Popover isLazy placement="top" trigger="hover">
          <PopoverTrigger>
            <Button
              w={4}
              height={4}
              lineHeight="1em"
              flexShrink={0}
              verticalAlign="-0.125em"
              bg="transparent"
              _hover={{
                bg: 'transparent',
              }}
            >
              <QuestionIcon width={4} height={4} display="inline-block" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverBody paddingInline={3} padding="1rem">
              <Text lineHeight="md" letterSpacing="0.0004rem" fontSize="md">
                {helpMessage}
              </Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </chakra.h2>

      <Link href={`category/${redirectUrl}`}>
        <Button
          padding="0.375rem !important"
          fontStyle="normal"
          color="green.700"
          bg="transparent"
          fontSize="sm"
          fontFamily="var(--chakra-fonts-suisseIntlRegular)"
          rightIcon={<ArrowForwardIcon />}
          borderRadius={0}
          h="34px !important"
          tabIndex={-1}
          lineHeight="10rem"
          _hover={{
            bg: 'neutral.200',
            color: 'green.700',
          }}
        >
          See All
        </Button>
      </Link>
    </Box>
  );
};
export default ProductRowHeader;
