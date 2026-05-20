import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactCta from "./components/ContactCta";
import {
  ArrowRight,
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

const offers = [
  {
    title: "Landscape diagnostic",
    text: "Map workflows, data sources, risks, evidence gaps, and reporting readiness.",
    icon: FileSearch,
  },
  {
    title: "Reporting architecture",
    text: "Define KPIs, ownership, escalation, evidence, and management rhythm.",
    icon: BarChart3,
  },
  {
    title: "System build",
    text: "Build dashboards, data models, workflows, access rules, and review routines.",
    icon: GitBranch,
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="home">
        <section className="hero">
          <div className="hero-content">
            <h1>
              Responsible intelligence for better decisions.
            </h1>

            <div className="hero-actions">
              <a href="/services" className="hero-btn lime">
                Explore services
              </a>
              <a href="/contact" className="hero-btn dark">
                Start a conversation
              </a>
            </div>
          </div>
        </section>

        <section className="sg-standard-intro sg-home-intro">
          <div>
            <span className="sg-section-kicker">What we do</span>
            <h2>Make risk visible.</h2>
          </div>

          <div className="sg-services-copy">
            <p>
              Strategine helps organisations turn fragmented operational signals
              into clear intelligence for risk, accountability, sustainability,
              and leadership action.
            </p>
            <p>
              We work across strategy, governance, data, reporting, and
              implementation so teams can manage what matters with confidence.
            </p>
          </div>
        </section>

        <section className="sg-standard-stats sg-home-stats">
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

        <section className="sg-service-grid-section">
          <span className="sg-section-kicker">Core offers</span>
          <h2>Practical systems for accountable operations.</h2>

          <div className="sg-service-grid">
            {offers.map((item) => {
              const Icon = item.icon;

              return (
                <article className="sg-service-card" key={item.title}>
                  <span className="sg-card-symbol" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  <a href="/services" className="sg-card-arrow" aria-label={item.title}>
                    <ArrowRight size={18} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="sg-impact-section">
          <span className="sg-section-kicker">Why it matters</span>
          <h2>From scattered records to structured oversight.</h2>

          <div className="sg-impact-points">
            <p>Clearer signals for leadership.</p>
            <p>Better evidence for reporting.</p>
            <p>Stronger accountability for action.</p>
          </div>

          <a href="/about" className="sg-impact-button">
            Learn about Strategine <small>→</small>
          </a>
        </section>

        <ContactCta />
      </main>

      <Footer />
    </>
  );
}
