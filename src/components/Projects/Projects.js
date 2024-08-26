import React, { useState, useRef, useEffect } from "react";

import Modal from "../Modal/Modal";
import "./Projects.css";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [modalActive, setModalActive] = useState(false); // Nouvel état pour gérer l'animation

  const handleOpenModal = (projectId) => {
    setActiveProject(projectId);

    setTimeout(() => {
      setModalActive(true);
    }, 50); // Délai court pour déclencher l'animation
  };

  const handleCloseModal = () => {
    setModalActive(false);

    setTimeout(() => {
      setActiveProject(null);
    }, 800); // Correspond à la durée de l'animation de fermeture
  };

  return (
    <>
      <Modal
        activeProject={activeProject}
        modalActive={modalActive}
        handleCloseModal={handleCloseModal}
      />

      <section className={`projects-section ${activeProject !== null ? "blur" : ""}`} id="projects-section">
        {["#1", "#2", "#3", "#4", "#5"].map((project, index) => (
          <article
            key={index}
            className={`project-container ${activeProject === index ? "active" : ""}`}
            onClick={() => handleOpenModal(index)}
          >
            <p>PROJET {project}</p>
          </article>
        ))}
      </section>
    </>
  );
}
