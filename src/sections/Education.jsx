export default function Education() {
  return (
    <section
      className="education-section"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="education-inner">
        <header className="education-heading">
          <p className="education-eyebrow">
            <span aria-hidden="true" />
            EDUCATION / QUALIFICATIONS
          </p>

          <h2 id="education-title">
            Education<span>.</span>
          </h2>
        </header>

        <div className="education-list">
          <article className="education-entry">
            <div className="education-meta">
              <span className="education-index">01 / 02</span>
              <span className="education-period">2021 – 2025</span>
            </div>

            <div className="education-content">
              <h3>
                BEngTech (Hons) in Mechanical and Manufacturing Technology
              </h3>

              <p className="education-institution">
                Wayamba University of Sri Lanka
              </p>

              <p className="education-accreditation">
                Accredited by IESL under Sydney Accord Guidelines
              </p>

              <div className="education-result">
                <span>CGPA</span>
                <strong>3.2</strong>
                <span className="education-classification">
                  Second Class Lower Division
                </span>
              </div>
            </div>
          </article>

          <article className="education-entry">
            <div className="education-meta">
              <span className="education-index">02 / 02</span>
              <span className="education-period">2019 – 2021</span>
            </div>

            <div className="education-content">
              <h3>GCE Advanced Level</h3>
              <p className="education-institution">
                Sri Dharmaloka College, Kelaniya, Sri Lanka
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}