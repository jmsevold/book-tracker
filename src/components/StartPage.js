import React from 'react';
import * as googleBooksAPI from '../utils/googleBooksAPI';
import BooksList from './BooksList';



class StartPage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleTextChange  = this.handleTextChange.bind(this);
    this.state = {
      books: [],
      book: "",
      showLoadingSpinner: false,
      formEnabled: true
    };
  }


  handleButtonClick(){
    const book = this.state.book;
    this.setState({showLoadingSpinner: true})
    
    googleBooksAPI.bookSearch(book).then((book) => {
      let oldBookState = this.state.books;
      oldBookState.push(book)
      let newBookstate = oldBookState;
      this.setState({
        showLoadingSpinner: false,
        books: newBookstate,
        formEnabled: false
      });
    })
  }

  handleTextChange(e){
    const book = e.target.value;
    this.setState({
      book: book
    });
  }

  renderFormOrList() {
    if(this.state.books.length > 0 && !this.state.formEnabled) {
      return (
        <BooksList books={this.state.books}/>
      )
    }

    else {
      return (
        <div className="col-md-7 col-md-push-3">
          <p id="sub-headline-text" className="text-center">What book are you reading?</p>
          <input type="text" placeholder="" className="form-control input-md" onChange={this.handleTextChange}/>
          <button id="find-book-button" className='btn btn-success' onClick={this.handleButtonClick}>Find Book</button>
        </div>
      )
    }
  }

  toggleLoadingSpinner() {
    if(this.state.showLoadingSpinner) {
      return (
        <img alt="loading gif" src="https://popp.undp.org/Style%20Library/POPP/images/load.gif"></img>
      )
    }
    else {
      return null
    }
  }

  render(){
    return(
      <div id="book-container">
        <div className="container">
          <div className="row">
            {this.toggleLoadingSpinner()}
            {this.renderFormOrList()}
          </div>
        </div>
      </div>
    );
  }
}


export default StartPage;
