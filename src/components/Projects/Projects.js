import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./Projects.css";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  const handleOpenModal = (projectId) => {
    setActiveProject(projectId);

    setTimeout(() => {
      setModalActive(true);
    }, 50);
  };

  const handleCloseModal = () => {
    setModalActive(false);

    setTimeout(() => {
      setActiveProject(null);
    }, 800);
  };

  return (
    <>
      <Modal
        activeProject={activeProject}
        modalActive={modalActive}
        handleCloseModal={handleCloseModal}
      />

      <section
        className={`projects-section ${activeProject !== null ? "blur" : ""}`}
        id="projects-section"
      >
        {["#1", "#2", "#3"].map((project, index) => (
          <article
            key={index}
            className={`project-container ${
              activeProject === index ? "active" : ""
            }`}
            onClick={() => handleOpenModal(index)}
          >
            <h2>PROJET {project}</h2>
          </article>
        ))}
      </section>
    </>
  );
}
