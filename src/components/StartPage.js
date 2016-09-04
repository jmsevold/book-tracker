import React from 'react';



class StartPage extends React.Component{
  constructor(props,context){
    super(props,context);
  }

  render(){
    return(
      <div>
      <p>What book are you reading?</p>
       <div className="col-md-6">
        <input type="text" placeholder="" className="form-control input-md" required=""/>
       </div>
      </div>
    );
  }
}


export default StartPage;











