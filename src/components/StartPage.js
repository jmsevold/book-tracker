import React from 'react';
import * as googleBooksAPI from '../utils/googleBooksAPI';
import BooksList from './BooksList';
import BookForm from './BookForm';



class StartPage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state = {
      books: [],
      book: "",
      showLoadingSpinner: false,
      formEnabled: true
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleTextChange  = this.handleTextChange.bind(this);
    this.toggleEnableForm  = this.toggleEnableForm.bind(this);
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

  toggleEnableForm(){
    this.setState({
      formEnabled: !this.state.formEnabled
    });

  }

  handleTextChange(e){
    const book = e.target.value;
    this.setState({
      book: book
    });
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

  renderFormOrList() {
    if(this.state.formEnabled){
      return (
        <BookForm handleTextChange={this.handleTextChange} handleButtonClick={this.handleButtonClick}/>
      )
    }

    else {
      return (
        <BooksList books={this.state.books} toggleEnableForm={this.toggleEnableForm}/>
      )
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
