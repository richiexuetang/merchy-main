import { Box } from '@chakra-ui/react';
import { useLayoutEffect, useRef } from 'react';

const LabelField = ({ label }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const elRef = useRef<any>();

  useLayoutEffect(() => {
    if (elRef.current && elRef.current && elRef.current.firstElementChild) {
      elRef.current.firstElementChild.style.listStyle = 'inside';
      elRef.current.firstElementChild.style.paddingTop = '5px';
      elRef.current.firstElementChild.style.paddingButtom = '5px';
    }
  });

  return (
    <Box textAlign="left">
      <div
        ref={elRef}
        dangerouslySetInnerHTML={{
          __html: label,
        }}
      />
    </Box>
  );
};

export default LabelField;
