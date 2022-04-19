import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Form.css";

export default function Form() {
  // state variables
  const [state, handleSubmit] = useForm("xyyonaze");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    Message: "",
  });

  // keep the state of the form
  function addText(event) {
    const { name, value } = event.target;
    setFormData((i) => ({
      ...i,
      [name]: value,
    }));
  }

  // clear form data
  function clearData() {
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      Message: "",
    });
  }

  console.log(formData);

  return (
    <>
      <div className="formContainer">
        <form
          className="form"
          id="form"
          onSubmit={(e) => {
            // e.preventDefault();
            handleSubmit();
            clearData();
          }}
          action="https://formspree.io/f/xyyonaze"
          method="POST"
        >
          <input
            name="firstName"
            type="text"
            onChange={addText}
            className="firstname"
            value={formData.firstName}
            placeholder="First Name"
            required
          ></input>
          <ValidationError
            prefix="firstName"
            field="firstName"
            errors={state.errors}
          />
          <input
            name="lastName"
            type="text"
            onChange={addText}
            className="lastname"
            value={formData.lastName}
            placeholder="Last Name"
            required
          ></input>
          <ValidationError
            prefix="lastName"
            field="lastName"
            errors={state.errors}
          />
          <input
            name="phone"
            type="text"
            onChange={addText}
            className="phone"
            value={formData.phone}
            placeholder="Phone Number"
          ></input>
          <ValidationError prefix="phone" field="phone" errors={state.errors} />
          <input
            id="email"
            name="email"
            type="email"
            onChange={addText}
            className="email"
            value={formData.email}
            placeholder="Email"
            required
          ></input>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            name="Message"
            type="textarea"
            onChange={addText}
            className="comment"
            value={formData.comment}
            placeholder="Message"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
}
