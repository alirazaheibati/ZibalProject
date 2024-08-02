import { Select } from "antd";
import PropTypes from "prop-types";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

export const SelectInput = ({ label, options = [] }) => {
  const safeOptions = Array.isArray(options) ? options : [];

  return (
    <Select
      showSearch
      placeholder={label}
      optionFilterProp="children"
      onChange={handleChange}
      onSearch={onSearch}
    >
      {safeOptions.map((option) => (
        <Select.Option key={option.value} value={option.value}>
          {option.label}
        </Select.Option>
      ))}
    </Select>
  );
};
SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
