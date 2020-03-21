import React from "react";


function MemberCard(props) {
    return (
   
     
       <div className="card black">
        <div className="card-image">
          <img alt={props.name} src={props.image} />
         
        </div>
  
        <div className="content black white-text">
          <ul>
            <li>
              <strong>Name:</strong> {props.lastName}
            </li>
            <li>
              <strong>Constituency:</strong> {props.constituency}
            </li>
            <li>
              <strong>bio:</strong> {props.bio}
            </li>
          </ul>
        </div>
      </div>
      
   
  
    );
  }
  
  export default MemberCard;
  