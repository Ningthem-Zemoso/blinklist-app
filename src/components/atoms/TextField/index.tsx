import React from 'react';
import { TextField } from '@mui/material';

interface Props {

}

const TextFieldComponent: React.FC<any> = (props: any) => {
  return (
    <TextField
      fullWidth
      label={props.label}
      defaultValue={props.value}
      required={props.required}
      onChange={props.onChange}
      error={props.error}
      helperText={props.errorMessage}
      type={props.type}
      onBlur={props.onBlur}
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}

export default TextFieldComponent;