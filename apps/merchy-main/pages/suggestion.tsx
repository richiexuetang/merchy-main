import { FormHandler, getLayout } from '../components';
import type { NextPageWithLayout } from './_app';
import { Container, Box, Heading, Text, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import { SuggestionSuccess } from '../components';
import { suggestionFormFields, SuggestionFormFieldType } from '../data';
import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

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
  const initialValues: Record<string, string | File> = {};

  const getInitialValues = useCallback(
    (fields) => {
      Object.values(fields).forEach((field: SuggestionFormFieldType) => {
        if (field.name) {
          initialValues[field.name] = field.value;
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
          <SuggestionSuccess onClick={() => setSuggestionSubmitted(false)} />
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
                const client = applyCaseMiddleware(axios.create());
                const fileName =
                  typeof values.file !== 'object' ? '' : values.file.name;

                if (values.existing === 'New Product') {
                  try {
                    await client.post(
                      process.env.NEXT_PUBLIC_API_BASE_URL + 'new-suggestion/',
                      {
                        ...values,
                        fileName: fileName,
                      }
                    );
                  } catch (error) {
                    console.log(error);
                  }
                } else {
                  try {
                    await client.post(
                      process.env.NEXT_PUBLIC_API_BASE_URL +
                        'existing-suggestion/',
                      { ...values, fileName: fileName }
                    );
                  } catch (error) {
                    console.log(error);
                  }
                }
                setSuggestionSubmitted(true);
              }}
            >
              {({ values, setFieldValue, handleSubmit, handleChange }) => (
                <Form onSubmit={handleSubmit}>
                  <FormHandler
                    suggestionFormFields={suggestionFormFields}
                    values={values}
                    setFieldValue={setFieldValue}
                    handleChange={handleChange}
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
