import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { formInputFieldStyles } from '../../styles/styles';
import { Field } from 'formik';
import { DateField, FileFormField, RadioField, RichTextField } from './fields';

const FormHandler = ({ suggestionFormFields, values, setFieldValue }) => {
  return (
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
          condition,
        }) => {
          const render =
            (condition && values[condition.parent] === condition.value) ||
            (condition &&
              condition.checkNull &&
              values[condition.parent] !== null) ||
            condition === null;

          return (
            <FormControl key={title} isRequired={isRequired}>
              {render && (
                <>
                  <FormLabel mb="1" fontFamily="suisseIntlRegular">
                    {title}
                  </FormLabel>
                  {(() => {
                    switch (type) {
                      case 'radio':
                        return (
                          <RadioField
                            options={options}
                            name={name}
                            type={type}
                          />
                        );
                      case 'text':
                        return (
                          <Field
                            as={Input}
                            name={name}
                            type={type}
                            placeholder={placeholder}
                            {...formInputFieldStyles}
                          />
                        );
                      case 'file':
                        return (
                          <FileFormField
                            setFieldValue={setFieldValue}
                            name={name}
                            type={type}
                            values={values}
                          />
                        );
                      case 'rich':
                        return (
                          <RichTextField
                            setFieldValue={(val) => setFieldValue(name, val)}
                            value={values[name]}
                          />
                        );
                      case 'date':
                        return (
                          <DateField
                            value={values[name]}
                            setFieldValue={setFieldValue}
                            name={name}
                            type={type}
                            placeholder={placeholder}
                          />
                        );
                      default:
                        <></>;
                    }
                  })()}
                </>
              )}

              {children?.length && (
                <FormHandler
                  suggestionFormFields={children}
                  values={values}
                  setFieldValue={setFieldValue}
                />
              )}
            </FormControl>
          );
        }
      )}
    </VStack>
  );
};

export default FormHandler;
