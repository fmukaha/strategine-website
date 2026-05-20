import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  BarChart3,
  ClipboardCheck,
  FileSearch,
  Layers3,
  Network,
  ShieldCheck,
} from "lucide-react";

const stats = [
  { value: "6+", label: "Intelligence domains", icon: Network },
  { value: "3", label: "Data maturity layers", icon: Layers3 },
  { value: "1", label: "Accountability system", icon: ShieldCheck },
];

const services = [
  {
    title: "Intelligence Landscape Diagnostic",
    text: "Map your data sources, workflows, risks, evidence gaps, and reporting readiness across responsible business operations.",
    href: "/contact",
    icon: FileSearch,
  },
  {
    title: "Accountability & Reporting Architecture",
    text: "Define KPIs, ownership, escalation logic, action tracking, remediation evidence, and reporting requirements.",
    href: "/contact",
    icon: ClipboardCheck,
  },
  {
    title: "Decision Intelligence System Build",
    text: "Build data models, workflows, dashboards, access rules, and review processes for routine oversight.",
    href: "/contact",
    icon: Layers3,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="sg-services-page">
        <section className="sg-services-hero">
          <span className="sg-page-kicker">Services</span>

          <h1>Responsible Business Intelligence Systems</h1>

          <div className="sg-services-image" aria-label="Strategine services placeholder" />

          <div className="sg-services-intro">
            <div>
              <span className="sg-section-kicker">What we do</span>
              <h2>Make social, labour, and human rights risk visible to leadership.</h2>
            </div>

            <div className="sg-services-copy">
              <p>
                Strategine is a consulting firm focused on decision intelligence
                for social and human rights risk.
              </p>

              <p>
                We work with organisations operating in complex, people-intensive
                environments to turn operational signals into clear, governance-ready intelligence.
              </p>

              <p>
                Our work helps leadership identify emerging risks early, assess
                whether response mechanisms are working, and strengthen oversight.
              </p>
            </div>
          </div>

          <div className="sg-standard-stats sg-services-stats">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div className="sg-services-stat" key={item.label}>
                  <span className="sg-stat-icon" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>
                  <strong>{item.value}</strong>
                  <small>{item.label}</small>
                </div>
              );
            })}
          </div>
        </section>

        <section className="sg-why-section">
          <div className="sg-why-copy">
            <span className="sg-section-kicker">Why choose us</span>
            <h2>More than reporting. We build the logic behind better oversight.</h2>
          </div>

          <div className="sg-why-media">
            <div className="sg-why-image" aria-label="Strategine advisory placeholder" />
            <a href="/contact" className="sg-why-button">Start a consultation</a>
          </div>

          <div className="sg-why-list">
            {[
              "Clear intelligence from fragmented operational records.",
              "Practical KPI frameworks leadership can actually use.",
              "Accountability loops that show ownership and follow-up.",
              "Governance-ready outputs for decisions, reviews, and audits.",
            ].map((item) => (
              <div key={item}>
                <span>→</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sg-service-grid-section">
          <span className="sg-section-kicker">Our services</span>
          <h2>Responsible business intelligence systems</h2>

          <div className="sg-service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link href={service.href} className="sg-service-card" key={service.title}>
                  <span className="sg-card-symbol" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="sg-card-arrow" aria-hidden="true">→</span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="sg-impact-section">
          <span className="sg-section-kicker">Get an estimate</span>
          <h2>Intelligence systems that make responsible business visible</h2>

          <div className="sg-impact-points">
            <p>Clear signals for leadership, risk, and sustainability decisions.</p>
            <p>Practical systems for accountability, follow-up, and evidence.</p>
          </div>

          <div className="sg-impact-image">
            <a href="/contact" className="sg-impact-button">
              <span>Start a project</span>
              <small>→</small>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
