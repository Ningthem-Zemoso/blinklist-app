import React from 'react'
import { CardContent } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import { BookModel } from '../../../models/models';
import {Link} from 'react-router-dom'
import MinsToRead from '../MinsToRead';

interface Props {
  book: BookModel
}

const BookCardContentComponent: React.FC<Props> = props => {
  const { book } = props;
  return (
    <CardContent>
      <TypographyComponent
        gutterBottom
        variant="subtitle2"
        sx={{ fontWeight: "bold" }}
      >
        <Link to={`/book/${book.slug}` } style={{textDecoration: 'none', color: '#03314B'}}>{book.title}</Link>
        
      </TypographyComponent>

      <TypographyComponent variant="body1" color="text.secondary" sx={{ mt: 2, fontWeight: 'bold'}}>
        {book.author}
      </TypographyComponent>

      <MinsToRead minsToRead={book.mins_to_read}/>

    </CardContent>
  )
}

export default BookCardContentComponent