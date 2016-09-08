import React, { Component } from 'react';
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
          <div className="container">
            <div className="row">
              <div className="col-xs-12 text-center">
                <Link to="/"><h2>Welcome to Book Tracker!</h2></Link>
              </div>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
