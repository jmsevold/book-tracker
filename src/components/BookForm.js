import React, { Component } from 'react';


class BookForm extends Component{
  constructor(props,context){
    super(props,context);
    this.state = {
      title: '',
      totalPages: 0,
      dailyGoal: 0,
      completionDate: '',
      startingPage: 0
    };
    this.handleTitleChange     = this.handleTitleChange.bind(this);
    this.handleTotalPageChange = this.handleTotalPageChange.bind(this);
    this.handleDailyGoalChange = this.handleDailyGoalChange.bind(this);
    this.handleStartingPageChange = this.handleStartingPageChange.bind(this);
    this.handleCheckState = this.handleCheckState.bind(this);
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
      Title: <input type="text" onChange={this.handleTitleChange}/><br/>
      Total pages: <input type="text" onChange={this.handleTotalPageChange}/><br/>
      Daily Goal: <input type="text" onChange={this.handleDailyGoalChange}/><br/>
      Completion Date: <input type="text"/><br/>
      Starting Page: <input type="text" onChange={this.handleStartingPageChange}/><br/>
      <button onClick={this.handleCheckState}>check state</button>
    </div>
  );
 }
}

export default BookForm;