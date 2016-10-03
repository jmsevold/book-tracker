import React from 'react';
import BookForm from '../components/BookForm';
import SecondForm from '../components/SecondForm';
import * as bookActions from '../actions/bookActions';
import * as googleBooksAPI from '../utils/googleBooksAPI';
import BookGoal from '../data/BookGoal';
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

  // SecondForm handlers
  handleRemoveBook(){
    this.setState({
      book: null
    });
  }

  handleSubmitBook(){
    let bookGoal = new BookGoal(this.state.book);
    this.props.addBook(bookGoal);
  }

  handleDailyPages(e){
    let book      = this.state.book;
    book.pageRate = e.target.value;
    this.setState({
      book
    });
  }

  handleStartingPage(e){
    let book      = this.state.book;
    book.initialStartPage = e.target.value;
    this.setState({
      book
    });
  }

  // BookForm Handlers
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
      return(
        <div>
          <BookForm handleTextChange={this.handleTextChange} handleFindBook={this.handleFindBook}/>
          <SecondForm 
            handleDailyPages={this.handleDailyPages} 
            handleStartingPage={this.handleStartingPage}
            handleSubmitBook={this.handleSubmitBook} 
            handleRemoveBook={this.handleRemoveBook}
            book={this.state.book}
          />
        </div>
      );
    }
  }

  render(){
    return(
      this.renderForms()
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
