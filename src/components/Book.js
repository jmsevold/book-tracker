import React from 'react';
// clicking on the image should lead to BookGoal
const book = ({index,book}) => {
  return(
    <div key={index}>
      <img alt="book thumbnail" src={book.thumbnail}></img>
      <p>{book.title}</p>
    </div>  
  );
};

export default book;