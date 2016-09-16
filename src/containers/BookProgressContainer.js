import React from 'react';
import books from '../mockBooks';
import BookProgress from '../components/BookProgress';
const book = books[0];

class BooksProgressContainer extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state = {
      book
    };
  }

  render(){
    return(
      <BookProgress book={this.state.book}/>
    );
  }
}


export default BooksProgressContainer;
