import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  // state variables
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    comment: "",
  });

  // keep the state of the form
  function addText(event) {
    const { name, value } = event.target;
    setFormData((i) => ({
      ...i,
      [name]: value,
    }));
  }
  console.log(formData);

  return (
    <>
      <div className="formContainer">
        <form className="form" id="form">
          <input
            name="firstName"
            type="text"
            onChange={addText}
            className="firstname"
            value={formData.firstName}
            placeholder="First Name"
          ></input>
          <input
            name="lastName"
            type="text"
            onChange={addText}
            className="lastname"
            value={formData.lastName}
            placeholder="Last Name"
          ></input>
          <input
            name="phone"
            type="text"
            onChange={addText}
            className="phone"
            value={formData.phone}
            placeholder="Phone Number"
          ></input>
          <input
            name="email"
            type="text"
            onChange={addText}
            className="email"
            value={formData.email}
            placeholder="Email"
          ></input>
          <textarea
            name="comment"
            type="textarea"
            onChange={addText}
            className="comment"
            value={formData.comment}
            placeholder="Comment"
          ></textarea>
        </form>
      </div>
    </>
  );
}
