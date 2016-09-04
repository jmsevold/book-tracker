import axios from 'axios';

const API_KEY = 'AIzaSyDI6ELm8AYM_vLDy3xJNSP6csRkV_x6Mt0';

export function getBookInfo(book){
  return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${API_KEY}`)
  .then(results => {
    return results;
  });
}



