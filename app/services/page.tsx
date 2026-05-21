import Header from "../components/Header";
import Footer from "../components/Footer";
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

const services = [
  {
    title: "Landscape diagnostic",
    text: "Map data sources, workflows, risks, evidence gaps, and reporting readiness.",
    icon: FileSearch,
  },
  {
    title: "Reporting architecture",
    text: "Define KPIs, ownership, escalation, action tracking, and reporting logic.",
    icon: BarChart3,
  },
  {
    title: "System build",
    text: "Build data models, dashboards, workflows, access rules, and review routines.",
    icon: GitBranch,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="sg-services-page">
        <section className="sg-standard-hero sg-services-hero">
          <span className="sg-page-kicker">Services</span>
          <h1>Responsible intelligence systems.</h1>
          <div className="sg-services-image" aria-label="Strategine services" />
        </section>

        <section className="sg-standard-intro sg-services-intro">
          <div>
            <span className="sg-section-kicker">What we do</span>
            <h2>Make risk visible.</h2>
          </div>

          <div className="sg-services-copy">
            <p>
              Strategine helps organisations turn complex operational data into
              clear intelligence for responsible business oversight.
            </p>
            <p>
              We structure the logic behind reporting, escalation, ownership,
              evidence, and action.
            </p>
            <p>
              The result is a practical system leadership can use routinely.
            </p>
          </div>
        </section>

        <section className="sg-standard-stats sg-services-stats">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="sg-services-stat">
                <span className="sg-stat-icon" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.7} />
                </span>
                <strong>{item.value}</strong>
                <small>{item.label}</small>
              </div>
            );
          })}
        </section>

        <section className="sg-service-grid-section">
          <span className="sg-section-kicker">How we help</span>
          <h2>Three practical entry points.</h2>

          <div className="sg-service-grid">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <article className="sg-service-card" key={item.title}>
                  <span className="sg-card-symbol" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
</article>
              );
            })}
          </div>
        </section>

        <section className="sg-impact-section">
          <span className="sg-section-kicker">Outcome</span>
          <h2>Clearer oversight. Faster action.</h2>

          <div className="sg-impact-points">
            <p>Leadership sees the signal.</p>
            <p>Teams understand ownership.</p>
            <p>Reports connect to evidence.</p>
          </div>
</section>
</main>

      <Footer />
    </>
  );
}
