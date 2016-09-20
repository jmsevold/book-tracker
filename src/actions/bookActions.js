import * as types from './actionTypes';
import * as googleBooksAPI from '../utils/googleBooksAPI';

export function addBookSuccess(book){
  return {
    type: types.ADD_BOOK_SUCCESS,
    book 
  }
}



export function addBook(bookQuery) {
  return function(dispatch) {
    return googleBooksAPI.bookSearch(bookQuery).then(book => {
      dispatch(addBookSuccess(book));
    }).catch(error => {
      throw(error);
    });
  };
}