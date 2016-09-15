import React from 'react';
import {Link} from 'react-router';


const book = ({index,book}) => {
  return(
    <div key={index}>
      <Link to="/progress/1"><img alt="book thumbnail" src={book.thumbnail}></img></Link>
      <p>{book.title}</p>
    </div>  
  );
};

export default book;