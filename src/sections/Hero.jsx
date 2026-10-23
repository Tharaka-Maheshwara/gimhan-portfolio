import { useEffect, useState } from "react";

const introText = "HELLO, I’M ";
const nameText = "GIMHAN KAVISHKA";
const fullGreeting = introText + nameText;

export default function Hero() {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setVisibleChars(fullGreeting.length);
      return;
    }

    let currentIndex = 0;

    const timer = window.setInterval(() => {
      currentIndex += 1;
      setVisibleChars(currentIndex);

      if (currentIndex >= fullGreeting.length) {
        window.clearInterval(timer);
      }
    }, 45);

    return () => window.clearInterval(timer);
  }, []);

  const visibleIntro = fullGreeting.slice(
    0,
    Math.min(visibleChars, introText.length)
  );

  const visibleName =
    visibleChars > introText.length
      ? fullGreeting.slice(introText.length, visibleChars)
      : "";

  const isTyping = visibleChars < fullGreeting.length;

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow" aria-label={fullGreeting}>
            {visibleIntro}
            {visibleName && (
              <span className="eyebrow-name">{visibleName}</span>
            )}
            {isTyping && (
              <span className="typing-cursor" aria-hidden="true" />
            )}
          </p>

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