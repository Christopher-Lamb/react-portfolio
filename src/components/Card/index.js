import React from "react";

function Card(props) {
  return (
    <div
      className={`${props.className}`}
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
