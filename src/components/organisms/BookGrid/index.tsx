import React from 'react';
import { Box, Grid } from '@mui/material';
import BookCardComponent from '../BookCard';
import { BookModel } from '../../../models/models';

interface Props {
  books?: BookModel[],
  bookAction: (id: number) => void
  meta: { type: string, status?: string }
}

const BookGridComponent: React.FC<Props> = props => {
  const {
    books,
    bookAction,
    meta
  } = props

  return (
    <Box sx={{ margin: "auto", padding: '0' }}>
      <Grid container rowSpacing={5} columnSpacing={5}>
        {
          books?.map(book => (
            <Grid key={book.id} item xs={4}>
              <BookCardComponent book={book} bookAction={bookAction} meta={meta} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}

export default BookGridComponent;