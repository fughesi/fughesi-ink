import React from "react";
import "./Loading.css";

export default function Loading({element}) {
  return (
    <div className={`${element} loadPage`}>
      <h1>
        Loading
        <span className="elipse">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </h1>
    </div>
  );
}
