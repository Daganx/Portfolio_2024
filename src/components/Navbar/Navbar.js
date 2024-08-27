import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <Link to="hero-banner" smooth={true} duration={500} className="nav-name">
        / Portfolio.™
      </Link>
      <ul>
        <li className="nav-links">
          <Link to="projects-section" smooth={true} duration={500}>
            PROJETS
          </Link>
          <Link to="contact-section" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
