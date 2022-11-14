import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Grid, Stack } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import PageHeaderComponent from '../../molecules/PageHeader';
import { BookModel, LibraryModel } from '../../../models/models';
import axios from 'axios';
import MinsToRead from '../../molecules/MinsToRead';
import BookCardMedia from '../../molecules/BookCardMedia';
import ButtonComponent from '../../atoms/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BookContext from '../BookContext';
import { Status } from '../../../utility/blinkEnums';

const BookDetail = () => {
  const { slug } = useParams();
  const [book, setBook] = useState<BookModel>()
  const [library, setLibrary] = useState<LibraryModel | undefined>()

  useEffect(() => {
    axios
      .get(`/books?slug=${slug}`)
      .then(res => {
        setBook(res.data[0])
        return axios.get(`/library?bookId=${res.data[0].id}`)
      })
      .then(res => {
        if (res.data) setLibrary(res.data[0])
      })
      .catch(err => console.log(err));
  }, [])

  let disableBtn1 = false;
  let disableBtn2 = false;
  if (library && library.status === Status.READING) {
    disableBtn1 = true;
  } else {
    disableBtn2 = true;
  }

  if (book === undefined) {
    return <div></div>
  }


  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <TypographyComponent sx={{ mb: 6 }}>Get the key ideas from</TypographyComponent>
        <PageHeaderComponent name={book.title} />

        <TypographyComponent sx={{ my: 1, fontSize: 20 }}>
          Turning Your Business into an Enduring Great Company
        </TypographyComponent>

        <TypographyComponent sx={{ my: 2, fontSize: 16, fontWeight: 'bold', color: '#6D787E' }}>
          By {book.author}
        </TypographyComponent>

        <MinsToRead minsToRead={book.mins_to_read} />
        <Stack direction="row" spacing={4} sx={{ mt: 10 }}>
          <ButtonComponent
            variant='outlined'
            sx={{ borderColor: '#6D787E', fontWeight: 'bold' }}
            size='large'
            disabled={disableBtn1}
          >
            {library ? (library.status === Status.READING ? 'Currently Reading' : 'Read again') : 'Add to Library'}
          </ButtonComponent>

          <ButtonComponent
            variant='contained'
            sx={{ fontWeight: 'bold' }}
            size='large'
            disabled={disableBtn2}
          >
            Finished Reading
          </ButtonComponent>

          <ButtonComponent endIcon={<ArrowForwardIcon />} sx={{ color: '#6D787E' }} size='large'>
            Send to Kindle
          </ButtonComponent>
        </Stack>

        <Box sx={{ mt: 10 }}>
          <BookContext />
        </Box>

      </Grid>

      <Grid item xs={4}>
        <BookCardMedia image={book.image_url} sx={{ mt: 7 }} />
      </Grid>
    </Grid>
  )
}

export default BookDetail