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
  console.log(formData)
  return (
    <div className="formContainer">
      <form className="form">
        <input name="firstName" type="text" onChange={addText} value={formData.firstName}></input>
        <input name="lastName" type="text" onChange={addText} value={formData.lastName}></input>
        <input name="phone" type="text" onChange={addText} value={formData.phone}></input>
        <input name="email" type="text" onChange={addText} value={formData.email}></input>
        <input name="comment" type="text" onChange={addText} value={formData.comment}></input>
      </form>
    </div>
  );
}
