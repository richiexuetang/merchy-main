import { Box, Heading, Image } from '@chakra-ui/react';

const IconBlockItem = ({ src, headline, content, index }) => {
  const condition = index !== 0 && (index + 1) % 3 === 0;
  const marginValue = {
    mr: condition ? '0 !important' : '50px',
  };
  return (
    <Box
      textAlign="center"
      w={{
        base: '100%',
        md: 'calc(50% - 25px)',
        lg: 'calc(33.333% - 33.333px)',
      }}
      m={{ base: '0 0 60px', md: '0 50px 60px 0', lg: '0 50px 100px 0' }}
      {...marginValue}
    >
      <Image
        src={src}
        alt={src}
        w="90px"
        h="70px"
        m="0 auto 30px"
        objectFit="contain"
        display="block"
      />
      <Heading mb="14px" color="black">
        {headline}
      </Heading>
      <Box lineHeight="1.625" color="black">
        {content}
      </Box>
    </Box>
  );
};

export default IconBlockItem;
