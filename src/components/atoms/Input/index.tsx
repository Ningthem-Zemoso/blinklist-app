import { Input, InputProps } from '@mui/material'
import React from 'react'

// interface Props {
//   color?: "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined,
//   disabled?: boolean,
//   error?: boolean,
//   fullWidth?: boolean,
//   placeholder?: string,
//   onChange: () => void,
//   required?: boolean,
//   type?: string
// }

const InputComponent: React.FC<InputProps> = (props) => {
  const {
    color = "primary",
    disabled = false,
    error = false,
    fullWidth = false,
    placeholder = '',
    onChange = undefined,
    required = false,
    type = "text",
    sx
  } = props
  return (
    <Input
      color={color}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      type={type}
      sx={sx}
    />
  )
}

export default InputComponent;