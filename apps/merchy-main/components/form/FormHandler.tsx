import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { formInputFieldStyles } from '../../styles/styles';
import { Field } from 'formik';
import {
  DateField,
  FileFormField,
  RadioField,
  RichTextField,
  LabelField,
  NumberField,
} from './fields';

const FormHandler = ({
  suggestionFormFields,
  values,
  setFieldValue,
  handleChange,
}) => {
  return (
    <>
      {suggestionFormFields.map(
        ({
          title,
          name,
          placeholder,
          isRequired,
          type,
          options,
          children,
          conditions,
          label,
        }) => {
          let render = true;
          if (conditions) {
            for (let i = 0; i < conditions.length; i++) {
              const value = conditions[i].value;
              const parent = conditions[i].parent;
              const checkNull = conditions[i].checkNull;
              if (
                (value && value.length && !value.includes(values[parent])) ||
                (checkNull && !values['file'])
              ) {
                render = false;
                break;
              }
            }
          }

          return (
            <Box key={name}>
              {render && (
                <FormControl key={title} isRequired={isRequired}>
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
                      case 'number':
                        return (
                          <NumberField
                            value={values[name]}
                            name={name}
                            setFieldValue={setFieldValue}
                            onValueChange={(val) =>
                              setFieldValue(name, val.floatValue)
                            }
                          />
                        );
                      case 'label':
                        return <LabelField label={label} />;
                      default:
                        <></>;
                    }
                  })()}
                </FormControl>
              )}

              {children?.length && (
                <FormHandler
                  suggestionFormFields={children}
                  values={values}
                  setFieldValue={setFieldValue}
                  handleChange={handleChange}
                />
              )}
            </Box>
          );
        }
      )}
    </>
  );
};

export default FormHandler;
