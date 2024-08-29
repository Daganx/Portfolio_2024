import React from "react";
import GithubLogoBlack from "../../assets/images/githubLogoBlack.svg";
import LinkedinLogoBlack from "../../assets/images/linkedinLogoBlack.svg";
import TwitterLogoBlack from "../../assets/images/twitterLogoBlack.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://www.github.com/Daganx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GithubLogoBlack} alt="" className="logo-footer" />
      </a>
      <a
        href="https://www.linkedin.com/in/letotdagan/"
        target="_Blank"
        rel="noopener noreferrer"
      >
        <img src={LinkedinLogoBlack} alt="" className="logo-footer" />
      </a>
      <a
        href="https://www.x.com/d4g4nD3v"
        target="_Blank"
        rel="noopener noreferrer"
      >
        <img src={TwitterLogoBlack} alt="" className="logo-footer" />
      </a>
    </footer>
  );
}
