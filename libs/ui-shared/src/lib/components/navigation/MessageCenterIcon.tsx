import { BellIcon } from '@chakra-ui/icons';
import { chakra, IconButton } from '@chakra-ui/react';

const MessageCenterIcon = () => {
  return (
    <IconButton
      bg="none"
      w="1.5rem"
      aria-label="Message Center Icon"
      h="42px"
      minW="auto"
      marginRight="1.0rem"
      _hover={{
        bg: 'transparent',
      }}
      icon={
        <>
          <BellIcon display="inline-block" fill="transparent" />
          <chakra.span
            pos="absolute"
            top="-1px"
            right="-1px"
            p="4px"
            fontSize="xs"
            fontWeight="bold"
            lineHeight="none"
            color="green.700"
            transform="translate(-50%,160%)"
            bg="green.700"
            rounded="full"
          />
        </>
      }
    />
  );
};

export default MessageCenterIcon;
