import React, { useState, useMemo, useCallback } from "react";
import Avatar from "../Avatar/Avatar";
import Bicycle from "../Bicycle/Bicycle";
import ReactLogo from "../../assets/images/reactLogo.svg";
import JavascriptLogo from "../../assets/images/jsLogo.svg";
import NodeLogo from "../../assets/images/nodeLogo.svg";
import GithubLogo from "../../assets/images/githubLogo.svg";
import LinkedinLogo from "../../assets/images/linkedinLogo.svg";
import TwitterLogo from "../../assets/images/twitterLogo.svg";
import BordeauxVideo from "../../assets/videos/bordeauxBackground.mp4";
import "./Banner.css";

export default function Banner() {
  const [showVideo, setShowVideo] = useState(false);
  const [showGithubImage, setShowGithubImage] = useState(false);

  const name = "DAGAN.LETOT";
  // Use of useMemo to optimize the calcul
  const renderedName = useMemo(
    () =>
      name.split("").map((char, index) => (
        <span key={index} style={{ "--index": index }}>
          {char}
        </span>
      )),
    [name]
  );
  // Use of useCallback for Events Handler
  const handleGithubClick = useCallback(() => {
    setShowGithubImage((prev) => !prev);
  }, []);

  const handleAvatarClick = useCallback(() => {
    setShowGithubImage(false);
  }, []);

  return (
    <section
      id="hero-banner"
      className={`hero-banner ${showVideo ? "video-active" : ""}`}
    >
      {showVideo && (
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={BordeauxVideo} type="video/mp4" />
        </video>
      )}
      <div className="text-avatar-container">
        <article className="text-container">
          <h1>{renderedName}</h1>
          <h2>Front-End Développeur _</h2>
          <h5>
            Développeur Junior passionné de Design,
            <br />
            je recherche un poste en tant que FrontDev.
          </h5>
          <div className="text-logo-container">
            <a
              href="https://www.github.com/Daganx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubLogo} alt="" className="logo-presentation" />
            </a>
            <a
              href="https://www.linkedin.com/in/letotdagan/"
              target="_Blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinLogo} alt="" className="logo-presentation" />
            </a>
            <a
              href="https://www.x.com/d4g4nD3v"
              target="_Blank"
              rel="noopener noreferrer"
            >
              <img src={TwitterLogo} alt="" className="logo-presentation" />
            </a>
          </div>
          <div className="text-info">
            <h3
              onMouseEnter={() => setShowVideo(true)}
              onMouseLeave={() => setShowVideo(false)}
            >
              Basé à<br /> Bordeaux (33)
            </h3>
            <h4>
              Disponible dans <br /> toute la France
            </h4>
          </div>
        </article>
        <Avatar
          showGithubImage={showGithubImage}
          toggleGithubImage={handleAvatarClick}
        />
        <aside className="logo-container">
          <img
            src={ReactLogo}
            alt="Logo React"
            className="side-logo"
            loading="lazy"
          />
          <img
            src={JavascriptLogo}
            alt="Logo JavaScript"
            className="side-logo"
            loading="lazy"
          />
          <img
            src={NodeLogo}
            alt="Logo Node.js"
            className="side-logo"
            loading="lazy"
          />
          <img
            src={GithubLogo}
            alt="Logo GitHub"
            className="side-logo github-logo"
            onClick={handleGithubClick}
            loading="lazy"
          />
        </aside>
      </div>
      <Bicycle />
    </section>
  );
}
