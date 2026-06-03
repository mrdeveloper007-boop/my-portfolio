import React, {useContext, useEffect, useRef, useState} from "react";
import "./StatsStrip.scss";
import {Fade} from "react-reveal";
import {statsStrip} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

function Counter({target, suffix, isDark}) {
  const [count, setCount] = useState(target); // start at target so we never show "0+" if observer is slow
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let raf;
    let started = false;
    let observer;

    const animate = () => {
      if (started) return;
      started = true;
      setCount(0);
      const duration = 1500;
      const startTime = performance.now();
      const step = now => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));
        if (progress < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    // If element is already in view on mount, animate immediately
    const rect = node.getBoundingClientRect();
    const inView =
      rect.top < window.innerHeight - 40 && rect.bottom > 0;
    if (inView) {
      animate();
    } else {
      // Otherwise observe for scroll-in
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animate();
              observer.disconnect();
            }
          });
        },
        {threshold: 0.1, rootMargin: "0px 0px -40px 0px"}
      );
      observer.observe(node);
    }

    // Safety fallback: if for any reason animation never started after 1.5s, just show final value
    const safety = setTimeout(() => {
      if (!started) setCount(target);
    }, 1500);

    return () => {
      if (observer) observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(safety);
    };
  }, [target]);

  return (
    <span ref={ref} className={isDark ? "stat-value dark" : "stat-value"}>
      {count}
      <span className="stat-suffix">{suffix}</span>
    </span>
  );
}

export default function StatsStrip() {
  const {isDark} = useContext(StyleContext);
  if (!statsStrip.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <section
        id="stats"
        className={isDark ? "stats-strip dark" : "stats-strip"}
      >
        <div className="stats-strip-inner">
          {statsStrip.stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <Counter target={stat.value} suffix={stat.suffix} isDark={isDark} />
              <span className={isDark ? "stat-label dark" : "stat-label"}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </Fade>
  );
}
