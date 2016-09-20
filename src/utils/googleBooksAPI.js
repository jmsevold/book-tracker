import axios from 'axios';


const formatUserQuery = (str) => {
  let query =  /\s/ig.test(str) ? str.replace(/\s/ig, "+") : str
  return `q=${query}&`;
}


const extractBookInfo = (books) => {
  for(var {volumeInfo: {title, imageLinks, pageCount} } of books) {
    return {title: title, thumbnail: imageLinks.thumbnail, pageCount: pageCount}
  }
}

const constructQuery = (book) => {
  let googleApiUrl   = `https://www.googleapis.com/books/v1/volumes?`
  let userQuery      = formatUserQuery(book)
  const apiKey       = 'AIzaSyDI6ELm8AYM_vLDy3xJNSP6csRkV_x6Mt0';
  let params         = `maxResults=10&orderBy=relevance&printType=books`
  let key            = `&key=${apiKey}`
  let url            = `${googleApiUrl}${userQuery}${params}${key}`
  return url;
}

export function bookSearch(book) {
  let url = constructQuery(book);
  return axios.get(url)
    .then(res => extractBookInfo(res.data.items))
    .catch(error =>  {error: "No books were found"});
}
