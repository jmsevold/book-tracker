import React, { Component } from 'react';

/*
 <div className="form-group">
    <label>Title:</label>
    <input type="text" className="form-control" onChange={this.handleTitleChange}/>
  </div>
  <div className="form-group">
    <label>Daily Goal:</label>
    <input type="text" className="form-control" onChange={this.handleDailyGoalChange}/>
  </div>
  <div className="form-group">
    <label>Starting Page</label>
    <input type="text" className="form-control" onChange={this.handleStartingPageChange()}/>
  </div>
  <div className="form-group">
    <label>Total Pages</label>
    <input type="text" className="form-control" onChange={this.handleTotalPageChange()/}>
  </div>
  <button className="btn btn-default" onClick={this.handleCheckState}>Submit</button>

*/
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
    this.handleTitleChange        = this.handleTitleChange.bind(this);
    this.handleTotalPageChange    = this.handleTotalPageChange.bind(this);
    this.handleDailyGoalChange    = this.handleDailyGoalChange.bind(this);
    this.handleStartingPageChange = this.handleStartingPageChange.bind(this);
    this.handleCheckState         = this.handleCheckState.bind(this);
  }

  handleTitleChange(e){
    const title = e.target.value;
    this.setState({
      title
    });
  }

  handleTotalPageChange(e){
    const totalPages= e.target.value;
    this.setState({
      totalPages
    });
  }

  handleDailyGoalChange(e){
    const dailyGoal = e.target.value;
    this.setState({
      dailyGoal
    });
  }

  handleStartingPageChange(e){
    const startingPage = e.target.value;
    this.setState({
      startingPage
    });
  }

  handleCheckState(){
    console.log(this.state);
  }


  render(){
  return(
    <div>
    <p>Realistically, how many minutes can you commit to reading per day? Step away from the computer, and see how many pages you can read in that duration. That should be your daily goal.</p>
    
      Title: <input type="text" onChange={this.handleTitleChange}/><br/>
      Daily Goal: <input type="text" onChange={this.handleDailyGoalChange}/><br/>
      Starting Page: <input type="text" onChange={this.handleStartingPageChange}/><br/>
      Total Length: <input type="text" onChange={this.handleTotalPageChange}/><br/>
    <button className="btn btn-primary" onClick={this.handleCheckState}>check state</button>
    </div>
  );
 }
}

export default BookForm;

 