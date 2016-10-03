var moment = require('moment');

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
    this.setDates();
  }
  
  calculatePercentageRead(){
    return this.todaysStartingPage ? Math.floor((this.todaysStartingPage / this.pageCount) * 100) : 0;
  }
  
  incrementStartingandEndingPage(){
    // increment today's start and end date by the page rate 
    // this actually might be the work of the chron job, and this method will just read that data
    console.log('incrementing');
  }
  
  setCompletionDate(){
    const readingDays   = Math.floor((this.pageCount - this.initialStartPage) / this.pageRate);  
    this.completionDate = this.startDate.clone().add(readingDays,'d');
  }
  
  setStartDate(){
    this.startDate = moment();
  }
  
  finishedBook(){
    return moment().isAfter(this.completionDate);
  }
  
  setDates(){
    this.setStartDate();
    this.setCompletionDate();
  }
  
}
