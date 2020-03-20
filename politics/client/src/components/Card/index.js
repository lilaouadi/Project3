import React from "./node_modules/react";

function MemberCard(props) {
  return (

    <div className="col s4 m4 l3">
     <div className="card black">>


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
    </div>
  );
}

export default MemberCard;
