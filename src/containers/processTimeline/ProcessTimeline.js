import React, {useContext} from "react";
import "./ProcessTimeline.scss";
import {Fade} from "react-reveal";
import {processTimeline} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function ProcessTimeline() {
  const {isDark} = useContext(StyleContext);
  if (!processTimeline.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <section
        id="process"
        className={isDark ? "process-section dark" : "process-section"}
      >
        <div className="process-header">
          <h2 className={isDark ? "process-title dark" : "process-title"}>
            {processTimeline.title}
          </h2>
          <p className={isDark ? "process-sub dark" : "process-sub"}>
            {processTimeline.subtitle}
          </p>
        </div>

        <div className="process-track">
          {processTimeline.steps.map((step, i) => (
            <div key={i} className="process-step">
              <div className="process-step-marker">
                <span className="process-step-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="process-step-icon">
                  <i className={step.icon} />
                </span>
              </div>
              <div className="process-step-body">
                <h4 className="process-step-label">{step.label}</h4>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fade>
  );
}
