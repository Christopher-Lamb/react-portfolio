import React from "react";

function Card(props) {
  return (
    <div style={({ width: `${props.width}` }, { height: `${props.height}` })}>
      
      {props.children}
    </div>
  );
}

export default Card;
