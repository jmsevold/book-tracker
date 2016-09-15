import React from 'react';
import Book from './Book';
import {Link} from 'react-router';
import books from '../mockBooks.js'


const BooksList = () => {
  return(
    <div className="col-xs-3">
      {books.map((book, index) => <Book book={book} key={index}/>)}
      <Link to="/book-form"><span className='glyphicon glyphicon-plus'/></Link>
      Add Book
    </div>
  );
};

export default BooksList;