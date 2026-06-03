import React, {useContext} from "react";
import "./ClientLogosMarquee.scss";
import {Fade} from "react-reveal";
import {clientLogosMarquee} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function ClientLogosMarquee() {
  const {isDark} = useContext(StyleContext);
  if (!clientLogosMarquee.display) return null;

  // Duplicate the clients array so the marquee loops seamlessly
  const loop = [...clientLogosMarquee.clients, ...clientLogosMarquee.clients];

  return (
    <Fade bottom duration={1000} distance="20px">
      <section
        id="clients"
        className={isDark ? "clients-marquee dark" : "clients-marquee"}
      >
        <h3 className={isDark ? "clients-title dark" : "clients-title"}>
          {clientLogosMarquee.title}
        </h3>
        <div className="clients-marquee-track-wrap">
          <div className="clients-marquee-track">
            {loop.map((client, i) => (
              <a
                key={i}
                href={client.url}
                target="_blank"
                rel="noreferrer"
                className="client-logo-item"
                aria-label={client.name}
              >
                <img src={client.logo} alt={client.name} />
                <span className="client-logo-name">{client.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Fade>
  );
}
