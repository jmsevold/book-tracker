import React from 'react';
import BookProgress from '../components/BookProgress';
import {connect} from 'react-redux';


class BooksProgressContainer extends React.Component{
  constructor(props,context){
    super(props,context);
  }

  render(){
    const bookIndex = this.props.params.bookId;
    return(
      <BookProgress book={this.props.books[bookIndex]}/>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    books: state.books
  };
}


export default connect(mapStateToProps)(BooksProgressContainer);

