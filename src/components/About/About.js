import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return <div>About</div>;
}
