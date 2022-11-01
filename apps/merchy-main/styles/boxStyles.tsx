import { Box, Container, useStyleConfig } from '@chakra-ui/react';

export const CustomBox = (props) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('CustomBox', { variant });

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest} />;
};

export const CustomContainer = (props) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('CustomContainer', { variant });

  // Pass the computed styles into the `__css` prop
  return <Container __css={styles} {...rest} />;
};
