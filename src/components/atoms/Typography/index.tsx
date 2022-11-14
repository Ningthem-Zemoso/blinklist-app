import React from 'react'
import { Typography, TypographyProps } from '@mui/material';

interface Props extends TypographyProps{
  component?: React.ElementType;
}

const TypographyComponent: React.FC<Props> = props => {
  const {
    children,
  } = props
  return (
    <Typography
      {...props}
    >
      {children}
    </Typography>
  )
}

export default TypographyComponent;