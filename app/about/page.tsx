import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCta from "../components/ContactCta";
import { BarChart3, FileSearch, GitBranch, ShieldCheck } from "lucide-react";

const stats = [
  {
    value: "3",
    label: "Core service offers",
  },
  {
    value: "6+",
    label: "Risk and reporting domains",
  },
  {
    value: "1",
    label: "Accountability layer",
  },
];

const capabilities = [
  {
    title: "Risk visibility",
    text: "Turn fragmented operational records into clear signals for leadership, oversight, and action.",
    icon: FileSearch,
  },
  {
    title: "Reporting logic",
    text: "Define KPIs, ownership, escalation routes, evidence needs, and follow-up rhythm.",
    icon: BarChart3,
  },
  {
    title: "Governance structure",
    text: "Create practical systems that support decisions, reviews, audits, and accountability.",
    icon: ShieldCheck,
  },
  {
    title: "Long-term continuity",
    text: "Build reporting foundations that remain useful as teams, risks, and requirements evolve.",
    icon: GitBranch,
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="sg-about-page">
        <section className="sg-about-hero">
          <span className="sg-page-kicker">About us</span>

          <h1>Intelligence systems for responsible business operations.</h1>

          <div
            className="sg-about-hero-image"
            aria-label="Strategine responsible business intelligence advisory"
          />
        </section>

        <section className="sg-about-intro-section">
          <div>
            <span className="sg-section-kicker">Who we are</span>

            <h2>
              We help organisations govern what is often fragmented,
              decentralised, or unseen.
            </h2>
          </div>

          <div className="sg-about-copy">
            <p>
              Strategine is a consulting firm focused on responsible business
              intelligence systems.
            </p>

            <p>
              We work with organisations operating in complex, people-intensive
              environments to turn operational signals into clear intelligence
              for risk, accountability, sustainability, and management action.
            </p>

            <p>
              Our work sits between strategy, governance, data, reporting, and
              implementation — helping leadership move from scattered records to
              structured oversight.
            </p>
          </div>
        </section>

        <section className="sg-services-stats sg-about-stats">
          {stats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
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

          <h2>Clear evidence. Practical accountability. Better decisions.</h2>

          <p>
            We design systems that help leadership identify what matters,
            understand what is changing, assign ownership, track response, and
            communicate progress with confidence.
          </p>

          <a href="/services" className="sg-about-standard-button">
            Explore our services
          </a>
        </section>

        <section className="sg-about-mission">
          <div>
            <span className="sg-section-kicker">Our mission</span>

            <h2>
              Make responsible business easier to manage, evidence, and improve.
            </h2>

            <p>
              We believe organisations should not rely on scattered spreadsheets,
              isolated dashboards, or informal follow-ups to manage issues that
              affect people, operations, reputation, and continuity.
            </p>

            <p>
              Strategine helps teams build the intelligence layer behind
              responsible operations — from data landscape diagnostics to KPI
              architecture and decision intelligence systems.
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
