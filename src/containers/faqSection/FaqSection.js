import React, {useContext, useState} from "react";
import {Fade} from "react-reveal";
import "./FaqSection.scss";
import {faqSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

function FaqItem({item, isOpen, onToggle, isDark}) {
  return (
    <div className={`faq-item${isOpen ? " open" : ""}${isDark ? " dark" : ""}`}>
      <button
        type="button"
        className="faq-q"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="faq-q-text">{item.q}</span>
        <span className="faq-q-icon" aria-hidden="true">
          <i className={isOpen ? "fas fa-minus" : "fas fa-plus"} />
        </span>
      </button>
      <div className="faq-a-wrap">
        <p className="faq-a">{item.a}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const {isDark} = useContext(StyleContext);
  const [openIdx, setOpenIdx] = useState(0);
  if (!faqSection.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <section
        id="faq"
        className={isDark ? "faq-section dark" : "faq-section"}
      >
        <div className="faq-header">
          <h2 className={isDark ? "faq-title dark" : "faq-title"}>
            {faqSection.title}
          </h2>
          <p className={isDark ? "faq-sub dark" : "faq-sub"}>
            {faqSection.subtitle}
          </p>
        </div>

        <div className="faq-list">
          {faqSection.items.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              isDark={isDark}
            />
          ))}
        </div>
      </section>
    </Fade>
  );
}
