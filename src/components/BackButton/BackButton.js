import React from "react";
import { Link } from "react-router-dom";
import "./BackButton.css";

export default function BackButton() {
  return (
    <div className="backButtonMain">
      <Link to="/graphics" className="backBTN">
        BACK
      </Link>
    </div>
  );
}
