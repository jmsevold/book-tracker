import React from 'react';
import Book from './Book';




const BooksList = ({books, toggleEnableForm}) => {
  return(
    <div className="col-xs-3">
      {books.map((book, index) => <Book book={book} key={index}/>)}
      <a><span className='glyphicon glyphicon-plus' onClick={toggleEnableForm}/></a>
      Add Book
    </div>
  );
};

export default BooksList;