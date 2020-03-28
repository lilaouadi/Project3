import React from "react";
import { MediaBox } from 'react-materialize';



function MemberCard(props) {
    return (
   
      <div className="col s6 m3 l3">
       <div className="card black ">
        <div className=" card-image " >
        
        <img className="circle " width="200" height="200"  src={props.image}></img>
        
        </div>
  
        <div className="content black white-text ">
          <ul>
        
            <li>
              <strong>Name:</strong>  {props.lastName}
            </li>
            <li>
              <strong>Constituency:</strong> {props.constituency}
            </li>
         

      
          </ul>
        </div>
        <div className="card-action">
         
          {props.search}

        </div>


      </div>
      </div>
   
  
    );
  }
  
  export default MemberCard;
  