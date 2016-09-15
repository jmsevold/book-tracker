import React from 'react';
import ProgressBar from './ProgressBar';
import {Link} from 'react-router';


var book = {
    title: "Harry Potter and the Prisoner of Azkaban",
    pageCount: 448,
    thumbnail:"http://books.google.com/books/content?id=Sm5AKLXKxHgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    startDate:"October 31st, 2016",
    todaysStartingPage: 0,
    pageRate: 10,
    todaysEndingPage: 10,
    completionDate: "November 6th, 2016",
    percentageRead: Math.floor((10 / 448) * 100)
  };


const BookGoal = (book) => {
  return(
    <div>
      <ProgressBar width={book.percentageRead}/>
      <p>{book.title}</p>
      <img alt="book thumbnail" src={book.thumbnail}></img>
      <p>Reading {book.pageRate} pages a day</p>
      <p>Starting on page: {book.dailyStartingPage}</p>
      <p>Ending on page: {book.dailyEndingPage}</p>
      <p>Completion date:{book.completionDate}</p>
      <Link to="/my-books">Back to my books</Link>
    </div>
  );
};

export default BookGoal;



