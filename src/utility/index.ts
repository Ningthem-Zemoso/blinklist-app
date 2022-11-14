import { BookModel } from '../models/models';
import { Blink, Status } from './blinkEnums';

export const getAllBooks = (): BookModel[] | [] => {
  const allBooks = localStorage.getItem(Blink.ALL_BOOKS);
  if (allBooks !== null) {
    return JSON.parse(allBooks);
  }
  return [];
}

interface LibraryInterface {
  id: number,
  status: string
}

export const addOrChangeLibrary = (id: number, status: string=Status.READING): LibraryInterface[] => {
  let libraryBooks: string | null = localStorage.getItem(Blink.LIBRARY_BOOKS);

  if (libraryBooks === null) {
    libraryBooks = '[]';
  };

  const newBook: LibraryInterface = {id, status}

  let parsedLibraryBooks: LibraryInterface[] = JSON.parse(libraryBooks);
  parsedLibraryBooks = [...parsedLibraryBooks.filter((o) => o.id !== newBook.id), {...newBook}];
  localStorage.setItem(Blink.LIBRARY_BOOKS, JSON.stringify(parsedLibraryBooks));
  return parsedLibraryBooks;
}
