import React from "react";
import ContactBg from "../../assets/images/contactMe.svg";
import "./Contact.css";
import Form from "../Form/Form";

export default function Contact() {
  return (
    <section className="contact-container" id="contact-section">
      <img className="contact-background" src={ContactBg} alt="" />
      <Form />
    </section>
  );
}
