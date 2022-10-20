import { Box, Divider, Link } from '@chakra-ui/react';
import { useState } from 'react';

const Blurb = ({ shortBlurb, blurb }) => {
  const [show, setShow] = useState(false);

  return (
    <Box color="green.700" fontSize={{ base: 'sm', md: 'md' }}>
      <Divider orientation="horizontal" />
      {show ? (
        <Box display="inline">
          {blurb} &nbsp;
          <Link
            role="button"
            color="green.700"
            textDecor="underline !important"
            onClick={() => setShow(false)}
          >
            See Less
          </Link>
        </Box>
      ) : (
        <Box display="inline">
          {shortBlurb} &nbsp;
          <Link
            role="button"
            color="green.700"
            textDecor="underline !important"
            onClick={() => setShow(true)}
          >
            See More
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default Blurb;
