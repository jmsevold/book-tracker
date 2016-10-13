import * as types from './actionTypes';
import * as googleBooksAPI from '../utils/googleBooksAPI';

export const fetchBooks = (books) => {
  return {
    type: types.FETCH_BOOK,
    books
  }
}

export const loadBook = (bookQuery) => {
  return (dispatch, getState) => {
    googleBooksAPI.bookSearch(bookQuery).then(books => {
      dispatch(fetchBooks(books))
    })
  }
}
