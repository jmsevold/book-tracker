import React from 'react';
import BooksList from '../components/BooksList';
import {connect} from 'react-redux';
import store from '../store/configureStore';

class BooksListContainer extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  render() {
    if(this.props.books.items.length === 0) {
      return (
        <div>Loading</div>
      )
    }
    else {
      return (
        <BooksList books = {this.props.books.items}></BooksList>
      )
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    books: state.books
  }
}


export default connect(mapStateToProps)(BooksListContainer);
