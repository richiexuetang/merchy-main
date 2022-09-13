import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ProductRowButton } from '../../data';

interface ProductButtonProps {
  button: ProductRowButton;
}

const ProductButton: React.FC<ProductButtonProps> = ({ button }) => {
  return (
    <Link to={button.href}>
      <Button
        padding='0.375rem !important'
        fontStyle='normal'
        color='green.700'
        bg='transparent'
        fontSize='sm'
        fontFamily='var(--chakra-fonts-suisseIntlRegular)'
        rightIcon={<ArrowForwardIcon />}
        borderRadius={0}
        h='34px !important'
        tabIndex={-1}
        lineHeight='10rem'
        _hover={{
          bg: 'neutral.200',
          color: 'green.700',
        }}
      >
        {button.text}
      </Button>
    </Link>
  );
};
export default ProductButton;
