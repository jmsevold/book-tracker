import axios from 'axios';

const API_KEY = '';

export function getBookInfo(book){
  return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${API_KEY}`)
  .then(results => {
    return results.data.items.map((book) => {
      return {
        title: book.volumeInfo.title,
        pageCount: book.volumeInfo.pageCount,
        thumbnail: book.volumeInfo.imageLinks.thumbnail
      }
    });
  });
}



