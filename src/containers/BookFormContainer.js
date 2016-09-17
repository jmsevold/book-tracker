import React from 'react';
import * as googleBooksAPI from '../utils/googleBooksAPI';
import BookForm from '../components/BookForm';
import {browserHistory} from 'react-router';

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
      console.log(this.state);
      //this.context.router.push(`/my-books`);
      //browserHistory.push('/some/path');
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
      <BookForm handleTextChange={this.handleTextChange} handleButtonClick={this.handleButtonClick}/>
    );
  }
}


export default BookFormContainer;
