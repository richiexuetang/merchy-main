import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  ButtonGroup,
  Text,
  Heading,
  Image,
  FormLabel,
  FormControl,
  InputLeftElement,
  InputGroup,
  Input,
  List,
  ListItem,
  useDisclosure,
  Container,
} from '@chakra-ui/react';
import axios from 'axios';
import Link from 'next/link';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Formik, Field, Form } from 'formik';

const AddOptionModal = ({ isOpen, onClose, option }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();
  const { slug } = router.query;

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
    onClose();
  };

  return (
    <>
      <ModalBody>
        <Container>
          <Box></Box>
        </Container>
      </ModalBody>

      <ModalFooter borderTop="1px solid #cfcfcf" justifyContent="space-between">
        <Button variant="login" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="signup"
          type="submit"
          onClick={() => addProductToFollow()}
        >
          Confirm
        </Button>
      </ModalFooter>
    </>
  );
};

export default AddOptionModal;
