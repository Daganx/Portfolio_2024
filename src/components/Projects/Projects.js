import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import "./Projects.css";
import projectsData from "../../data/projects.json";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

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
        projects={projects}
      />

      <section
        className={`projects-section ${activeProject !== null ? "blur" : ""}`}
        id="projects-section"
      >
        {projects.map((project) => (
          <article
            key={project.id}
            className={`project-container ${
              activeProject === project.id ? "active" : ""
            }`}
            onClick={() => handleOpenModal(project.id)}
          >
            <h2>{project.title}</h2>
          </article>
        ))}
      </section>
    </>
  );
}
