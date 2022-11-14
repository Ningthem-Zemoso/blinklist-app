import React from 'react';
import { Card } from '@mui/material';
import BookCardMedia from '../../molecules/BookCardMedia';
import BookCardContent from '../../molecules/BookCardContent';
import BookCardActions from '../../molecules/BookCardActions';
import { BookModel } from '../../../models/models';
import { Status } from '../../../utility/blinkEnums';

interface Props {
  book: BookModel
  bookAction: (id: number) => void
  meta: { type: string, status?: string }
}

const BookCardComponent: React.FC<Props> = (props) => {
  const { book, bookAction, meta: { type, status } } = props

  let actionText = '+ &nbsp Add to library';
  if (type === 'library') {
    if (status === Status.READING) {
      actionText = 'Finished'
    } else {
      actionText = 'Read again'
    }
  }

  return (
    <Card >
      <BookCardMedia image={book.image_url} />
      <BookCardContent book={book} />
      <BookCardActions bookAction={bookAction} bookId={book.id}>
        {actionText}
      </BookCardActions>
    </Card>
  )
}

export default BookCardComponent;