import React from "react";

export default function(props) {
  return (
    <div className={props.className} style={{
      position: "absolute",
      left: "50%",
      bottom: 0,
      width: "100%",
      height: `${props.height}px`,
      transform: "translateX(-50%)",
      zIndex: 0,
    }} />
  );
}
