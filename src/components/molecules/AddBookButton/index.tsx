import React from 'react';
import ButtonComponent from '../../atoms/Button';
import { styled } from '@mui/system';


const AddBookStyled = styled(ButtonComponent) (({theme}) => ({
  color: theme.palette.textColor.text2,
  fontWeight: 'bold',
  fontSize: 16,
  boxShadow: 'none'
  
}))
const AddBookButton: React.FC = props => {
  return (
    <AddBookStyled color='greenish' variant='contained'>
      + Add a Book
    </AddBookStyled>
  )
}

export default AddBookButton