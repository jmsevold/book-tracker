import React from 'react';
import {Link} from 'react-router';


class StartPage extends React.Component{
  constructor(props,context){
    super(props,context);
  }

  render(){
    return(
      <div id="book-container">
        <div className="container">
          <div className="row">
           <Link to="/book-form">Book Form</Link><br/>
           <Link to="/my-books">My Books</Link>
          </div>
        </div>
      </div>
    );
  }
}


export default StartPage;
