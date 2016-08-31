import React from 'react';
/*
show title, image, daily goal, completion date
percentage completed, and page you should be on by end of day
*/

const Book = ({title,dailyGoal,completionDate}) => {
  return(
    <div>
      <p>{title}</p>
      <p></p>
      <p>pages per day:{dailyGoal}</p>
      <p>Completion date:{completionDate}</p>
    </div>
  );
};

export default Book;



