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
        <h2>Realistically, how many minutes can you commit to reading per day? Step away from the computer, and see how many pages you can read in that duration. That should be your daily goal.</h2>
        
        <div className="container-fluid">
          <label>Title:</label>
          <input type="text" className="form-control" onChange={this.handleTitleChange}/>
        
        
          <label>Daily Goal:</label>
          <input type="text" className="form-control" onChange={this.handleDailyGoalChange}/>
        
          <label>Starting Page</label>
          <input type="text" className="form-control" onChange={this.handleStartingPageChange}/>
        
          <label>Total Pages</label>
          <input type="text" className="form-control" onChange={this.handleTotalPageChange}/>
        </div>
        <button className="btn btn-success" onClick={this.handleCheckState}>Submit</button>
      </div>
    );
 }
}

export default BookForm;

 