import React from 'react';
import BookProgress from '../components/BookProgress';
import {connect} from 'react-redux';


class BooksProgressContainer extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state ={
      todaysStartingPage: 0
    };
    this.handleUpdateStartingPage = this.handleUpdateStartingPage.bind(this);
  }
  
  handleUpdateStartingPage(){
    console.log("handleUpdateStartingPage clicked");
  }
  
  render(){
    const bookIndex = this.props.params.bookId;
    return(
      <BookProgress 
        book={this.props.books[bookIndex]}
        handleUpdateStartingPage={this.handleUpdateStartingPage}
      />
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    books: state.books
  };
}


export default connect(mapStateToProps)(BooksProgressContainer);

