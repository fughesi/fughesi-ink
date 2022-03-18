import React, { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import Construction from "../Construction/Construction";
import "./Contact.css";

export default function Contact() {
  // state variables
  const [offsetY, setOffsetY] = useState(0);
  // callback function to get page location in Y axis
  const handleScroll = () => setOffsetY(window.pageYOffset);
  
  // parallax effect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // window to start at top of page on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Form />
    </div>
  );
}
