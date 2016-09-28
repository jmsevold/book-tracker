export default class BookGoal {
  constructor(bookData){
    this.title     = bookData.title;
    this.thumbnail = bookData.thumbnail;
    this.pageCount = bookData.pageCount;
    this.pageRate  = parseInt(bookData.pageRate) || 0;
    this.startDate = null;
    this.initialStartPage   = parseInt(bookData.initialStartPage);
    this.todaysStartingPage = this.initialStartPage;
    this.todaysEndingPage   = this.todaysStartingPage + this.pageRate;
    this.completionDate     = null;
    this.percentageRead     = this.calculatePercentageRead();
  }
  
  calculatePercentageRead(){
    this.todaysStartingPage ? Math.floor((this.todaysStartingPage / this.pageCount) * 100) : 0;
  }
  
  incrementStartingandEndingPage(){
    // increment by page rate
  }
  
  setCompletionDate(){
    // const readingDays  = Math.Floor(pageCount / (pageRate - initialStartPage))  // will work even if startPage is 0
    //this.completionDate = this.startDate + readingDays
  }
  
  setStartDate(){
    // current date from Moment.js
  }
  
  finishedBook(){
    // today's date > Completion Date
  }
  
}

/*

- pageRate set by user input

- startDate should be set on the bookData object upon creation
.

*/


// {
//     title: "Harry Potter and the Prisoner of Azkaban",
//     pageCount: 448,
//     thumbnail:"http://books.google.com/books/content?id=Sm5AKLXKxHgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//     startDate:"October 31st, 2016",
//     todaysStartingPage: 100,
//     pageRate: 10,
//     todaysEndingPage: 110,
//     completionDate: "November 6th, 2016",
//     percentageRead: Math.floor((100 / 448) * 100)
//   }

