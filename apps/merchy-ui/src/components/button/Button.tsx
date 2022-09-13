import { Button, Text, useStyleConfig, ButtonProps } from '@chakra-ui/react';

interface CustomButtonProps extends ButtonProps {
  variant: string;
  text?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant,
  children,
  ...rest
}) => {
  const styles = useStyleConfig('CustomButton', { variant });
  return (
    <Button _css={styles} {...rest}>
      <Text>{children}</Text>
    </Button>
  );
};

export default CustomButton;
