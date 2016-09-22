/*

 
  ,
todaysStartingPage: 20,
pageRate: 10,
todaysEndingPage: 30,
completionDate: "November 6th, 2016",
percentageRead: 15

*/

const books = [
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    pageCount: 448,
    thumbnail:"http://books.google.com/books/content?id=Sm5AKLXKxHgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    startDate:"October 31st, 2016",
    todaysStartingPage: 100,
    pageRate: 10,
    todaysEndingPage: 110,
    completionDate: "November 6th, 2016",
    percentageRead: Math.floor((100 / 448) * 100)
  },
  {
    title: "Star Wars: Aftermath",
    pageCount: 432,
    thumbnail:"http://books.google.com/books/content?id=ujXTCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    startDate:"October 31st, 2016",
    todaysStartingPage: 90,
    pageRate: 10,
    todaysEndingPage: 100,
    completionDate: "November 6th, 2016",
    percentageRead: Math.floor((90 / 448) * 100)
  },
  {
    title: "Basic Economics",
    pageCount: 704,
    thumbnail:"http://books.google.com/books/content?id=oVaNBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    startDate:"October 31st, 2016",
    todaysStartingPage: 200,
    pageRate: 10,
    todaysEndingPage: 210,
    completionDate: "November 6th, 2016",
    percentageRead: Math.floor((200 / 448) * 100)
  },
  
];

export default books;

