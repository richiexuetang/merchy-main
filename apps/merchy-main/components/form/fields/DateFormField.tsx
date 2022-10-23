import { Input } from '@chakra-ui/react';
import { formInputFieldStyles } from '../../../styles';
import { Field } from 'formik';

const DateField = ({ name, type, placeholder, value, setFieldValue }) => {
  return (
    <>
      <Field
        as={Input}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(e) => setFieldValue(name, e.target.value)}
        {...formInputFieldStyles}
      />
    </>
  );
};

export default DateField;
