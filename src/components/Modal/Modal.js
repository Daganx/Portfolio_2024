import React from "react";
import closeIcon from "../../assets/images/closeIcon.svg";
import "./Modal.css";

export default function Modal({ activeProject, modalActive, handleCloseModal }) {
  return (
    <>
      <div className={`modal-overlay ${activeProject !== null ? "active" : ""}`} />
      <div className={`modal-content ${modalActive ? "active" : ""}`}>
        <img src={closeIcon} className="close-button" onClick={handleCloseModal} alt="Close icon" />
        <p>PROJET #{activeProject + 1}</p>
      </div>
    </>
  );
}
