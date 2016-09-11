import React from 'react';
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
      <p>Title:{title}</p>
      <p>Progress:</p>
      <p>Reading {pageRate} pages a day</p>
      <p>Starting on page: {dailyStartingPage}</p>
      <p>Ending on page: {dailyEndingPage}</
      <p>Completion date:{completionDate}</p>
    </div>
  );
};

export default BookGoal;



