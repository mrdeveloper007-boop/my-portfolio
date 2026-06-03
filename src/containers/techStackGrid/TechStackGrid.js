import React, {useContext} from "react";
import "./TechStackGrid.scss";
import {Fade} from "react-reveal";
import {techStackGrid} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function TechStackGrid() {
  const {isDark} = useContext(StyleContext);
  if (!techStackGrid.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <section
        id="tech-stack"
        className={isDark ? "tech-grid-section dark" : "tech-grid-section"}
      >
        <div className="tech-grid-header">
          <h2 className={isDark ? "tech-grid-title dark" : "tech-grid-title"}>
            {techStackGrid.title}
          </h2>
          <p className={isDark ? "tech-grid-sub dark" : "tech-grid-sub"}>
            {techStackGrid.subtitle}
          </p>
        </div>

        <div className="tech-grid-columns">
          {techStackGrid.columns.map((col, i) => (
            <div
              key={i}
              className={isDark ? "tech-grid-card dark" : "tech-grid-card"}
            >
              <div className="tech-grid-card-head">
                <span className="tech-grid-card-icon">
                  <i className={col.icon} />
                </span>
                <h3 className="tech-grid-card-title">{col.label}</h3>
              </div>
              <ul className="tech-grid-stack">
                {col.stack.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Fade>
  );
}
