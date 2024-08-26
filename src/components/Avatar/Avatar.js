import React, { useState, useEffect } from "react";
import avatar from "../../assets/images/cuteavatar.svg";
import avatarSmile from "../../assets/images/smileavatar.svg";
import githubImage from "../../assets/images/githubImage.svg";
import "./Avatar.css";

export default function Avatar({ showGithubImage, toggleGithubImage }) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsHovered(true);
    const timer = setTimeout(() => {
      setIsHovered(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    toggleGithubImage();
  };

  return (
    <img
      src={showGithubImage ? githubImage : isHovered ? avatarSmile : avatar}
      className="avatar"
      alt="Avatar"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.3s ease",
      }}
    />
  );
}
