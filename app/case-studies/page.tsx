import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCta from "../components/ContactCta";
import { ArrowRight, BarChart3, FileSearch, ShieldCheck } from "lucide-react";

const caseStudies = [
  {
    title: "Risk visibility",
    sector: "Responsible business",
    text: "Structuring fragmented operational data into a clear view of risk, evidence, and action.",
    icon: FileSearch,
  },
  {
    title: "Reporting logic",
    sector: "Accountability",
    text: "Designing KPI and ownership logic that supports routine reporting and management review.",
    icon: BarChart3,
  },
  {
    title: "Oversight rhythm",
    sector: "Governance",
    text: "Helping teams move from informal follow-up to structured tracking and decision routines.",
    icon: ShieldCheck,
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />

      <main className="sg-placeholder-page sg-case-page">
        <section className="sg-standard-hero sg-case-hero">
          <span className="sg-page-kicker">Case studies</span>
          <h1>Applied intelligence work.</h1>
        </section>

        <section className="sg-standard-intro sg-case-intro">
          <div>
            <span className="sg-section-kicker">How it shows up</span>
            <h2>From insight to action.</h2>
          </div>

          <div className="sg-services-copy">
            <p>
              Our work helps organisations understand operational reality, build
              better reporting structures, and strengthen accountability.
            </p>
            <p>
              These examples show the type of problems Strategine is built to
              solve across responsible business operations.
            </p>
          </div>
        </section>

        <section className="sg-service-grid-section">
          <span className="sg-section-kicker">Examples</span>
          <h2>Reusable patterns. Practical outcomes.</h2>

          <div className="sg-service-grid">
            {caseStudies.map((item) => {
              const Icon = item.icon;

              return (
                <article className="sg-service-card" key={item.title}>
                  <span className="sg-card-symbol" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>

                  <small>{item.sector}</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  <a href="/contact" className="sg-card-arrow" aria-label={item.title}>
                    <ArrowRight size={18} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <ContactCta />
      </main>

      <Footer />
    </>
  );
}
