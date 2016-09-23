import React from 'react';
import BookForm from '../components/BookForm';
import * as bookActions from '../actions/bookActions';
import * as googleBooksAPI from '../utils/googleBooksAPI';
import {connect} from 'react-redux';

class BookFormContainer extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state = {
      book: null,
      bookQuery: ''
    };
    this.handleFindBook = this.handleFindBook.bind(this);
    this.handleTextChange  = this.handleTextChange.bind(this);
  }


  handleFindBook(){
    const bookQuery = this.state.bookQuery;
    googleBooksAPI.bookSearch(bookQuery).then(book => {
      this.setState({
        book
      });
    }).catch(error => {
      throw(error);
    });
  }



  handleTextChange(e){
    const bookQuery = e.target.value;
    this.setState({
      bookQuery: bookQuery
    });
  }
  
  renderForms(){
    if(!this.state.book){
      return(
        <BookForm handleTextChange={this.handleTextChange} handleFindBook={this.handleFindBook}/>
      );
    }
    else{
      <div>
        <BookForm handleTextChange={this.handleTextChange} handleFindBook={this.handleFindBook}/>
        <SecondForm/>
      </div>
    }
  }

  render(){
    return(
      <BookForm handleTextChange={this.handleTextChange} handleFindBook={this.handleFindBook}/>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch){
  return{
    addBook: book => dispatch(bookActions.addBook(book))
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(BookFormContainer);
