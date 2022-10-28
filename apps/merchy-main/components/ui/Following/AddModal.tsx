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
} from '@chakra-ui/react';
import axios from 'axios';
import Link from 'next/link';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Formik, Field, Form } from 'formik';
import { SearchIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { SearchProducts } from '../../../utils/gql';
import { NavInput } from '../..';
import AddOptionModal from './AddOptionModal';

const leftElementStyles = {
  left: { base: 1, md: 0 },
  top: { base: '0px', md: '0px' },
  w: { base: '2rem', md: '3rem' },
  h: { base: '2rem', md: '3rem' },
  fontSize: 'lg',
  alignItems: 'center',
} as const;

const inputStyles = {
  borderColor: 'neutral.400',
  fontSize: { base: 'lg', md: '14px' },
  paddingInlineStart: '12',
  h: { base: '34px', md: '44px' },
  borderRadius: '3px',
  backgroundColor: '#fafafa',
  pr: '2',
  boxShadow: 'none',
  textOverflow: 'ellipsis',
  _focus: {
    zIndex: '1',
    borderColor: '#0f0f0f',
    boxShadow: 'none',
  },
  _hover: {
    borderColor: '#5f5f5f',
  },
} as const;

const AddModal = ({ isOpen, onClose }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();
  const { slug } = router.query;

  const [searchFilter, setSearchFilter] = useState('');
  const [products, setProducts] = useState(null);
  const [executeSearch, { data }] = useLazyQuery(SearchProducts);
  const [addOption, setAddOption] = useState('');

  const {
    isOpen: isAddOptionOpen,
    onOpen: onAddOptionOpen,
    onClose: onAddOptionClose,
  } = useDisclosure();

  useEffect(() => {
    if (searchFilter === '') {
      setProducts(null);
    }
  }, [searchFilter]);

  const handleSearchChange = (e) => {
    setSearchFilter(e.target.value);

    executeSearch({
      variables: {
        search: searchFilter,
      },
    });

    setProducts(data);
  };

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

  let headerText = 'Select Product to Add';
  if (addOption === 'Following') {
    headerText = 'Add to Following';
  } else if (addOption === 'Portfolio') {
    headerText = 'Add to Portfolio';
  }

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} motionPreset="none">
      <ModalOverlay bg="rgba(0, 0, 0, 0.05)" />
      <ModalContent>
        <ModalHeader
          textAlign="center"
          fontSize="xl"
          fontWeight="semibold"
          py="4"
          paddingInline="6"
          borderBottom="1px solid #cfcfcf"
        >
          {headerText}
        </ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={{ field: '' }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ values, setFieldValue, handleSubmit, handleChange }) => (
            <Form onSubmit={handleSubmit}>
              <FormControl w="100%" pos="relative" p="8">
                {(() => {
                  switch (addOption) {
                    case 'Following':
                      return (
                        <AddOptionModal
                          isOpen={isAddOptionOpen}
                          onClose={onAddOptionClose}
                          option="Following"
                        />
                      );
                    case 'Portfolio':
                      return <Box>Portfolio</Box>;
                    default:
                      <>
                        <FormLabel
                          textAlign="start"
                          marginInlineEnd="3"
                          mb="2"
                          fontFamily="suisseIntlRegular"
                        >
                          Which Product would you like to add
                        </FormLabel>
                        <Box>
                          <Box
                            data-component="SearchBoxSite"
                            pos="relative"
                            flexGrow="1"
                          >
                            <InputGroup>
                              <InputLeftElement {...leftElementStyles}>
                                <SearchIcon />
                              </InputLeftElement>
                              <Input
                                {...inputStyles}
                                placeholder="Search for brand, color, etc."
                                onChange={(e) => handleSearchChange(e)}
                              />
                            </InputGroup>
                          </Box>
                          {searchFilter && (
                            <Box
                              bg="white"
                              borderRadius="2px"
                              color="neutral.black"
                              m="auto"
                              overflowY="scroll"
                              textAlign="left"
                              left="0"
                              w="100%"
                              zIndex="1024"
                              top="90px"
                            >
                              {products ||
                              products?.allProducts.edges.length > 0 ? (
                                <List>
                                  {products.allProducts.edges.map(
                                    ({ node }) => {
                                      return (
                                        <ListItem
                                          key={node.primaryTitle}
                                          borderBottom="1px solid #CFCFCF"
                                          pb="10px"
                                          pos="relative"
                                          textTransform="uppercase"
                                          transition="all 0.2s ease-in-out 0s"
                                          borderRight="none"
                                          _hover={{
                                            borderRight: '8px solid #006340',
                                            cursor: 'pointer',
                                          }}
                                        >
                                          <Box
                                            alignItems="center"
                                            display="flex"
                                            flexDir="row"
                                            h="132px"
                                            overflow="hidden"
                                            padding="8px"
                                            w="100%"
                                            onClick={() => {
                                              onAddOptionOpen();
                                              setAddOption('Following');
                                            }}
                                          >
                                            <Image
                                              src={node.media.imageUrl}
                                              alt={node.media.label}
                                              width="125px"
                                              height="125px"
                                              marginRight="20px"
                                            />
                                            <Box w="100%">
                                              <Box
                                                fontSize="11.85px"
                                                lineHeight="18px"
                                                mb="0px"
                                              >
                                                {node.brand}
                                              </Box>
                                              <Box
                                                fontSize="18px"
                                                fontWeight="700"
                                                lineHeight="18px"
                                                m="0px"
                                                overflow="hidden"
                                                maxH="none"
                                              >
                                                {node.primaryTitle}
                                              </Box>
                                              <Box
                                                fontSize="14px"
                                                fontWeight="700"
                                                lineHeight="17px"
                                                mt="0px"
                                              >
                                                {node.secondaryTitle}
                                              </Box>
                                            </Box>
                                          </Box>
                                        </ListItem>
                                      );
                                    }
                                  )}
                                </List>
                              ) : (
                                <Box
                                  border="none"
                                  fontSize="11px"
                                  fontWeight="bold"
                                  m={0}
                                  p="15px"
                                  textTransform="uppercase"
                                >
                                  Nothing to see here! Take a trip to the{' '}
                                  <Link href="/sneakers">browse page</Link> or{' '}
                                  <Link href="/">Suggest a Product</Link>
                                </Box>
                              )}
                            </Box>
                          )}
                        </Box>
                      </>;
                  }
                })()}
              </FormControl>
            </Form>
          )}
        </Formik>
        <ModalFooter
          borderTop="1px solid #cfcfcf"
          justifyContent="space-between"
        >
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
      </ModalContent>
    </Modal>
  );
};

export default AddModal;
