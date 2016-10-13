import React from 'react';
import BookForm from '../components/BookForm';
import SecondForm from '../components/SecondForm';
import * as bookActions from '../actions/bookActions';
import BookGoal from '../data/BookGoal';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

class BookFormContainer extends React.Component{
  constructor(props, context) {
    super(props, context);
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
  handleRemoveBook() {
    this.setState({
      book: null
    });
  }

  handleSubmitBook() {
    let bookGoal = new BookGoal(this.state.book);
    actions.loadBook(bookGoal)
  }

  handleDailyPages(e) {
    let book      = this.state.book;
    book.pageRate = e.target.value;
    this.setState({
      book
    });
  }

  handleStartingPage(e) {
    let book      = this.state.book;
    book.initialStartPage = e.target.value;
    this.setState({
      book
    });
  }

  // BookForm Handlers
  handleFindBook() {
    const bookQuery = this.state.bookQuery;
    const {actions} = this.props;
    actions.loadBook(bookQuery)
    this.props.router.push('/my-books')
  }

  handleTextChange(e) {
    const bookQuery = e.target.value;
    this.setState({
      bookQuery: bookQuery
    });
  }

  render() {
    return (
      <div>
        <BookForm handleTextChange={this.handleTextChange} handleFindBook={this.handleFindBook}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(bookActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BookFormContainer));
