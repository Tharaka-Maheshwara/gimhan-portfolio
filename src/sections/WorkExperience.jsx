
const experiences = [
  {
    number: "01",
    role: "Head of Fabrication",
    period: "Apr 2026 – Oct 2026",
    company: "Ceylektra Engineering (Pvt) Ltd",
    affiliation: "Illukkumbura Group",
    location: "Sri Lanka",
    responsibilities: [
      "Directed section output, workflow planning, and team operations across 3D modelling, drafting, CNC fabrication, welding, coating, and quality release.",
      "Coordinated cross-functional teams to meet production targets and quality standards for switchgear enclosures.",
    ],
  },
  {
    number: "02",
    role: "Production Executive",
    period: "Oct 2025 – Apr 2026",
    company: "Ceylektra Engineering (Pvt) Ltd",
    affiliation: "Illukkumbura Group",
    location: "Sri Lanka",
    responsibilities: [
      "Designed complex 3D SolidWorks models for low-voltage (LV) switchgear enclosures, optimizing sheet-metal bending allowances.",
      "Developed CNC programs for the turret punching machine, supporting sheet-metal fabrication output.",
    ],
  },
  {
    number: "03",
    role: "Maintenance Assistant Engineer",
    subtitle: "6-Month Internship",
    period: "2024",
    company: "Unidil Packaging Ltd",
    location: "Delgoda, Sri Lanka",
    responsibilities: [
      "Maintained manufacturing machinery and designed mechanical and electrical layouts in AutoCAD and SolidWorks.",
      "Developed automation logic to support production-line reliability.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section
      className="experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="experience-inner">
        <header className="experience-heading">
          <p className="experience-eyebrow">
            <span aria-hidden="true" /> CAREER / MANUFACTURING
          </p>
          <h2 id="experience-title">
            Work <span>Experience.</span>
          </h2>
          <p className="experience-intro">
            Experience across fabrication leadership, production engineering,
            and manufacturing maintenance.
          </p>
        </header>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience-entry" key={experience.number}>
              <div className="experience-meta">
                <span className="experience-number">
                  {experience.number} <i aria-hidden="true">/ 03</i>
                </span>
                <time className="experience-period">{experience.period}</time>
              </div>

              <div className="experience-card">
                <h3 className="experience-role">
                  {experience.role}
                  {experience.subtitle && (
                    <span className="experience-subtitle">
                      {experience.subtitle}
                    </span>
                  )}
                </h3>

                <p className="experience-company">
                  <strong>{experience.company}</strong>
                  {experience.affiliation && (
                    <span className="experience-company__affiliation">
                      {` (${experience.affiliation})`}
                    </span>
                  )}
                  <span className="experience-company__location">
                    {`, ${experience.location}`}
                  </span>
                </p>

                <ul className="experience-responsibilities">
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
