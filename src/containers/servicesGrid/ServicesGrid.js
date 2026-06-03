import React, {useContext} from "react";
import "./ServicesGrid.scss";
import {Fade} from "react-reveal";
import {servicesGrid} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function ServicesGrid() {
  const {isDark} = useContext(StyleContext);
  if (!servicesGrid.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <section
        id="services"
        className={isDark ? "services-section dark" : "services-section"}
      >
        <div className="services-header">
          <h2 className={isDark ? "services-title dark" : "services-title"}>
            {servicesGrid.title}
          </h2>
          <p className={isDark ? "services-sub dark" : "services-sub"}>
            {servicesGrid.subtitle}
          </p>
        </div>

        <div className="services-grid">
          {servicesGrid.services.map((svc, i) => (
            <a
              key={i}
              href="#contact"
              className={isDark ? "service-card dark" : "service-card"}
            >
              <span className="service-icon">
                <i className={svc.icon} />
              </span>
              <h3 className="service-card-title">{svc.title}</h3>
              <p className="service-card-desc">{svc.desc}</p>
              <span className="service-card-cta">
                Get in touch <i className="fas fa-arrow-right" />
              </span>
            </a>
          ))}
        </div>
      </section>
    </Fade>
  );
}
