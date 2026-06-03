import React, {useEffect, useState} from "react";
import "./App.scss";
import {
  profile,
  hero,
  clients,
  services,
  apps,
  experience,
  stack,
  education,
  faqs,
  nav
} from "./data";

/* ------------------------------------------------------------------ */
/* Header — sticky, condenses on scroll                                */
/* ------------------------------------------------------------------ */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"aq-header" + (scrolled ? " is-scrolled" : "")}>
      <div className="aq-header-inner">
        <a href="#top" className="aq-mark" aria-label={profile.name}>
          <span className="aq-mark-badge">{profile.shortName}</span>
          <span className="aq-mark-name">
            {profile.name}
            <span className="aq-mark-dot">.</span>
          </span>
        </a>

        <nav className={"aq-nav" + (open ? " is-open" : "")}>
          {nav.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="aq-nav-cta"
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Hire me
          </a>
        </nav>

        <button
          className={"aq-burger" + (open ? " is-open" : "")}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="aq-hero" id="top">
      <div className="aq-hero-bg" aria-hidden="true">
        <div className="aq-hero-orb" />
        <div className="aq-hero-grid" />
      </div>

      <div className="aq-hero-inner">
        <div className="aq-hero-pills">
          <span className="aq-pill aq-pill-status">
            <span className="aq-pill-dot" />
            {profile.availability}
          </span>
          <span className="aq-pill">📍 {profile.location}</span>
        </div>

        <p className="aq-eyebrow">
          {profile.role} · {profile.tagline}
        </p>

        <h1 className="aq-hero-title">
          Hi, I&rsquo;m <span className="aq-name">{profile.name}</span>.<br />
          I build Shopify stores that{" "}
          <span className="aq-accent">ship revenue</span>.
        </h1>

        <p className="aq-hero-sub">{hero.pitch}</p>

        <div className="aq-hero-ctas">
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="aq-btn aq-btn-primary"
          >
            <i className="fab fa-whatsapp" />
            Start a project
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="aq-btn aq-btn-ghost"
          >
            <i className="fas fa-file-download" />
            Download CV
          </a>
        </div>

        <ul className="aq-hero-metrics">
          {hero.metrics.map(m => (
            <li key={m.label}>
              <span className="aq-metric-value">{m.value}</span>
              <span className="aq-metric-label">{m.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <CodeWindow />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Code window — premium visual instead of a stock illustration        */
/* ------------------------------------------------------------------ */
function CodeWindow() {
  return (
    <aside className="aq-code-window" aria-hidden="true">
      <div className="aq-code-bar">
        <span className="aq-code-dot r" />
        <span className="aq-code-dot y" />
        <span className="aq-code-dot g" />
        <span className="aq-code-file">discount.function.ts</span>
      </div>
      <pre className="aq-code-body">
        <code>
          <span className="ln">1</span>
          <span>
            <span className="kw">import</span> {"{ "}
            <span className="ty">RunInput</span>,{" "}
            <span className="ty">FunctionRunResult</span>
            {" }"} <span className="kw">from</span>{" "}
            <span className="str">"../generated/api"</span>;
          </span>
          <span className="ln">2</span>
          <span />
          <span className="ln">3</span>
          <span>
            <span className="kw">export function</span>{" "}
            <span className="fn">run</span>(
            <span className="id">input</span>:{" "}
            <span className="ty">RunInput</span>):{" "}
            <span className="ty">FunctionRunResult</span> {"{"}
          </span>
          <span className="ln">4</span>
          <span>
            {"  "}
            <span className="kw">const</span> discounts ={" "}
            <span className="id">input</span>.cart.lines
          </span>
          <span className="ln">5</span>
          <span>
            {"    "}.<span className="fn">filter</span>((l) =&gt; l.quantity
            &gt;= <span className="num">3</span>)
          </span>
          <span className="ln">6</span>
          <span>{"    "}.<span className="fn">map</span>((l) =&gt; ({"{"}</span>
          <span className="ln">7</span>
          <span>
            {"      "}targets: [{"{"} cartLine: {"{"} id: l.id {"} }"}],
          </span>
          <span className="ln">8</span>
          <span>
            {"      "}value: {"{"} percentage: {"{"} value:{" "}
            <span className="str">"15.0"</span> {"} }"}
          </span>
          <span className="ln">9</span>
          <span>{"    "}{"}"}));</span>
          <span className="ln">10</span>
          <span />
          <span className="ln">11</span>
          <span>
            {"  "}
            <span className="kw">return</span> {"{"} discounts,
            discountApplicationStrategy:{" "}
            <span className="str">"FIRST"</span> {"}"};
          </span>
          <span className="ln">12</span>
          <span>{"}"}</span>
        </code>
      </pre>
      <div className="aq-code-foot">
        <span className="aq-tag">
          <i className="fab fa-shopify" /> Shopify Function
        </span>
        <span className="aq-tag muted">TypeScript</span>
      </div>
    </aside>
  );
}

/* ------------------------------------------------------------------ */
/* Trust strip — clients                                               */
/* ------------------------------------------------------------------ */
function TrustStrip() {
  return (
    <section className="aq-trust">
      <p className="aq-trust-label">
        Trusted by brands &amp; agencies worldwide
      </p>
      <ul className="aq-trust-row">
        {clients.map(c => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section heading helper                                              */
/* ------------------------------------------------------------------ */
function SectionHead({eyebrow, title, sub}) {
  return (
    <header className="aq-sec-head">
      <span className="aq-sec-eyebrow">{eyebrow}</span>
      <h2 className="aq-sec-title">{title}</h2>
      {sub && <p className="aq-sec-sub">{sub}</p>}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */
function Services() {
  return (
    <section className="aq-section" id="services">
      <SectionHead
        eyebrow="What I do"
        title="End-to-end engineering, not just patches"
        sub="From a single dynamic section to a Shopify Plus app with checkout extensions — I own the build top to bottom."
      />
      <div className="aq-grid aq-grid-3">
        {services.map(s => (
          <article className="aq-card aq-service" key={s.title}>
            <span className="aq-service-icon">
              <i className={s.icon} />
            </span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Featured apps                                                       */
/* ------------------------------------------------------------------ */
function Work() {
  return (
    <section className="aq-section" id="work">
      <SectionHead
        eyebrow="Selected work"
        title="Private Shopify apps shipped to live stores"
        sub="Code confidential under client NDAs — request a live demo and I’ll walk you through the Admin."
      />
      <div className="aq-grid aq-grid-3">
        {apps.map(a => (
          <article
            className="aq-card aq-app"
            key={a.name}
            style={{"--accent": a.accent}}
          >
            <div className="aq-app-head">
              <span className="aq-app-icon">
                <i className={a.icon} />
              </span>
              <div>
                <h3>{a.name}</h3>
                <p className="aq-app-sub">{a.sub}</p>
              </div>
            </div>
            <p className="aq-app-desc">{a.desc}</p>
            <ul className="aq-chip-row">
              {a.stack.map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <a
              className="aq-app-cta"
              href={a.cta}
              target="_blank"
              rel="noreferrer"
            >
              Request demo
              <i className="fas fa-arrow-right" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */
function Experience() {
  return (
    <section className="aq-section" id="experience">
      <SectionHead
        eyebrow="Experience"
        title="3+ years shipping real revenue for real brands"
        sub="A short tour of the client work I’m proudest of."
      />
      <ol className="aq-timeline">
        {experience.map((e, i) => (
          <li className="aq-timeline-item" key={i}>
            <div className="aq-timeline-dot" />
            <div className="aq-timeline-meta">
              <span className="aq-timeline-date">{e.date}</span>
              <span className="aq-timeline-loc">{e.location}</span>
            </div>
            <div className="aq-timeline-body">
              <h3>{e.role}</h3>
              <p className="aq-timeline-company">{e.company}</p>
              <ul>
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Tech stack                                                          */
/* ------------------------------------------------------------------ */
function Stack() {
  return (
    <section className="aq-section" id="stack">
      <SectionHead
        eyebrow="My toolkit"
        title="The stack I reach for every day"
        sub="From pixel to production — themes, apps, APIs and the DevOps that ties it all together."
      />
      <div className="aq-grid aq-grid-4">
        {stack.map(col => (
          <article className="aq-card aq-stack-col" key={col.label}>
            <div className="aq-stack-head">
              <span className="aq-stack-icon">
                <i className={col.icon} />
              </span>
              <h3>{col.label}</h3>
            </div>
            <ul>
              {col.items.map(it => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Education — compact strip                                           */
/* ------------------------------------------------------------------ */
function Education() {
  return (
    <section className="aq-section aq-section-tight" id="education">
      <SectionHead eyebrow="Education" title="Where I trained" />
      <div className="aq-grid aq-grid-2">
        {education.map(ed => (
          <article className="aq-card aq-edu" key={ed.school}>
            <div className="aq-edu-meta">{ed.date}</div>
            <h3>{ed.school}</h3>
            <p className="aq-edu-degree">{ed.degree}</p>
            <p className="aq-edu-note">{ed.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="aq-section" id="faq">
      <SectionHead
        eyebrow="FAQ"
        title="Common questions before we kick off"
      />
      <ul className="aq-faq">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <li
              className={"aq-faq-item" + (isOpen ? " is-open" : "")}
              key={i}
            >
              <button
                className="aq-faq-q"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{f.q}</span>
                <i className="fas fa-chevron-down" />
              </button>
              <div className="aq-faq-a-wrap">
                <p className="aq-faq-a">{f.a}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact CTA                                                         */
/* ------------------------------------------------------------------ */
function Contact() {
  return (
    <section className="aq-section" id="contact">
      <div className="aq-contact-card">
        <span className="aq-pill aq-pill-status">
          <span className="aq-pill-dot" />
          {profile.availability}
        </span>
        <h2>
          Let&rsquo;s build something{" "}
          <span className="aq-accent">great</span> together.
        </h2>
        <p>
          Have a Shopify project in mind, or just want to say hi? My inbox is
          open and I usually reply within a few hours.
        </p>
        <div className="aq-contact-grid">
          <a
            className="aq-contact-channel"
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <span className="aq-contact-icon" style={{background: "#25d366"}}>
              <i className="fab fa-whatsapp" />
            </span>
            <div>
              <span className="aq-contact-label">WhatsApp</span>
              <span className="aq-contact-value">{profile.phone}</span>
            </div>
          </a>
          <a
            className="aq-contact-channel"
            href={"mailto:" + profile.email}
          >
            <span className="aq-contact-icon" style={{background: "#ea4335"}}>
              <i className="fas fa-envelope" />
            </span>
            <div>
              <span className="aq-contact-label">Email</span>
              <span className="aq-contact-value">{profile.email}</span>
            </div>
          </a>
          <a
            className="aq-contact-channel"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className="aq-contact-icon" style={{background: "#0a66c2"}}>
              <i className="fab fa-linkedin-in" />
            </span>
            <div>
              <span className="aq-contact-label">LinkedIn</span>
              <span className="aq-contact-value">qadeer-ghaffar</span>
            </div>
          </a>
          <a
            className="aq-contact-channel"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="aq-contact-icon" style={{background: "#1f2937"}}>
              <i className="fab fa-github" />
            </span>
            <div>
              <span className="aq-contact-label">GitHub</span>
              <span className="aq-contact-value">mrdeveloper007-boop</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer className="aq-footer">
      <div className="aq-footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name} · Built and designed in
          Lahore
        </span>
        <span className="aq-footer-right">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </span>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Scroll-to-top                                                       */
/* ------------------------------------------------------------------ */
function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      className="aq-scroll-top"
      onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up" />
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* App                                                                 */
/* ------------------------------------------------------------------ */
export default function App() {
  return (
    <div className="aq-app">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Work />
        <Experience />
        <Stack />
        <Education />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
