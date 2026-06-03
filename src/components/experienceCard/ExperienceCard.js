import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  return (
    <div className={isDark ? "exp-card dark" : "exp-card"}>
      <div className="exp-card-head">
        <div className="exp-logo-wrap">
          <img
            src={cardInfo.companylogo}
            alt={cardInfo.company}
            className="exp-logo"
          />
        </div>
        <div className="exp-meta">
          <span className="exp-company">{cardInfo.company}</span>
          <span className="exp-date">{cardInfo.date}</span>
        </div>
      </div>

      <h4 className="exp-role">{cardInfo.role}</h4>
      <p className="exp-desc">{cardInfo.desc}</p>

      {cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
        <ul className="exp-bullets">
          {cardInfo.descBullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
