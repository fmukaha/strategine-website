const focusAreas = [
  "Responsible business intelligence",
  "Accountability reporting",
  "Operational risk visibility",
];

export default function ContactCta() {
  return (
    <section className="sg-contact-scene" aria-labelledby="sg-contact-title">
      <div className="sg-contact-canvas">
        <div className="sg-contact-left">
          <span className="sg-contact-corner" aria-hidden="true" />

          <h2 id="sg-contact-title">Start with a clear intelligence system.</h2>

          <p>
            Tell us what you need to understand, track, or report. We will help
            you define the right next step.
          </p>

          <div className="sg-contact-list">
            {focusAreas.map((item) => (
              <div className="sg-contact-list-item" key={item}>
                <span aria-hidden="true">→</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>

        <form className="sg-contact-form">
          <h3>How can we help?</h3>

          <p className="sg-contact-form-intro">
            Share a few details and we will respond with clear next steps.
          </p>

          <div className="sg-form-grid">
            <label>
              <span>Your name</span>
              <input type="text" name="name" placeholder="e.g. Jane Mwangi" />
            </label>

            <label>
              <span>Email address</span>
              <input type="email" name="email" placeholder="e.g. jane@organisation.com" />
            </label>

            <label>
              <span>Organisation</span>
              <input type="text" name="organisation" placeholder="e.g. Export Producer Ltd" />
            </label>

            <label>
              <span>Area of support</span>
              <select name="service" defaultValue="">
                <option value="" disabled>Select a focus area</option>
                <option>Intelligence Landscape Diagnostic</option>
                <option>Accountability & Reporting Architecture</option>
                <option>Decision Intelligence System Build</option>
              </select>
            </label>
          </div>

          <label>
            <span>Message</span>
            <textarea name="message" placeholder="Briefly describe your challenge" />
          </label>

          <button type="submit" className="sg-contact-submit">
            <span>Submit</span>
            <small aria-hidden="true">→</small>
          </button>
        </form>
      </div>
    </section>
  );
}
