import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Link} from 'react-router';


class App extends Component {
  constructor(props,context){
    super(props,context);
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/"><h2>Welcome to Book Tracker!</h2></Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
