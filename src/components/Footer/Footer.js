import React from "react";
import GithubLogo from "../../assets/images/githubLogo.svg";
import LinkedinLogo from "../../assets/images/linkedinLogo.svg";
import TwitterLogo from "../../assets/images/twitterLogo.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <a
              href="https://www.github.com/Daganx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubLogo} alt="" className="logo-footer" />
            </a>
            <a
              href="https://www.linkedin.com/in/letotdagan/"
              target="_Blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinLogo} alt="" className="logo-footer" />
            </a>
            <a
              href="https://www.x.com/d4g4nD3v"
              target="_Blank"
              rel="noopener noreferrer"
            >
              <img src={TwitterLogo} alt="" className="logo-footer" />
            </a>
    </section>
  );
}
