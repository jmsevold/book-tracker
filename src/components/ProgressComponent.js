import React, { Component } from 'react';

class ProgressComponent extends Component{
  constructor(props,context){
    super(props,context);
    this.state = {
      width: ''
    }
    this.handleStyleChange = this.handleStyleChange.bind(this)
  } 

  handleStyleChange(e){
    const width = e.target.value;
    this.setState({
      width
    });
  }

  render(){
    return(
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>
          <span className="sr-only">70% Complete</span>
        </div>
        <input type="text" className="form-control input-md" onChange={this.handleStyleChange}/>
        fuck you
      </div>
    );
  }
}

export default ProgressComponent;

