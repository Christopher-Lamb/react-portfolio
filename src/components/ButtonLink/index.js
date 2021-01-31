import React from "react";

function ButtonLink(props) {
  return (
    <a href={`/${props.href}`}>
      <button className={`btn-${props.href}`}>{props.children}</button>
    </a>
  );
}

export default ButtonLink;
