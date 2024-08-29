import React from "react";
import CloseIcon from "../../assets/images/closeIcon.svg";
import ProjetArtGallery from "../../assets/images/modal/projetArtGallery.svg";
import SymfonyLogo from "../../assets/images/modal/symfonyLogo.svg";
import JsLogo from "../../assets/images/modal/javascriptLogo.svg";
import ComposerLogo from "../../assets/images/modal/composerLogo.svg";
import "./Modal.css";

export default function Modal({
  activeProject,
  modalActive,
  handleCloseModal,
}) {
  return (
    <>
      <div
        className={`modal-overlay ${activeProject !== null ? "active" : ""}`}
      />
      <section className={`modal-content ${modalActive ? "active" : ""}`}>
        <img
          src={CloseIcon}
          className="close-button"
          onClick={handleCloseModal}
          alt="Close icon"
        />
        <section className="modal-content-left">
          <h2>#PROJET 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            dolor nam quam, rerum temporibus commodi eveniet sint nemo id culpa
            quo, ab doloremque. Magni beatae incidunt maiores animi nulla
            veniam. Eius deleniti rem fugit minus officiis ea exercitationem
            dolorum mollitia officia voluptatum asperiores sit veniam, nulla non
            placeat dignissimos est molestias odit optio recusandae ad provident
            inventore voluptatibus maiores.
          </p>
          <p className="modal-techno">TECHNOLOGIES UTILISÉES</p>
          <div className="techno-container">
            <img className="modal-techno-img" src={SymfonyLogo} alt=""></img>
            <img className="modal-techno-img" src={JsLogo} alt=""></img>
            <img className="modal-techno-img" src={ComposerLogo} alt=""></img>
          </div>
        </section>
        <div className="modal-content-right">
          <img src={ProjetArtGallery} alt=""></img>
        </div>
      </section>
    </>
  );
}
