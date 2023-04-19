import React from "react";

export default function ShipCard(props) {

    
  return <div>
    <div className = 'card'>
      <p>Name: {props.name}</p>
      <br></br>
      <p>Model: {props.model}</p>
    </div>
  </div>;
}
