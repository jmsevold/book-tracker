import React, { Component } from 'react';

class BookForm extends Component{
  constructor(props,context){
    super(props,context);
    this.state = {
      book: {
        title: '',
        totalPages: 0,
        dailyGoal: 0,
        completionDate: '',
        startingPage: 0
      }
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e, statekey) {
    const inputValue = e.target.value;
    this.setState({
      [statekey]: inputValue
    })
  }

  render(){
    return(
      <div>
        <h2>Realistically, how many minutes can you commit to reading per day? Step away from the computer, and see how many pages you can read in that duration. That should be your daily goal.</h2>
        <div className="container-fluid">
          <label>Title:</label>
          <input type="text" className="form-control" onChange={this.handleInput("title")}/>
          <label>Daily Goal:</label>
          <input type="text" className="form-control" onChange={this.handleInput("dailyGoal")}/>
          <label>Starting Page</label>
          <input type="text" className="form-control" onChange={this.handleInput("startingPage")}/>
          <label>Total Pages</label>
          <input type="text" className="form-control" onChange={this.handleInput("totalPages")}/>
        </div>
        <button className="btn btn-success" onClick={this.handleCheckState}>Submit</button>
      </div>
    );
 }
}

export default BookForm;
