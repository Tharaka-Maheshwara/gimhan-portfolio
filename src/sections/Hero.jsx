export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
         <p className="eyebrow">
  HELLO, I’M{" "}
  <span className="eyebrow-name">GIMHAN KAVISHKA</span>
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