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
    this.handleFindBook     = this.handleFindBook.bind(this);
    this.handleTextChange   = this.handleTextChange.bind(this);
    this.handleDailyPages   = this.handleDailyPages.bind(this);
    this.handleSubmitBook   = this.handleSubmitBook.bind(this);
    this.handleStartingPage = this.handleStartingPage.bind(this);
    this.handleRemoveBook   = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(){
    this.setState({
      book: null
    });
  }

  handleSubmitBook(){
    this.props.addBook(this.state.book);
  }

  handleDailyPages(e){
    let book      = this.state.book;
    book.pageRate = e.target.value;
    this.setState({
      book
    });
  }

  handleStartingPage(){
    let book      = this.state.book;
    book.initialStartPage = e.target.value;
    this.setState({
      book
    });
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
        <SecondForm 
          handleDailyPages={this.handleDailyPages} 
          handleStartingPages={this.handleStartingPages}
          handleSubmitBook={this.handleSubmitBook} 
          handleRemoveBook={this.handleRemoveBook}
          book={this.state.book}
        />
      </div>
    }
  }

  render(){
    return(
      renderForms();
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
