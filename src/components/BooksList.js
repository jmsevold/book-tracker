import React from 'react';

const BooksList = ({books}) => {
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
    </div>
  );
};

export default BooksList;