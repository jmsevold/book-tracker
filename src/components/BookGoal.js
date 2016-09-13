import React from 'react';
import ProgressBar from './ProgressBar';
/*
show title, 
thumbnail, 
daily goal, 
completion date
percentage completed, 
and page you should be on by end of day
*/

const BookGoal = ({title,thumbnail,startDate,dailyStartingPage,pageRate,dailyEndingPage,pageCount,completionDate, percentageRead}) => {
  return(
    <div>
      <ProgressBar width={percentageRead}/>
      <p>Reading {pageRate} pages a day</p>
      <p>Starting on page: {dailyStartingPage}</p>
      <p>Ending on page: {dailyEndingPage}</p>
      <p>Completion date:{completionDate}</p>
    </div>
  );
};

export default BookGoal;



