import React from 'react';
import ProgressBar from './ProgressBar';
import {Link} from 'react-router';




const BookProgress = ({book}) => {
  return(
    <div>
      <ProgressBar width={book.percentageRead}/>
      <p>{book.title}</p>
      <img alt="book thumbnail" src={book.thumbnail}></img>
      <p>Reading {book.pageRate} pages a day</p>
      <p>Starting on page: {book.todaysStartingPage}</p>
      <p>Ending on page: {book.todaysEndingPage}</p>
      <p>Completion date:{book.completionDate}</p>
      <Link to="/my-books">Back to my books</Link>
    </div>
  );
};

export default BookProgress;



