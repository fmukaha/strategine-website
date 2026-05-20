import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCta from "../components/ContactCta";
import {
  BarChart3,
  FileSearch,
  GitBranch,
  Layers3,
  Network,
  ShieldCheck,
} from "lucide-react";

const stats = [
  { value: "6+", label: "Intelligence domains", icon: Network },
  { value: "3", label: "Data maturity layers", icon: Layers3 },
  { value: "1", label: "Accountability system", icon: ShieldCheck },
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
          <a href="/services" className="sg-about-standard-button">
            Explore services
          </a>
        </section>

        <section className="sg-about-mission">
          <div>
            <span className="sg-section-kicker">Our mission</span>
            <h2>Make accountability manageable.</h2>
            <p>
              Organisations should not rely on scattered spreadsheets, isolated
              dashboards, or informal follow-ups to manage issues that affect
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

        <ContactCta />
      </main>

      <Footer />
    </>
  );
}
