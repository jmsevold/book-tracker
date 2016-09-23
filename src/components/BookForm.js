import React from 'react';

const BookForm = (props) =>{
  return(
    <div id="book-container">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-md-push-3">
            <p id="sub-headline-text" className="text-center">What book are you reading?</p>
            <input type="text" placeholder="" className="form-control input-md" onChange={props.handleTextChange}/>
            <button id="find-book-button" className='btn btn-success' onClick={props.handleFindBook}>Find Book</button>
          </div>
        </div>
      </div>
    </div> 
  );
}



export default BookForm;
