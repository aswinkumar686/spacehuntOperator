import React from 'react';
import Select, { components } from 'react-select';

const ReactSelect = ({ options, onChange, value }) => {
  const { Option } = components;
  const IconOption = (props) => {
    const { data } = props;
    return (
      <Option {...props}>
        {data.icon && (
          <img src={data.icon} style={{ width: 30 }} alt={props.data.label} />
        )}
        {data.label}
      </Option>
    );
  };
  return (
    <Select
      options={options}
      onChange={onChange}
      value={value}
      components={{ Option: IconOption }}
    />
  );
};

export default ReactSelect;
