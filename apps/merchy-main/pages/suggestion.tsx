import { getLayout } from '../components';
import type { NextPageWithLayout } from './_app';
import {
  Container,
  Box,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Button,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';
import { suggestionFormFields } from '../data';
import { formInputFieldStyles } from '../styles';
import { useState } from 'react';
import { SuggestionSuccess } from '../components';

const ProductSuggestion: NextPageWithLayout = () => {
  const [suggestionSubmitted, setSuggestionSubmitted] = useState(false);

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
              initialValues={{
                email: '',
                existing: '',
                productCategory: '',
              }}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
                setSuggestionSubmitted(true);
              }}
            >
              {({ values }) => (
                <Form>
                  <VStack>
                    {suggestionFormFields.map(
                      ({
                        title,
                        name,
                        placeholder,
                        isRequired,
                        type,
                        options,
                        children,
                      }) => {
                        return (
                          <FormControl key={name} isRequired={isRequired}>
                            <FormLabel mb="1" fontFamily="suisseIntlRegular">
                              {title}
                            </FormLabel>
                            {type === 'radio' ? (
                              <>
                                <RadioGroup mb="20px">
                                  <Stack direction="column">
                                    {options.map((value) => {
                                      return (
                                        <Field
                                          key={value}
                                          as={Radio}
                                          name={name}
                                          type={type}
                                          value={value}
                                        >
                                          {value}
                                        </Field>
                                      );
                                    })}
                                  </Stack>
                                </RadioGroup>
                                {values.existing && children && (
                                  <>
                                    {children.map(
                                      ({
                                        title,
                                        name,
                                        placeholder,
                                        isRequired,
                                        type,
                                        options,
                                        children,
                                      }) => (
                                        <Box key={name}>
                                          <FormLabel
                                            mb="1"
                                            fontFamily="suisseIntlRegular"
                                          >
                                            {title}
                                          </FormLabel>
                                          <RadioGroup mb="20px">
                                            <Stack direction="column">
                                              {options.map((value) => {
                                                return (
                                                  <Field
                                                    key={value}
                                                    as={Radio}
                                                    name={name}
                                                    type={type}
                                                    value={value}
                                                  >
                                                    {value}
                                                  </Field>
                                                );
                                              })}
                                            </Stack>
                                          </RadioGroup>
                                          {values.productCategory && children && (
                                            <>
                                              {children.map(
                                                ({
                                                  title,
                                                  name,
                                                  placeholder,
                                                  isRequired,
                                                  type,
                                                  options,
                                                  children,
                                                  condition,
                                                }) => {
                                                  return (
                                                    condition ===
                                                      values.existing &&
                                                    values.productCategory && (
                                                      <Box key={name}>
                                                        <FormLabel
                                                          mb="1"
                                                          fontFamily="suisseIntlRegular"
                                                        >
                                                          {title}
                                                        </FormLabel>
                                                        <Field
                                                          as={Input}
                                                          name={name}
                                                          type={type}
                                                          placeholder={
                                                            placeholder
                                                          }
                                                          {...formInputFieldStyles}
                                                        />
                                                      </Box>
                                                    )
                                                  );
                                                }
                                              )}
                                            </>
                                          )}
                                        </Box>
                                      )
                                    )}
                                  </>
                                )}
                              </>
                            ) : (
                              <Field
                                as={Input}
                                name={name}
                                type={type}
                                placeholder={placeholder}
                                {...formInputFieldStyles}
                              />
                            )}
                            {}
                          </FormControl>
                        );
                      }
                    )}
                  </VStack>
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
