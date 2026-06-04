import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
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

/* ==================================================================
   Hooks
   ================================================================== */

// Reveal-on-scroll — adds `is-in` to the element when it enters viewport.
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-in");
          io.disconnect();
        }
      },
      {threshold: 0.12, rootMargin: "0px 0px -60px 0px"}
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return ref;
}

// Active section based on scroll position — drives nav highlight.
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      const offset = window.innerHeight * 0.35;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);
  return active;
}

// Scroll progress 0..1
function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}

// Count-up animation, runs once when element enters view.
function useCountUp(target, duration = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(Math.round(eased * target));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      {threshold: 0.4}
    );
    io.observe(node);
    return () => io.disconnect();
  }, [target, duration]);
  return [ref, value];
}

// Spotlight cursor — sets --mx/--my on the element so CSS can paint a
// soft radial glow that follows the mouse. Cheap and gorgeous.
function useSpotlight() {
  const onMove = useCallback((e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
    el.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
  }, []);
  return onMove;
}

/* ==================================================================
   Top scroll-progress bar
   ================================================================== */
function ScrollBar() {
  const p = useScrollProgress();
  return (
    <div className="aq-progress" aria-hidden="true">
      <span style={{transform: `scaleX(${p})`}} />
    </div>
  );
}

/* ==================================================================
   Header — sticky + active link + mobile menu
   ================================================================== */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navIds = useMemo(
    () => nav.map((n) => n.href.replace("#", "")),
    []
  );
  const active = useActiveSection(navIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
          {nav.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={active === id ? "is-active" : ""}
              >
                {item.label}
              </a>
            );
          })}
          <a
            className="aq-nav-cta"
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Hire me
          </a>
        </nav>

        <button
          className={"aq-burger" + (open ? " is-open" : "")}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

/* ==================================================================
   Hero
   ================================================================== */
function Hero() {
  const inner = useRef(null);

  // Subtle parallax: orb follows the cursor a few pixels.
  const onPointer = (e) => {
    const node = inner.current;
    if (!node) return;
    const r = node.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    node.style.setProperty("--px", x * 18 + "px");
    node.style.setProperty("--py", y * 18 + "px");
  };

  return (
    <section className="aq-hero" id="top" onMouseMove={onPointer} ref={inner}>
      <div className="aq-hero-bg" aria-hidden="true">
        <div className="aq-hero-orb" />
        <div className="aq-hero-grid" />
        <div className="aq-hero-noise" />
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
          Hi, I&rsquo;m <span className="aq-name">{profile.name}</span>.
          <br />
          I build Shopify stores that{" "}
          <span className="aq-accent">ship revenue</span>.
        </h1>

        <p className="aq-hero-sub">{hero.pitch}</p>

        <div className="aq-hero-ctas">
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="aq-btn aq-btn-primary"
          >
            <i className="fab fa-whatsapp" />
            Start a project
          </a>
          <a
            href={profile.resumeUrl}
            download={profile.resumeFilename}
            className="aq-btn aq-btn-ghost"
          >
            <i className="fas fa-file-download" />
            Download CV
          </a>
          <a
            href={"mailto:" + profile.email}
            className="aq-btn aq-btn-text"
          >
            <i className="fas fa-envelope" />
            {profile.email}
          </a>
        </div>

        <ul className="aq-hero-metrics">
          {hero.metrics.map((m) => (
            <HeroMetric key={m.label} value={m.value} label={m.label} />
          ))}
        </ul>
      </div>

      <CodeWindow />
    </section>
  );
}

function HeroMetric({value, label}) {
  // Parse leading integer for animation; keep suffix like "+" untouched.
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const [ref, n] = useCountUp(target);
  return (
    <li ref={ref}>
      <span className="aq-metric-value">
        {n}
        <span className="aq-metric-suffix">{suffix}</span>
      </span>
      <span className="aq-metric-label">{label}</span>
    </li>
  );
}

/* ==================================================================
   Code window — premium visual
   ================================================================== */
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
          <span>
            {"    "}
            {"}"}));
          </span>
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

/* ==================================================================
   Trust strip — clients (animated marquee, clickable logos)
   ================================================================== */
function TrustStrip() {
  const ref = useReveal();
  // Duplicate the list once so the marquee loops seamlessly.
  const row = [...clients, ...clients];
  return (
    <section className="aq-trust aq-reveal" ref={ref}>
      <p className="aq-trust-label">
        Trusted by brands &amp; agencies worldwide
      </p>
      <div className="aq-trust-marquee">
        <ul className="aq-trust-row">
          {row.map((c, i) => (
            <li key={c.name + i}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="aq-client-logo"
                aria-label={"Visit " + c.name}
                title={"Visit " + c.name}
              >
                <img src={c.logo} alt={c.name} loading="lazy" />
                <span>{c.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ==================================================================
   Section heading helper
   ================================================================== */
function SectionHead({number, eyebrow, title, sub}) {
  return (
    <header className="aq-sec-head">
      <div className="aq-sec-eyebrow-row">
        {number && <span className="aq-sec-num">{number}</span>}
        <span className="aq-sec-eyebrow">{eyebrow}</span>
      </div>
      <h2 className="aq-sec-title">{title}</h2>
      {sub && <p className="aq-sec-sub">{sub}</p>}
    </header>
  );
}

/* ==================================================================
   Services
   ================================================================== */
function Services() {
  const ref = useReveal();
  const spot = useSpotlight();
  return (
    <section className="aq-section aq-reveal" id="services" ref={ref}>
      <SectionHead
        number="01"
        eyebrow="What I do"
        title="End-to-end engineering, not just patches."
        sub="From a single dynamic section to a Shopify Plus app with checkout extensions — I own the build top to bottom."
      />
      <div className="aq-grid aq-grid-3 aq-grid-equal">
        {services.map((s) => (
          <article
            className="aq-card aq-service aq-spot"
            key={s.title}
            onMouseMove={spot}
          >
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

/* ==================================================================
   Featured apps
   ================================================================== */
function Work() {
  const ref = useReveal();
  const spot = useSpotlight();
  return (
    <section className="aq-section aq-reveal" id="work" ref={ref}>
      <SectionHead
        number="02"
        eyebrow="Selected work"
        title="Private Shopify apps shipped to live stores."
        sub="Code confidential under client NDAs — message me on WhatsApp for a live demo and I’ll walk you through the Admin."
      />
      <div className="aq-grid aq-grid-3">
        {apps.map((a) => (
          <article
            className="aq-card aq-app aq-spot"
            key={a.name}
            style={{"--accent": a.accent}}
            onMouseMove={spot}
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
              {a.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <a
              className="aq-app-cta"
              href={a.cta}
              target="_blank"
              rel="noopener noreferrer"
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

/* ==================================================================
   Experience timeline
   ================================================================== */
function Experience() {
  const ref = useReveal();
  return (
    <section className="aq-section aq-reveal" id="experience" ref={ref}>
      <SectionHead
        number="03"
        eyebrow="Experience"
        title="3+ years shipping real revenue for real brands."
        sub="A short tour of the client work I’m proudest of."
      />
      <ol className="aq-timeline">
        {experience.map((e, i) => (
          <li className="aq-timeline-item" key={i} style={{"--i": i}}>
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
              {e.url && (
                <a
                  className="aq-timeline-link"
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-store" />
                  Visit store
                  <i className="fas fa-external-link-alt" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ==================================================================
   Tech stack
   ================================================================== */
function Stack() {
  const ref = useReveal();
  const spot = useSpotlight();
  return (
    <section className="aq-section aq-reveal" id="stack" ref={ref}>
      <SectionHead
        number="04"
        eyebrow="My toolkit"
        title="The stack I reach for every day."
        sub="From pixel to production — themes, apps, APIs and the DevOps that ties it all together."
      />
      <div className="aq-grid aq-grid-4 aq-grid-equal">
        {stack.map((col) => (
          <article
            className="aq-card aq-stack-col aq-spot"
            key={col.label}
            onMouseMove={spot}
          >
            <div className="aq-stack-head">
              <span className="aq-stack-icon">
                <i className={col.icon} />
              </span>
              <h3>{col.label}</h3>
            </div>
            <ul>
              {col.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ==================================================================
   Education
   ================================================================== */
function Education() {
  const ref = useReveal();
  return (
    <section
      className="aq-section aq-section-tight aq-reveal"
      id="education"
      ref={ref}
    >
      <SectionHead number="05" eyebrow="Education" title="Where I trained." />
      <div className="aq-grid aq-grid-2 aq-grid-equal">
        {education.map((ed) => (
          <article className="aq-card aq-edu" key={ed.school}>
            <div className="aq-edu-head">
              {ed.logo && (
                <div className="aq-edu-logo">
                  <img src={ed.logo} alt={ed.short || ed.school} loading="lazy" />
                </div>
              )}
              <div className="aq-edu-headtext">
                <div className="aq-edu-meta">{ed.date}</div>
                <h3>{ed.school}</h3>
              </div>
            </div>
            <p className="aq-edu-degree">{ed.degree}</p>
            <p className="aq-edu-note">{ed.note}</p>
            {ed.url && (
              <a
                className="aq-edu-link"
                href={ed.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website
                <i className="fas fa-external-link-alt" />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

/* ==================================================================
   FAQ
   ================================================================== */
function Faq() {
  const ref = useReveal();
  const [open, setOpen] = useState(0);
  return (
    <section className="aq-section aq-reveal" id="faq" ref={ref}>
      <SectionHead
        number="06"
        eyebrow="FAQ"
        title="Common questions before we kick off."
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

/* ==================================================================
   Contact CTA
   ================================================================== */
function Contact() {
  const ref = useReveal();
  return (
    <section className="aq-section aq-reveal" id="contact" ref={ref}>
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
            rel="noopener noreferrer"
          >
            <span className="aq-contact-icon" style={{background: "#25d366"}}>
              <i className="fab fa-whatsapp" />
            </span>
            <div>
              <span className="aq-contact-label">WhatsApp</span>
              <span className="aq-contact-value">{profile.phone}</span>
            </div>
            <i className="fas fa-external-link-alt aq-contact-go" />
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
            <i className="fas fa-external-link-alt aq-contact-go" />
          </a>
          <a
            className="aq-contact-channel"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="aq-contact-icon" style={{background: "#0a66c2"}}>
              <i className="fab fa-linkedin-in" />
            </span>
            <div>
              <span className="aq-contact-label">LinkedIn</span>
              <span className="aq-contact-value">qadeer-ghaffar</span>
            </div>
            <i className="fas fa-external-link-alt aq-contact-go" />
          </a>
          <a
            className="aq-contact-channel"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="aq-contact-icon" style={{background: "#1f2937"}}>
              <i className="fab fa-github" />
            </span>
            <div>
              <span className="aq-contact-label">GitHub</span>
              <span className="aq-contact-value">mrdeveloper007-boop</span>
            </div>
            <i className="fas fa-external-link-alt aq-contact-go" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ==================================================================
   Footer
   ================================================================== */
function Footer() {
  return (
    <footer className="aq-footer">
      <div className="aq-footer-inner">
        <div className="aq-footer-mark">
          <span className="aq-mark-badge sm">{profile.shortName}</span>
          <span>
            © {new Date().getFullYear()} {profile.name} · Designed and built
            in Lahore
          </span>
        </div>
        <div className="aq-footer-right">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href={"mailto:" + profile.email}>Email</a>
        </div>
      </div>
    </footer>
  );
}

/* ==================================================================
   Scroll-to-top FAB
   ================================================================== */
function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      className={"aq-scroll-top" + (show ? " is-on" : "")}
      onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <i className="fas fa-hand-point-up" />
    </button>
  );
}

/* ==================================================================
   App
   ================================================================== */
export default function App() {
  return (
    <div className="aq-shell">
      <ScrollBar />
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
