import React from 'react';

const SecondForm = (props) =>{
  return(
    <div id="book-container">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-md-push-3">
            <p id="sub-headline-text" className="text-center">How many pages will you read per day?</p>
            <input type="text" placeholder="" className="form-control input-md" onChange={props.handleDailyPages}/>
            <input type="text" placeholder="" className="form-control input-md" onChange={props.startingPage}/>
            <button className='btn btn-success submit-button' onClick={props.handleSubmitBook}>Submit</button>
            <button></button>
          </div>
        </div>
        <div>
          <img alt="book thumbnail" src={book.thumbnail}></img>
          <p>{book.title}</p>
         </div> 
      </div>
    </div> 
  );
}



export default SecondForm;
