import { FormLabel, Input, Image, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const Thumb = ({ file }) => {
  const [loading, setLoading] = useState(false);
  const [thumb, setThumb] = useState(undefined);

  useEffect(() => {
    if (!file) {
      return;
    }

    setLoading(true);
    const reader = new FileReader();

    reader.onloadend = () => {
      setThumb(reader.result);
    };

    reader.readAsDataURL(file);
  }, [file]);

  if (!file) {
    return null;
  }
  if (!loading) {
    return <Box>loading...</Box>;
  }

  return (
    <Image src={thumb} alt={file.name} boxSize="200px" objectFit="cover" />
  );
};

const FileFormField = ({ name, type, setFieldValue, values }) => {
  return (
    <>
      <FormLabel htmlFor={name} />
      <Input
        as="input"
        id={type}
        name={name}
        type={type}
        onChange={(event) => {
          setFieldValue(name, event.currentTarget.files[0]);
        }}
      />
      <Box my="2">
        <Thumb file={values.file} />
      </Box>
    </>
  );
};

export default FileFormField;
