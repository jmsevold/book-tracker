import React from 'react';
import BookForm from './BookForm';


const BooksList = ({books, toggleEnableForm}) => {
  return(
    <div className="col-xs-3">
      {
        books.map((book, index) => {
          return(
            <div key={index}>
              <img alt="book thumbnail" src={book.thumbnail}></img>
              <p>{book.title}</p>
            </div>
          )
        })
      }
      <a><span className='glyphicon glyphicon-plus' onClick={toggleEnableForm}/></a>
      Add Book
    </div>
  );
};

export default BooksList;