import React, { useEffect } from "react";
import Form from "../../components/Form/Form";
import "./Contact.css";

export default function Contact({ nav }) {
  // window to start at top of page on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={nav ? "contactMain blur" : "contactMain"}>
      <Form />
    </main>
  );
}
