import React, { Component } from 'react';
import '../App.css';
import Header from '../components/common/Header'
import {Link} from 'react-router';


class App extends Component {
  constructor(props,context){
    super(props,context);
  }

  render() {
    return (
      <div className="App">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
