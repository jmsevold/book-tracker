import React from 'react';
import {Link} from 'react-router';


const StartPage = () => {
  return(
    <div>
      <p>This app will help you stay consistent in reading your books.</p>
      <Link to="/book-form"><button className="btn-success">Click here to begin</button></Link>
    </div>
  );
}

export default StartPage;