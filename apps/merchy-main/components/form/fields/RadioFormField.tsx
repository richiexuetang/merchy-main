import { RadioGroup, Stack, Radio } from '@chakra-ui/react';
import { Field } from 'formik';

const RadioField = ({ name, type, options }) => {
  return (
    <RadioGroup mb="20px" colorScheme="blackAlpha">
      <Stack direction="column">
        {options.map((value) => {
          return (
            <Field key={value} as={Radio} name={name} type={type} value={value}>
              {value}
            </Field>
          );
        })}
      </Stack>
    </RadioGroup>
  );
};

export default RadioField;
