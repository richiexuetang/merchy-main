import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Box,
  Button,
} from '@chakra-ui/react';
// import { RootState } from '../../../store/store';
// import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import { addToPortfolioFormFields } from 'apps/merchy-main/data';
import { FormHandler } from '../../form';

const AddToPortfolioModal = ({
  isPortfolioOpen,
  onPortfolioClose,
  productInfo,
}) => {
  const router = useRouter();
  //   const { slug } = router.query;
  const initialValues: Record<string, string> = {};

  //   const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isPortfolioOpen}
      onClose={onPortfolioClose}
      motionPreset="none"
    >
      <ModalOverlay bg="rgba(0, 0, 0, 0.05)" />
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values, setFieldValue, handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
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
                Add To Portfolio
              </ModalHeader>
              <ModalBody p="6">
                <Box>
                  <Box>
                    <Box display="flex" flexDir="column">
                      <FormHandler
                        suggestionFormFields={addToPortfolioFormFields}
                        values={values}
                        setFieldValue={setFieldValue}
                        handleChange={handleChange}
                      />
                    </Box>
                  </Box>
                </Box>
              </ModalBody>
              <ModalFooter
                borderTop="1px solid #cfcfcf"
                justifyContent="space-between"
              >
                <Button variant="login" onClick={onPortfolioClose}>
                  Cancel
                </Button>
                <Button variant="signup" type="submit">
                  Confirm
                </Button>
              </ModalFooter>
            </ModalContent>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddToPortfolioModal;
