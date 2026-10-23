import { useEffect, useRef, useState } from "react";

const skillItems = [
  {
    name: "SolidWorks",
    level: 75,
    focus: "3D MODELLING / SHEET METAL",
  },
  {
    name: "AutoCAD",
    level: 70,
    focus: "2D DRAFTING / DIMENSIONS",
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`cad-skills${isVisible ? " is-visible" : ""}`}
    >
      <div className="cad-skills__inner">
        <div className="cad-skills__intro">
          <p className="cad-skills__eyebrow">
            <span aria-hidden="true" />
            01 / CORE SOFTWARE
          </p>

          <h2>
            My CAD
            <br />
            <span>Skills.</span>
          </h2>

          <p className="cad-skills__description">
            Core design tools used to create 3D models, sheet metal concepts,
            and 2D technical drawings.
          </p>

          <p className="cad-skills__notice">
            SELF-RATING / DRAFT — CONFIRM BEFORE SHARING
          </p>
        </div>

        <div className="cad-skills__list">
          {skillItems.map((skill, index) => (
            <article
              className="cad-skill"
              key={skill.name}
              style={{ "--skill-delay": `${index * 140}ms` }}
            >
              <div
                className="cad-skill__circle"
                role="meter"
                aria-label={`${skill.name} draft self-rating`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={skill.level}
                aria-valuetext={`${skill.level}% draft self-rating`}
                style={{ "--skill-level": `${skill.level}%` }}
              >
                <span aria-hidden="true">
                  {skill.level}
                  <small>%</small>
                </span>
              </div>

              <div className="cad-skill__content">
                <span className="cad-skill__index">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(skillItems.length).padStart(2, "0")}
                </span>

                <h3>{skill.name}</h3>
                <p>{skill.focus}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}