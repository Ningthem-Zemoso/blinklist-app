import React from 'react'
import { InputLabel, InputLabelProps } from '@mui/material';

const InputLabelComponent: React.FC<InputLabelProps> = props => {
  const {
    children,
    color,
    disabled,
    error,
    required,
    size,
    variant
  } = props

  return (
    <InputLabel
      color={color}
      disabled={disabled}
      error={error}
      required={required}
      size={size}
      variant={variant}
    >
      {children}
    </InputLabel>
  )
}

export default InputLabelComponent;