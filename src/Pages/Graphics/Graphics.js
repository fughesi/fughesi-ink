import React, { useState } from "react";
import Portfolio from "../../components/Portfolio/Portfolio";
import BackToTop from "../../components/BackToTop/BackToTop";

export default function Graphics() {
  // state variables
  const [top, setTop] = useState(false);

  //back to the top of the page when clicked
  function pageup() {
    console.log("clicked");
      return setTop((i) => !i);
    }
    
  return (
    <div>
      <Portfolio top={top} />
      <BackToTop handleClick={pageup} top={top} />
    </div>
  );
}
