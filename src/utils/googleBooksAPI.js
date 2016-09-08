import axios from 'axios';


const formatUserQuery = (str) => {
  return /\s/ig.test(str) ? str.replace(/\s/ig, "+") : str
}

const checkResponseCode = (res) => {
  if(res.status === 200) {
    return res.data.items
  }
  else {
    return {error: "No books we're found"}
  }
}

const getTitlesAndThumbnailFromBooks = (books) => {
  for(var {volumeInfo: {title, imageLinks} } of books) {
    return {title: title, thumbnail: imageLinks.thumbnail}
  }
}

export function getBookInfo(book) {
  let googleApiUrl = `https://www.googleapis.com/books/v1/volumes?`
  let userQuery = "q=" + formatUserQuery(book) + "&"
  const apiKey = ''
  let params = `maxResults=10&orderBy=relevance&printType=books`
  let apiKey = `&key=${apiKey}`
  let newUrl = `${googleApiUrl}${userQuery}${params}${apiKey}`
  return axios.get(newUrl)
    .then(res => checkResponseCode(res))
      .then(books => getTitlesAndThumbnailFromBooks(books))
}
