import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  BarChart3,
  FileSearch,
  GitBranch,
  Handshake,
  Layers3,
  Leaf,
  Network,
  ShieldCheck,
  Sprout,
} from "lucide-react";

const stats = [
  { value: "6+", label: "Intelligence domains", icon: Network },
  { value: "3", label: "Data maturity layers", icon: Layers3 },
  { value: "1", label: "Accountability system", icon: ShieldCheck },
];

const storyCards = [
  {
    title: "Practical care",
    text: "We focus on systems people can understand, maintain, and use routinely.",
    icon: Handshake,
  },
  {
    title: "Sustainable logic",
    text: "We design reporting foundations that remain useful as requirements evolve.",
    icon: Leaf,
  },
  {
    title: "Tailored systems",
    text: "We shape each solution around real workflows, risks, ownership, and evidence.",
    icon: Sprout,
  },
  {
    title: "Reliable structure",
    text: "We help teams move from scattered records to clear operating rhythm.",
    icon: ShieldCheck,
  },
];

const capabilities = [
  {
    title: "Risk visibility",
    text: "Turn scattered records into clear signals for leadership and action.",
    icon: FileSearch,
  },
  {
    title: "Reporting logic",
    text: "Define KPIs, ownership, evidence, escalation, and follow-up rhythm.",
    icon: BarChart3,
  },
  {
    title: "Governance structure",
    text: "Create systems that support decisions, reviews, audits, and accountability.",
    icon: ShieldCheck,
  },
  {
    title: "Continuity",
    text: "Build foundations that remain useful as risks and requirements evolve.",
    icon: GitBranch,
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="sg-about-page">
        <section className="sg-standard-hero sg-about-hero">
          <span className="sg-page-kicker">About us</span>
          <h1>Responsible intelligence systems.</h1>
          <div
            className="sg-about-hero-image"
            aria-label="Strategine responsible business intelligence advisory"
          />
        </section>

        <section className="sg-standard-intro sg-about-intro-section">
          <div>
            <span className="sg-section-kicker">Who we are</span>
            <h2>Govern fragmented operations.</h2>
          </div>

          <div className="sg-about-copy">
            <p>
              Strategine is a consulting firm focused on responsible business
              intelligence systems.
            </p>
            <p>
              We help organisations operating in complex, people-intensive
              environments turn operational signals into clear intelligence for
              risk, accountability, sustainability, and management action.
            </p>
            <p>
              Our work sits between strategy, governance, data, reporting, and
              implementation.
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
              Organisations should not rely on scattered spreadsheets, isolated
              evidence systems, or informal follow-ups to manage issues that affect
              people, operations, reputation, and continuity.
            </p>
            <p>
              Strategine helps teams build the intelligence layer behind
              responsible operations.
            </p>
          </div>

          <div
            className="sg-about-mission-image"
            aria-label="Strategine mission placeholder"
          />
        </section>

        <section className="sg-about-capabilities">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <article className="sg-about-cap-card" key={item.title}>
                <span aria-hidden="true">
                  <Icon size={26} strokeWidth={1.6} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </section>

        <section className="sg-about-standard">
          <span className="sg-section-kicker">Our standard</span>
          <h2>Evidence. Accountability. Decisions.</h2>
          <p>
            We design systems that help leadership identify what matters,
            assign ownership, track response, and communicate progress clearly.
          </p>
        </section>
        <section className="sg-framework-section">
          <span className="sg-section-kicker">Built around recognised frameworks</span>

          <div className="sg-framework-row">
            <div className="sg-framework-card">
              <strong>UNGP</strong>
              <span>UN Guiding Principles</span>
            </div>

            <div className="sg-framework-card">
              <strong>OECD</strong>
              <span>Due Diligence Guidance</span>
            </div>

            <div className="sg-framework-card">
              <strong>CSDDD</strong>
              <span>Corporate Sustainability Due Diligence</span>
            </div>

            <div className="sg-framework-card">
              <strong>ESG</strong>
              <span>Sustainability Reporting</span>
            </div>

            <div className="sg-framework-card">
              <strong>RBC</strong>
              <span>Responsible Business Conduct</span>
            </div>
          </div>
        </section>

        <section className="sg-about-difference">
          <span className="sg-section-kicker">What makes us different</span>

          <h2>Built for responsible business accountability.</h2>

          <p className="sg-about-difference-intro">
            Strategine helps organisations move from policy commitments to
            practical systems for identifying risk, assigning ownership,
            tracking action, and evidencing progress.
          </p>

          <div className="sg-about-difference-grid">
            <article>
              <span>01</span>
              <h3>Due diligence logic</h3>
              <p>
                We align work with responsible business conduct, HREDD, UNGP,
                OECD due diligence, and emerging sustainability expectations.
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
                We build structures that teams can maintain beyond one project,
                one report, or one compliance cycle.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
