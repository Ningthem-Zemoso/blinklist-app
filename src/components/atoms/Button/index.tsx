import React from 'react';
import { Button, ButtonProps } from '@mui/material';

const ButtonComponent: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props}>
      {props.children}
    </Button>
  )
}

export default ButtonComponent;