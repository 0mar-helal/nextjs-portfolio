"use client";
import { useState } from "react";
import "./slide-card.css";
const SlideCard = ({ imageLink, demoLink, sourceCodeLink, techUsed }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="slide-card"
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{
        backgroundImage: `url(${imageLink})`,
        backgroundSize: "cover",
      }}
    >
      <div className={show ? "overlay show" : "overlay"}>
        <div className="website-links">
          <a href={demoLink} target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="slide-icon"
            >
              <path
                fillRule="evenodd"
                d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href={sourceCodeLink} target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="slide-icon"
            >
              <path
                fillRule="evenodd"
                d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div className="website-tech">
          {techUsed.map((item) => (
            <img key={item.id} src={item.image} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
