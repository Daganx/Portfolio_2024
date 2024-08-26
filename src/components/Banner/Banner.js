import React, { useState, useMemo, useCallback } from "react";
import Avatar from "../Avatar/Avatar";
import Bicycle from "../Bicycle/Bicycle";
import ReactLogo from "../../assets/images/reactLogo.svg";
import JavascriptLogo from "../../assets/images/jsLogo.svg";
import NodeLogo from "../../assets/images/nodeLogo.svg";
import GithubLogo from "../../assets/images/githubLogo.svg";
import BordeauxVideo from "../../assets/videos/bordeauxBackground.mp4";
import CurvedArrow from "../../assets/images/curvedArrow.svg";
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
    <section className={`hero-banner ${showVideo ? "video-active" : ""}`}>
      {showVideo && (
        <video className="background-video" autoPlay loop muted playsInline>
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
          <img src={CurvedArrow} className="side-logo curved-arrow" loading="lazy" />
        </aside>
      </div>
      <Bicycle />
    </section>
  );
}
