import React from 'react';
import * as googleBooksAPI from '../utils/googleBooksAPI';



class StartPage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {
     book: ''
    };
  }
  

  handleButtonClick(){
    const book = this.state.book;
    console.log('hi')
    googleBooksAPI.getBookInfo(book)
    .then(data => {
      console.log(data);
    })
  }

  handleTextChange(e){
    let book = e.target.value;
    this.setState({
      book: book
    });
    console.log(this.state.book);
  }

  render(){
    return(
      <div>
      <p>What book are you reading?</p>
       <div className="col-md-7">
        <input type="text" placeholder="" className="form-control input-md" onChange={this.handleTextChange}/>
        <button className='btn-success' onClick={this.handleButtonClick}></button>
       </div>
      </div>
    );
  }
}


export default StartPage;











