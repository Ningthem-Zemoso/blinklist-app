import React, { useState, useEffect } from 'react';
import { BookModel, LibraryModel } from '../../../models/models';
import axios from 'axios';
import { Box, Grid } from '@mui/material';
import PageHeaderComponent from '../../molecules/PageHeader';
import LibraryTabs from '../LibraryTabs';
import { Status } from '../../../utility/blinkEnums';

const MyLibraryComponent: React.FC = () => {
  const [bookState, setBookState] = useState<LibraryModel[]>([]);
  const [libraryRefresh, setLibraryRefresh] = useState<boolean>(false) 

  const changeBookStatus = (bookId: number) => {
    const book = bookState.filter(libraryBook => libraryBook.bookId === bookId)[0]
    let bookStatus = Status.READING;
    if(book.status === Status.READING){
      bookStatus = Status.FINISHED;
    }

    axios
      .patch(`/library/${book.id}`, { id: book.id, status: bookStatus })
      .then(res => {
        return axios.get("/library?_expand=book")
      })
      .then(res => {
        setBookState(res.data);
      })
      .catch((err) => console.log(err));

  }

  useEffect(() => {
    axios
      .get("/library?_expand=book")
      .then((res) => {
        console.log(res.data)
        setBookState(res.data);
        // changeBookStatus(4)
      })
      .catch((err) => console.log(err));
  }, [libraryRefresh])

  return (
    <>
      <Box sx={{ margin: "auto", padding: '20px 20px' }}>
        <PageHeaderComponent name="My Library" />
        <LibraryTabs libraryBooks={bookState} bookAction={changeBookStatus} />
      </Box>

    </>
  )
}

export default MyLibraryComponent