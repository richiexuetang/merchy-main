import { NumericFormat } from 'react-number-format';
import { Input } from '@chakra-ui/react';

const NumberField = ({ value, onValueChange, setFieldValue, name }) => {
  return (
    <NumericFormat
      thousandSeparator={true}
      onChange={(event) => {
        setFieldValue(name, event.target.value);
      }}
      displayType="input"
      customInput={Input}
    />
  );
};

export default NumberField;
