import React from 'react';
/*
show title, image, daily goal, completion date
percentage completed, and page you should be on by end of day
*/

const Book = ({title,dailyGoal,pageRate,completionDate}) => {
  return(
    <div>
      <p>Title:{title}</p>
      <p>Progress:</p>
      <p>Reading {pageRate} pages a day</p>
      <p>Today's goal: Page {dailyGoal}</p>
      <p>Completion date:{completionDate}</p>
    </div>
  );
};

export default Book;



