import React from 'react';
import BooksList from '../components/BooksList';
import {connect} from 'react-redux';


class BooksListContainer extends React.Component{
  constructor(props,context){
    super(props,context);
  }

  render(){
    return(
      <BooksList books={this.props.books}/>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    books: state.books
  };
}


export default connect(mapStateToProps)(BooksListContainer);
