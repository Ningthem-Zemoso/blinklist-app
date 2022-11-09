import React from 'react';
import { Button, ButtonProps } from '@mui/material';

// interface Props {
//   disabled?: boolean,
//   onClick?: () => void,
//   buttonText: string,
//   color?: "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
//   size?: "small" | "medium" | "large" | undefined
// }

const ButtonComponent: React.FC<ButtonProps> = (props) => {
  const { 
    color = "primary",
    disabled = false,
    onClick = undefined,
    size = "medium",
    children
  } = props;
  
  return (
    <Button
      variant="contained"
      color={color}
      disabled={disabled}
      onClick={onClick}
      size={size}
    >
      {children}
    </Button>
  )
}

export default ButtonComponent;