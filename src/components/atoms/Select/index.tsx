import React from 'react'
import { Select, SelectProps } from '@mui/material'



const SelectComponent: React.FC<SelectProps> = (props) => {
  const {
    labelId,
    value,
    label,
    onChange,
    children,
  } = props;
  console.log(label)
  return (
    <Select
      labelId={labelId}
      value={value}
      label={label}
      onChange={onChange}
    >
      {children}
    </Select>
  )
}

export default SelectComponent;