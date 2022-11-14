import React from 'react';
import { CardMedia, CardMediaProps } from '@mui/material';

const BookCardMediaComponent: React.FC<CardMediaProps> = props => {
  return (
    <CardMedia
      component="img"
      alt="green iguana"
      // height="100%"
      image={props.image}
      sx={props.sx}
    />
  )
}

export default BookCardMediaComponent;