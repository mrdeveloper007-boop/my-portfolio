import React from "react";
import "./TalkCard.scss";

export default function TalkCard({talkDetails}) {
  return (
    <div>
      <div className="container">
        <div
          className={
            talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
          }
        >
          <div className="diagonal-fill"></div>
          <div className="talk-card-title">{talkDetails.title}</div>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

          <div className="card-footer-button-div">
          <a href="#contact" className="talk-button"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </a>

          <a href="#projects" className="talk-button"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}
