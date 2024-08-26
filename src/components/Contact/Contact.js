import React from "react";
import contact from "../../assets/images/contactMe.svg";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container" id="contact-section">
      <img src={contact} alt="" />
    </div>
  );
}
