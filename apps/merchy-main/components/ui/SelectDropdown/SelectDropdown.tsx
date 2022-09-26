import { Select } from '@chakra-ui/react';

const SelectDropdown = () => {
  return (
    <Select placeholder="Sort By: Featured">
      <option value="featured"></option>
      <option value="salesEver">Sort By: Total Sold</option>
      <option value="releaseDate">Sort By: Release Date</option>
    </Select>
  );
};

export default SelectDropdown;
