import React from 'react';
import * as googleBooksAPI from '../utils/googleBooksAPI';



class StartPage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {
     books: [],
     book: "",
     showLoadingSpinner: false
    };
  }


  handleButtonClick(){
    const book = this.state.book;
    this.setState({showLoadingSpinner: true})
    googleBooksAPI.bookSearch(book).then((res) => {
      if(res.hasOwnProperty("error")) {
        return null
      }
      else {
        let oldBookState = this.state.books;
        oldBookState.push(res)
        let newBookstate = oldBookState
        this.setState({books: newBookstate})
        this.setState({showLoadingSpinner: false})
      }
    })
  }

  handleTextChange(e){
    let book = e.target.value;
    this.setState({
      book: book
    });
  }

  renderFormOrList() {
    if(this.state.books.length > 0) {
      return (
        <div className="col-xs-3">
          {
            this.state.books.map((book, index) => {
              return (
                <div key={index}>
                  <img alt="book thumbnail" src={book.thumbnail}></img>
                  <p>{book.title}</p>
                </div>
              )
            })
          }
        </div>
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
