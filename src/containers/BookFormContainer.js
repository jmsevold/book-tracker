import React from 'react';
import * as googleBooksAPI from '../utils/googleBooksAPI';
import BookForm from '../components/BookForm';



class BookFormContainer extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state = {
      book: {},
      bookQuery: ''
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleTextChange  = this.handleTextChange.bind(this);
  }


  handleButtonClick(){
    const bookQuery = this.state.bookQuery;
    googleBooksAPI.bookSearch(bookQuery).then((book) => {
      this.setState({
        book
      });
    });
  }



  handleTextChange(e){
    const bookQuery = e.target.value;
    this.setState({
      bookQuery: bookQuery
    });
  }

  render(){
    return(
      <BookForm onChange={this.handleTextChange} onclick={this.handleButtonClick}/>
    );
  }
}


export default BookFormContainer;
