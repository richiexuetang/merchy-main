import { chakra, Flex, Text, useCheckbox, Box } from '@chakra-ui/react';

const CustomCheckbox = (props) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  return (
    <chakra.label
      display="flex"
      flexDirection="row"
      alignItems="center"
      gridColumnGap={2}
      m="0px 0px 8px"
      cursor="pointer"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignItems="center"
        justifyContent="center"
        border="2px solid"
        w={4}
        h={4}
        {...getCheckboxProps()}
      >
        {state.isChecked && <Box w={2} h={2} bg="black" />}
      </Flex>
      <Text color="gray.700" fontWeight="400" {...getLabelProps()}>
        {props.value}
      </Text>
    </chakra.label>
  );
};

export default CustomCheckbox;
