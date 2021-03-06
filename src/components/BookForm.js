import React from 'react';

const BookForm = (props) =>{
  return(
    <div className="col-md-7 col-md-push-3">
      <p id="sub-headline-text" className="text-center">What book are you reading?</p>
      <input type="text" placeholder="" className="form-control input-md" onChange={props.handleTextChange}/>
      <button id="find-book-button" className='btn btn-success' onClick={props.handleButtonClick}>Find Book</button>
    </div>
  );
}

export default BookForm;
