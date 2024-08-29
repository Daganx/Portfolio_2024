import React from "react";
import CloseIcon from "../../assets/images/closeIcon.svg";
import "./Modal.css";

export default function Modal({
  activeProject,
  modalActive,
  handleCloseModal,
  projects,
}) {
  const project = projects.find((proj) => proj.id === activeProject);

  if (!project) return null;

  return (
    <>
      <div
        className={`modal-overlay ${modalActive ? "active" : ""}`}
        onClick={handleCloseModal}
      />
      <section className={`modal-content ${modalActive ? "active" : ""}`}>
        <img
          src={CloseIcon}
          className="close-button"
          onClick={handleCloseModal}
          alt="Close icon"
        />
        <section className="modal-content-left">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p className="modal-techno">TECHNOLOGIES UTILISÉES</p>
          <div className="techno-container">
            {project.technologies.map((tech, index) => (
              <img
                key={index}
                className="modal-techno-img"
                src={require(`../../assets/images/modal/${tech}`)}
                alt=""
              />
            ))}
          </div>
        </section>
        <div className="modal-content-right">
          <img
            src={require(`../../assets/images/modal/${project.image}`)}
            alt=""
          />
        </div>
      </section>
    </>
  );
}
