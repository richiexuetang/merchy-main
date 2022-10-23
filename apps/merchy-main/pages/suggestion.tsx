import { FormHandler, getLayout } from '../components';
import type { NextPageWithLayout } from './_app';
import { Container, Box, Heading, Text, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import { SuggestionSuccess } from '../components';
import { suggestionFormFields, SuggestionFormFieldType } from '../data';

interface File extends Blob {
  readonly lastModified: number;
  readonly name: string;
}

declare const File: {
  prototype: File;
  new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
};

const ProductSuggestion: NextPageWithLayout = () => {
  const [suggestionSubmitted, setSuggestionSubmitted] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialValues: Record<string, string | null | File> = {};

  const getInitialValues = useCallback(
    (fields) => {
      Object.values(fields).forEach((field: SuggestionFormFieldType) => {
        if (field.name) {
          if (field.type === 'file') {
            const name = field.name;
            const file = new File([name], '', { type: '' });
            initialValues[field.name] = file;
          } else {
            initialValues[field.name] = field.value;
          }
        }
        if (field.children) {
          getInitialValues(field.children);
        }
      });
    },
    [initialValues]
  );

  useEffect(() => {
    if (Object.keys(initialValues).length === 0) {
      getInitialValues(suggestionFormFields);
    }
  }, [initialValues, getInitialValues]);

  const handleOnClick = () => {
    setSuggestionSubmitted(false);
  };

  return (
    <Box
      data-component="page-container"
      bg="#fafafa"
      w="full"
      py="90px"
      minH="100vh"
      overflowY="hidden"
    >
      <Box w="full" overflowY="hidden">
        {suggestionSubmitted ? (
          <SuggestionSuccess onClick={handleOnClick} />
        ) : (
          <Container
            padding="0"
            bg="white"
            border="solid 1px #e0e0e0"
            borderRadius="4.5px"
            textAlign="center"
            minW="600px"
            w="700px"
            paddingInline="1rem"
            py="45px"
          >
            <Box mb="40px">
              <Heading variant="suggestion">
                Don&apos;t See It? Let&apos;s Fix That.
              </Heading>
              <Text fontSize="sm">
                Help us help you. Tell us what you would add or change to our
                marketplace.
              </Text>
            </Box>

            <Formik
              initialValues={initialValues}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                // if (values.file && typeof values.file === 'object') {
                //   const {
                //     name: fileName,
                //     type: fileType,
                //     size: fileSize,
                //   } = values.file;
                //   const file = values.file;
                // }
                setSuggestionSubmitted(true);
              }}
            >
              {({ values, setFieldValue, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <FormHandler
                    suggestionFormFields={suggestionFormFields}
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                  <Box alignItems="center" w="100%" pt="3" mb="5">
                    <Button
                      type="submit"
                      variant="suggestionSubmit"
                      h="42px"
                      fontFamily="suisseIntlRegular"
                    >
                      Submit Form
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Container>
        )}
      </Box>
    </Box>
  );
};

ProductSuggestion.getLayout = getLayout;

export default ProductSuggestion;
