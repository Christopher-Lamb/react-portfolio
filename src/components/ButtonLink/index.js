import React from "react";

function ButtonLink(props) {
  return (
    <a href={`/${props.href}`} id={props.id}>
      <button className={`${props.className}`}>{props.children}</button>
    </a>
  );
}

export default ButtonLink;
