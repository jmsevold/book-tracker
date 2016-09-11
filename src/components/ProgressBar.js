import React from 'react';

const ProgressBar = ({width}) => {
  return (  
    <div>    
     <div className="progress">
        <div className="progress-bar" 
             role="progressbar"  
             aria-valuenow="70" 
             aria-valuemin="0" 
             aria-valuemax="100" 
             style={{width: width}}
         >
          <span className="sr-only">{width} Complete</span>
        </div>
      </div> 
     {width}% done
    </div>
  );
}

export default ProgressBar;

