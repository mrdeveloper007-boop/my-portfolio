import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const year = new Date().getFullYear();
  return (
    <Fade bottom duration={1000} distance="5px">
      <footer className={isDark ? "footer-div dark" : "footer-div"}>
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">AQ</span>
            <div className="footer-brand-text">
              <strong>Abdul Qadeer</strong>
              <span>Shopify Full Stack Developer · Lahore, PK</span>
            </div>
          </div>
          <p className="footer-meta">
            © {year} Abdul Qadeer · Built with React · Designed &amp; coded
            with care.
          </p>
        </div>
      </footer>
    </Fade>
  );
}
