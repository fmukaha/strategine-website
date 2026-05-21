import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ExternalLink,
  Layers3,
  Network,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Strategine | HREDD & Responsible Business Intelligence",
  description:
    "Strategine helps organisations build responsible business intelligence systems for HREDD, human rights due diligence, UNGP alignment, accountability, evidence, and sustainability oversight.",
  keywords: [
    "HREDD",
    "human rights due diligence",
    "UNGP",
    "responsible business conduct",
    "corporate responsibility",
    "sustainability reporting",
    "ESG accountability",
    "supply chain accountability",
    "remediation tracking",
    "responsible business intelligence",
  ],
  alternates: {
    canonical: "/about",
  },
};

const stats = [
  { value: "6+", label: "Intelligence domains", icon: Network },
  { value: "3", label: "Data maturity layers", icon: Layers3 },
  { value: "1", label: "Accountability system", icon: ShieldCheck },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="sg-about-page">
        <section className="sg-standard-hero sg-about-hero">
          <span className="sg-page-kicker">About us</span>
          <h1>Responsible business intelligence.</h1>
          <div
            className="sg-about-hero-image"
            aria-label="Strategine responsible business intelligence advisory"
          />
        </section>

        <section className="sg-standard-intro sg-about-intro-section">
          <div>
            <span className="sg-section-kicker">Who we are</span>
            <h2>Govern responsible operations.</h2>
          </div>

          <div className="sg-about-copy">
            <p>
              Strategine helps organisations build responsible business
              intelligence systems for human rights due diligence, sustainability
              oversight, accountability, and management action.
            </p>

            <p>
              We work with teams operating in complex, people-intensive
              environments where risk signals are often scattered across
              records, reports, complaints, audits, field activity, and
              operational follow-up.
            </p>

            <p>
              Our role is to help leadership see what matters, assign ownership,
              track response, and evidence progress in a way that supports
              responsible business conduct.
            </p>
          </div>
        </section>

        <section className="sg-standard-stats sg-about-stats">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="sg-about-stat-item">
                <span className="sg-stat-icon" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.7} />
                </span>

                <span className="sg-stat-copy">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </span>
              </div>
            );
          })}
        </section>

        <section className="sg-about-mission">
          <div>
            <span className="sg-section-kicker">Our mission</span>
            <h2>Make accountability manageable.</h2>

            <p>
              Responsible business should not depend on scattered spreadsheets,
              isolated evidence systems, or informal follow-ups. Organisations
              need clear structures for seeing risk, acting early, and proving
              that action was taken.
            </p>

            <p>
              Our work is grounded in the logic of the{" "}
              <a
                href="https://www.ohchr.org/en/business-and-human-rights"
                target="_blank"
                rel="noopener noreferrer"
                className="sg-inline-link"
              >
                UN Guiding Principles on Business and Human Rights
                <ExternalLink size={14} strokeWidth={1.8} aria-hidden="true" />
              </a>
              : identify impacts, prevent harm, respond appropriately, and
              communicate progress with credible evidence.
            </p>
          </div>

          <div
            className="sg-about-mission-image"
            aria-label="Strategine responsible business advisory"
          />
        </section>

        <section className="sg-about-method">
          <div className="sg-about-method-intro">
            <div>
              <span className="sg-section-kicker">How we support accountability</span>
              <h2>From risk signals to action.</h2>
            </div>

            <p>
              We help organisations turn HREDD, corporate responsibility, and
              sustainability expectations into practical operating structures.
              The work connects risk visibility, evidence, ownership,
              escalation, response, and review.
            </p>
          </div>

          <div className="sg-about-method-tabs" aria-label="Strategine accountability method">
            <div>
              <span>*</span>
              <p>Risk identification</p>
            </div>
            <div>
              <span>*</span>
              <p>Evidence pathways</p>
            </div>
            <div>
              <span>*</span>
              <p>Ownership logic</p>
            </div>
            <div>
              <span>*</span>
              <p>Response tracking</p>
            </div>
          </div>

          <div className="sg-about-method-detail">
            <div>
              <p>
                We start by clarifying what must be seen, evidenced, assigned,
                escalated, and reviewed. This creates a practical bridge between
                policy commitments and day-to-day management action.
              </p>
            </div>

            <div className="sg-about-method-list">
              <p><span>*</span> Map human rights and responsible business risk signals</p>
              <p><span>*</span> Define evidence needed for oversight and assurance</p>
              <p><span>*</span> Clarify ownership, escalation, and response duties</p>
              <p><span>*</span> Structure follow-up, remediation, and review routines</p>
            </div>
          </div>
        </section>

        <section className="sg-about-difference">
          <span className="sg-section-kicker">What makes us different</span>

          <h2>Built for accountable action.</h2>

          <p className="sg-about-difference-intro">
            Strategine focuses on the operating layer behind responsible
            business: how risks are identified, owned, acted on, evidenced, and
            reviewed over time.
          </p>

          <div className="sg-about-difference-grid">
            <article>
              <span>01</span>
              <h3>Due diligence logic</h3>
              <p>
                We align work with HREDD, UNGP, OECD due diligence, responsible
                business conduct, and emerging corporate sustainability duties.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Evidence before reporting</h3>
              <p>
                We focus on what can be evidenced, reviewed, escalated, and
                improved — not just what can be presented.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Actionable oversight</h3>
              <p>
                We connect risk signals to ownership, response mechanisms,
                remediation tracking, and leadership review.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Designed for continuity</h3>
              <p>
                We build structures teams can maintain beyond one project, one
                report, or one compliance cycle.
              </p>
            </article>
          </div>
        </section>

        <section className="sg-framework-section">
          <span className="sg-section-kicker">Frameworks we work with</span>

          <div className="sg-framework-logos">
            <article className="sg-framework-logo">
              <div className="sg-framework-logo-mark sg-framework-mark--orbit" aria-hidden="true">
                <span></span><span></span><span></span>
              </div>
              <div className="sg-framework-logo-copy">
                <strong>UNGP</strong>
                <small>Guiding Principles</small>
              </div>
            </article>

            <article className="sg-framework-logo">
              <div className="sg-framework-logo-mark sg-framework-mark--stem" aria-hidden="true">
                <span></span><span></span>
              </div>
              <div className="sg-framework-logo-copy">
                <strong>OECD</strong>
                <small>Due Diligence</small>
              </div>
            </article>

            <article className="sg-framework-logo">
              <div className="sg-framework-logo-mark sg-framework-mark--cluster" aria-hidden="true">
                <span></span><span></span><span></span><span></span>
              </div>
              <div className="sg-framework-logo-copy">
                <strong>CSDDD</strong>
                <small>Corporate Due Diligence</small>
              </div>
            </article>

            <article className="sg-framework-logo">
              <div className="sg-framework-logo-mark sg-framework-mark--horizon" aria-hidden="true">
                <span></span><span></span><span></span>
              </div>
              <div className="sg-framework-logo-copy">
                <strong>ESG</strong>
                <small>Sustainability Reporting</small>
              </div>
            </article>

            <article className="sg-framework-logo">
              <div className="sg-framework-logo-mark sg-framework-mark--shield" aria-hidden="true">
                <span></span>
              </div>
              <div className="sg-framework-logo-copy">
                <strong>RBC</strong>
                <small>Responsible Business Conduct</small>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
