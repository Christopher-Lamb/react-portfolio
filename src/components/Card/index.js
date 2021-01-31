import React from "react";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        width: `${props.width}%`,
        height: `${props.heightPx}px`,
        marginTop: `${props.marginTopPx}px`,
      }}
    >
      {props.children}
    </div>
  );
}

export default Card;
