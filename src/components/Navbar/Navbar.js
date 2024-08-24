import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <p className="nav-name">/ Dagan.</p>
      <ul>
        <li className="nav-links">
          <a>À PROPOS</a>
          <a>PROJETS</a>
          <a>EMAIL ME</a>
        </li>
      </ul>
    </nav>
  );
}
