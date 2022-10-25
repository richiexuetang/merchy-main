import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  ButtonGroup,
  Text,
  Heading,
  Image,
} from '@chakra-ui/react';
import axios from 'axios';
import Link from 'next/link';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';

const DeleteModal = ({
  isOpen,
  onClose,
  product,
  followProducts,
  setFollowProducts,
}) => {
  const user = useSelector((state: RootState) => state.auth.user);

  const removeUserFollowItem = async (slug) => {
    try {
      const response = await fetch('/api/auth/token');

      const data = await response.json();

      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}api/account/profile`,
        {
          data: { slug: slug, email: user.user.email },
          headers: {
            Authorization: `Bearer ${data.access}`,
          },
        }
      );

      const follow = [...followProducts];
      follow.splice(product.idx, 1);
      setFollowProducts(follow);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      closeOnOverlayClick={false}
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="none"
    >
      <ModalOverlay bg="rgba(0, 0, 0, 0.05)" />
      <ModalContent>
        <ModalHeader
          textAlign="center"
          fontSize="xl"
          fontWeight="semibold"
          py="4"
          paddingInline="6"
        >
          Delete?
        </ModalHeader>
        {product && (
          <>
            <ModalBody>
              <Link href={`product/[slug]`} as={`product/${product.slug}`}>
                <Box
                  display="flex"
                  alignItems="center"
                  cursor="pointer"
                  flexDir="row"
                  h="100%"
                >
                  <Box flex="0 0 auto" h="100%" w="60px" textAlign="center">
                    <Image src={product.media.imageUrl} alt={product.name} />
                  </Box>
                  <Box
                    ml="5"
                    textAlign="left"
                    flexGrow="1"
                    minW={{ base: '150px', lg: '200px' }}
                  >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      pos="relative"
                    >
                      <Text
                        fontSize="sm"
                        mb="1"
                        lineHeight="sm"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                      >
                        {product.primaryTitle}
                      </Text>
                    </Box>
                    <Heading
                      fontWeight="500"
                      fontSize="md"
                      lineHeight="md"
                      mb="1"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      whiteSpace="nowrap"
                    >
                      {product.secondaryTitle}
                    </Heading>
                  </Box>
                </Box>
              </Link>
            </ModalBody>

            <ModalFooter justifyContent="center">
              <ButtonGroup variant="outline" spacing="6">
                <Button
                  variant="signup"
                  onClick={() => removeUserFollowItem(product.slug)}
                  w="auto"
                >
                  Yes
                </Button>
                <Button
                  variant="login"
                  onClick={onClose}
                  marginInline="0"
                  w="auto"
                >
                  No
                </Button>
              </ButtonGroup>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
