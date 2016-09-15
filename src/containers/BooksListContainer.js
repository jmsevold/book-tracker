import React from 'react';
import BooksList from '../components/BooksList';
import books from '../mockBooks.js';


class BooksListContainer extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state = {
      books
    };
  }

  render(){
    return(
      <BooksList books={this.state.books}/>
    );
  }
}


export default BooksListContainer;
