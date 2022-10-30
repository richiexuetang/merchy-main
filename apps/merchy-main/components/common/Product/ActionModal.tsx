import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const ActionModal = ({ isFollowOpen, onFollowClose, productInfo }) => {
  const router = useRouter();
  const { slug } = router.query;

  const user = useSelector((state: RootState) => state.auth.user);

  const addProductToFollow = async () => {
    await fetch('/api/auth/token').then((res) =>
      res.json().then((data) => {
        const access = data.access;
        const email = user.email;
        const body = JSON.stringify({
          email,
          slug,
        });

        fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}api/account/follow-product`,
          {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${access}`,
            },
            body: body,
          }
        ).then((response) => console.log('response', response));
      })
    );
    onFollowClose();
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isFollowOpen}
      onClose={onFollowClose}
      motionPreset="none"
    >
      <ModalOverlay bg="rgba(0, 0, 0, 0.05)" />
      <ModalContent my="3.75rem" borderRadius="0px" maxW="600px">
        <ModalHeader
          textAlign="center"
          fontSize="xl"
          fontWeight="semibold"
          py="4"
          paddingInline="6"
          borderBottom="1px solid #cfcfcf"
          p="7"
        >
          Follow Item
        </ModalHeader>
        <ModalBody p="6">
          <Box mb="6">
            <Text marginInline={{ base: '5', md: '10' }} textAlign="center">
              You are about to follow {productInfo.productBySlug.primaryTitle}{' '}
              {productInfo.productBySlug.secondaryTitle}
            </Text>
          </Box>
        </ModalBody>
        <ModalFooter
          borderTop="1px solid #cfcfcf"
          justifyContent="space-between"
        >
          <Button variant="login" onClick={onFollowClose}>
            Cancel
          </Button>
          <Button variant="signup" onClick={() => addProductToFollow()}>
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ActionModal;
