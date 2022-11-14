import React from 'react';
import CardActions from '@mui/material/CardActions';
import ButtonComponent from '../../atoms/Button';
import { styled } from '@mui/system';

const ButtonStyled = styled(ButtonComponent)(({ theme }) => ({
  color: theme.palette.secondary.secondary2,
  fontWeight: "bold",
  border: 0,
  height: '43px',
  "&:hover": {
    backgroundColor: theme.palette.secondary.secondary2,
    color: "white",
    borderRadius: 0
  }

}))

interface Props {
  bookAction: (id: number) => void
  children: React.ReactNode
  bookId: number
}

const BookCardActionsComponent: React.FC<Props> = ({ bookAction, children, bookId }) => {
  return (
    <CardActions sx={{ p: 0, borderTop: 1, borderColor: '#ebe8e8' }}>
      <ButtonStyled
        fullWidth
        variant='text'
        onClick={() => bookAction(bookId)}
      >
        {children}
      </ButtonStyled>
    </CardActions>
  )
}

export default BookCardActionsComponent;