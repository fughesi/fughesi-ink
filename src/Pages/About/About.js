import React, { useEffect } from "react";
import Construction from "../Construction/Construction";

export default function About() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return <Construction />;
}
