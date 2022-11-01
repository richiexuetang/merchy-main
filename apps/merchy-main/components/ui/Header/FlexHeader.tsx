import { Box, Button, Heading } from '@chakra-ui/react';

const FlexHeader = ({ heading, buttonText }) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Heading variant="h2" fontSize="3xl" fontWeight="500">
        {heading}
      </Heading>
      <Button variant="signup">{buttonText}</Button>
    </Box>
  );
};

export default FlexHeader;
