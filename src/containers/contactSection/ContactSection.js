import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./ContactSection.scss";
import {contactInfo, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function ContactSection() {
  const {isDark} = useContext(StyleContext);

  const channels = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: contactInfo.email_address,
      url: `mailto:${contactInfo.email_address}`,
      cta: "Send email"
    },
    {
      icon: "fab fa-whatsapp",
      label: "WhatsApp",
      value: contactInfo.number,
      url: socialMediaLinks.whatsapp,
      cta: "Open WhatsApp"
    },
    {
      icon: "fab fa-linkedin",
      label: "LinkedIn",
      value: "Abdul Qadeer",
      url: socialMediaLinks.linkedin,
      cta: "Visit profile"
    },
    {
      icon: "fab fa-github",
      label: "GitHub",
      value: "mrdeveloper007-boop",
      url: socialMediaLinks.github,
      cta: "View code"
    }
  ];

  return (
    <Fade bottom duration={1000} distance="20px">
      <section
        id="contact"
        className={isDark ? "contact-section dark" : "contact-section"}
      >
        <div className="contact-card">
          <div className="contact-header">
            <span className="status-pill">Open for new projects</span>
            <h2 className={isDark ? "contact-title dark" : "contact-title"}>
              {contactInfo.title}
            </h2>
            <p className={isDark ? "contact-sub dark" : "contact-sub"}>
              {contactInfo.subtitle}
            </p>
          </div>

          <div className="contact-channels">
            {channels.map((c, i) => (
              <a
                key={i}
                href={c.url}
                target={c.url.startsWith("http") ? "_blank" : undefined}
                rel={c.url.startsWith("http") ? "noreferrer" : undefined}
                className={isDark ? "contact-channel dark" : "contact-channel"}
              >
                <span className="contact-channel-icon">
                  <i className={c.icon} />
                </span>
                <div className="contact-channel-body">
                  <span className="contact-channel-label">{c.label}</span>
                  <span className="contact-channel-value">{c.value}</span>
                </div>
                <span className="contact-channel-cta">
                  {c.cta} <i className="fas fa-arrow-right" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Fade>
  );
}
