import React from 'react';
import BookForm from '../components/BookForm';
import * as bookActions from '../actions/bookActions';
import {connect} from 'react-redux';

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
    this.props.addBook(bookQuery);
    console.log(this.props);
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
