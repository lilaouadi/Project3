import React from "react";

function Jumbotron({ children }) {
  return (
  

    <div className="container">
                
    <div className="row">
        <div className="col s12 m6 l8">
        <div className="card-panel black white-text center">
           <h2>Members Of The 9th Parliament of Zimbabwe</h2>
        </div>
        </div>
    </div>
    {children}
    </div>
 





  );
}

export default Jumbotron;
