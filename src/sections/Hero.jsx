import { useEffect, useState } from "react";

const displayName = "Gimhan Kavishka";

export default function Hero() {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setVisibleChars(displayName.length);
      return;
    }

    let index = 0;

    const timer = window.setInterval(() => {
      index += 1;
      setVisibleChars(index);

      if (index >= displayName.length) {
        window.clearInterval(timer);
      }
    }, 55);

    return () => window.clearInterval(timer);
  }, []);

  const isTyping = visibleChars < displayName.length;

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-greeting">
            <p className="hero-greeting-hello">Hello!</p>

            <p className="hero-greeting-name" aria-label={`I’m ${displayName}`}>
              I’m <span>{displayName.slice(0, visibleChars)}</span>
              {isTyping && (
                <span className="typing-cursor" aria-hidden="true" />
              )}
            </p>
          </div>

          <h1 className="hero-title">
            Mechanical
            <br />
            <span>Designer.</span>
          </h1>

          <p className="hero-description">
            I’m an entry-level Mechanical Designer working with SolidWorks and
            AutoCAD. I create 3D models and technical drawings, with a focus on
            sheet metal and product design.
          </p>

          <div className="hero-tags">
            <span>SolidWorks</span>
            <span>AutoCAD</span>
            <span>Mechanical Design</span>
          </div>

          <a className="primary-button" href="#projects">
            View my projects <span aria-hidden="true">↘</span>
          </a>
        </div>

        <div className="portrait-placeholder hero-portrait">
          <img
            className="portrait-image"
            src="/assets/gimhan-profile.png"
            alt="Gimhan, Mechanical Designer"
          />
        </div>
      </div>
    </section>
  );
}