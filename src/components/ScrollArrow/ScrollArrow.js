import React, { useEffect, useState } from "react";
import "./ScrollArrow.css";

export default function ScrollArrow({ style }) {
  return (
    <>
      <div className="box" style={style}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
