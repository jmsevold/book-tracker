import React from 'react';

const book = ({index,book}) => {
  return(
    <div key={index}>
      <img alt="book thumbnail" src={book.thumbnail}></img>
      <p>{book.title}</p>
    </div>  
  );
};

export default book;