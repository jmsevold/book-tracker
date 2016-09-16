import React from 'react';
import {Link} from 'react-router';

const Header = () => {
  return(
    <div className="App-header">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 text-center">
            <Link to="/"><h2>Welcome to Book Tracker!</h2></Link>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Header;
