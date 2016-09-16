import React from 'react';
import BookProgress from '../components/BookProgress';
import books from '../mockBooks';
//const book = books[0];
//this.props.params.bookId

class BooksProgressContainer extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state = {
      book: books[this.props.params.bookId]
    };
  }

  render(){
    return(
      <BookProgress book={this.state.book}/>
    );
  }
}


export default BooksProgressContainer;
