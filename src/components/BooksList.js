import React from 'react';
import Book from './Book';
import {Link} from 'react-router';



const BooksList = ({books}) => {
  return(
    <div className="col-xs-3">
      {books.map((book, index) => <Book book={book} key={index} index={index}/>)}
      <Link to="/book-form"><span className='glyphicon glyphicon-plus'/>
        Add Book
      </Link>
    </div>
  );
};

export default BooksList;
