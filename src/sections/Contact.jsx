export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container contact-inner">
        <div className="contact-copy">
          <p className="contact-eyebrow">05 / CONTACT</p>

          <h2>
            Let’s talk
            <br />
            through the work.
          </h2>
        </div>

        <div
          className="contact-links"
          role="group"
          aria-label="Contact information"
        >
          <a
            className="contact-detail contact-detail--primary"
            href="mailto:hgimhan25@gmail.com"
          >
            <span className="contact-detail__label">EMAIL</span>
            <strong className="contact-detail__value">
              hgimhan25@gmail.com
            </strong>
            <span className="contact-detail__arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <a
            className="contact-detail contact-detail--outline"
            href="tel:+971582471545"
          >
            <span className="contact-detail__label">PHONE</span>
            <strong className="contact-detail__value">
              +971 58 247 1545
            </strong>
            <span className="contact-detail__arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <a
            className="contact-detail contact-detail--outline"
            href="https://www.linkedin.com/in/himashagimhan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-detail__label">LINKEDIN</span>
            <strong className="contact-detail__value">
              linkedin.com/in/himashagimhan
            </strong>
            <span className="contact-detail__arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}