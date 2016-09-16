import React from 'react';
import {Link} from 'react-router';

const book = ({key,book}) => {
  return(
    <div key={key}>
      <Link to={`/progress/${key}`}><img alt="book thumbnail" src={book.thumbnail}></img></Link>
      <p>{book.title}</p>
      <p>key is{key}</p>
    </div>  
  );
};

export default book;