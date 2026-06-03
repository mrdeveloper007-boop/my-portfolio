import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

function HeroCodeCard({isDark}) {
  return (
    <div className={isDark ? "code-card dark" : "code-card"}>
      <div className="code-card-titlebar">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        <span className="code-card-filename">shopify-function.ts</span>
      </div>
      <pre className="code-card-body">
        <span className="ln">1</span>
        <span>
          <span className="kw">import</span> {"{ "}
          <span className="id">RunInput</span>,{" "}
          <span className="id">FunctionRunResult</span>
          {" }"} <span className="kw">from</span>{" "}
          <span className="str">"../generated/api"</span>;
        </span>

        <span className="ln">2</span>
        <span>{" "}</span>

        <span className="ln">3</span>
        <span>
          <span className="kw">export function</span>{" "}
          <span className="fn">run</span>(
          <span className="id">input</span>: <span className="ty">RunInput</span>
          ): <span className="ty">FunctionRunResult</span> {"{"}
        </span>

        <span className="ln">4</span>
        <span>
          {"  "}
          <span className="kw">const</span> discounts ={" "}
          <span className="id">input</span>.cart.lines
        </span>

        <span className="ln">5</span>
        <span>
          {"    "}.<span className="fn">filter</span>(({"l"}) =&gt; l.quantity &gt;= <span className="num">3</span>)
        </span>

        <span className="ln">6</span>
        <span>
          {"    "}.<span className="fn">map</span>(({"l"}) =&gt; ({"{"}
        </span>

        <span className="ln">7</span>
        <span>
          {"      "}targets: [{"{"} <span className="id">cartLine</span>: {"{"} id: l.id {"} }"}],
        </span>

        <span className="ln">8</span>
        <span>
          {"      "}value: {"{"} percentage: {"{"} value: <span className="str">"15.0"</span> {"} }"}
        </span>

        <span className="ln">9</span>
        <span>{"    "}{"}"}));</span>

        <span className="ln">10</span>
        <span>{" "}</span>

        <span className="ln">11</span>
        <span>
          {"  "}<span className="kw">return</span> {"{"} discounts, discountApplicationStrategy: <span className="str">"FIRST"</span> {"}"};
        </span>

        <span className="ln">12</span>
        <span>{"}"}</span>
      </pre>
      <div className="code-card-footer">
        <span className="code-card-badge">
          <i className="fab fa-shopify" /> Shopify Function
        </span>
        <span className="code-card-badge muted">TypeScript</span>
      </div>
    </div>
  );
}

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className={isDark ? "greet-main dark" : "greet-main"} id="greeting">
        <div className="hero-bg-orb" aria-hidden="true" />
        <div className="hero-bg-grain" aria-hidden="true" />

        <div className="greeting-main">
          <div className="greeting-text-div">
            {greeting.badges && (
              <div className="greeting-badges">
                <span className="status-pill">{greeting.badges.status}</span>
                <span className="location-chip">
                  📍 {greeting.badges.location}
                </span>
              </div>
            )}

            {greeting.tagline && (
              <p className={isDark ? "greeting-tagline dark" : "greeting-tagline"}>
                {greeting.tagline}
              </p>
            )}

            <h1
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
            >
              {greeting.title}{" "}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>

            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >
              {greeting.subTitle}
            </p>

            <div className="greeting-tech-row" aria-hidden="true">
              <span title="Shopify">
                <i className="fab fa-shopify" />
              </span>
              <span title="Liquid">
                <i className="fas fa-code" />
              </span>
              <span title="React">
                <i className="fab fa-react" />
              </span>
              <span title="Node.js">
                <i className="fab fa-node" />
              </span>
              <span title="TypeScript">
                <i className="fas fa-file-code" />
              </span>
              <span title="GraphQL">
                <i className="fas fa-project-diagram" />
              </span>
              <span title="Git">
                <i className="fab fa-git-alt" />
              </span>
            </div>

            <div id="resume" className="empty-div"></div>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Hire me" href="#contact" />
              {greeting.resumeLink && (
                <a
                  href={require("./Resume.pdf")}
                  download="Abdul-Qadeer-Shopify-Developer.pdf"
                  className="download-link-button"
                >
                  <Button text="Download resume" />
                </a>
              )}
            </div>
          </div>

          <div className="greeting-image-div">
            <HeroCodeCard isDark={isDark} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
