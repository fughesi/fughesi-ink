import React, { useEffect } from "react";
import Form from "../../components/form/Form";
import "./ContactPage.css";

export default function Contact({ blur }) {
  // window to start at top of page on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={blur ? "contactMain blur" : "contactMain"}>
      <h1>Contact form</h1>
      <Form />
      <div className="whatsApp">
          <a
            href="https://wa.me/message/PKTZG4VTREDRN1"
            target="_blank"
            rel="noreferrer noopener"
            className="WAlink"
          >
            Message via WhatsApp
          </a>
        </div>
    </main>
  );
}
