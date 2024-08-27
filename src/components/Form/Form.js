import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "./Form.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_rcgysxo", // Service ID
        "template_rd8x9w2", // Template ID
        data,
        "QNXHeYKYn-ezFuwra" // User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          reset();
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div className="form-group">
        <label htmlFor="firstName">Prénom</label>
        <input
          type="text"
          id="firstName"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && <span>Ce champ est requis</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          })}
        />
        {errors.email && <span>Veuillez entrer un email valide</span>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Téléphone</label>
        <input
          type="tel"
          id="phone"
          {...register("phone", {
            required: true,
            pattern: /^\d{10}$/,
          })}
        />
        {errors.phone && (
          <span>Veuillez entrer un numéro de téléphone valide</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" {...register("message", { required: true })} />
        {errors.message && <span>Ce champ est requis</span>}
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
}
