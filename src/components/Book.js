import React from 'react';
import {Link} from 'react-router';

const book = ({book,index}) => {
  return(
    <div key={index}>
      <Link to={`/progress/${index}`}><img alt="book thumbnail" src={book.thumbnail}></img></Link>
      <p>{book.title}</p>
    </div>  
  );
};

export default book;