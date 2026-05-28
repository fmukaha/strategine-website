import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ExternalLink,
  SearchCheck,
  FileCheck2,
  UsersRound,
  ListChecks,
  Layers3,
  Network,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Strategine",
  description:
    "Strategine helps organisations build responsible business intelligence systems for HREDD, risk visibility, evidence, accountability, and leadership oversight.",
};

const stats = [
  { value: "4", label: "Service pathways", icon: Network },
  { value: "3", label: "Accountability layers", icon: Layers3 },
  { value: "1", label: "Management system", icon: ShieldCheck },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="sg-about-page">
        <section className="sg-standard-hero sg-about-hero">
          <span className="sg-page-kicker">Services</span>
          <h1>Build the systems behind responsible business.</h1>
          <div
            className="sg-about-hero-image"
            aria-label="Strategine responsible business services"
          />
        </section>

        <section className="sg-standard-intro sg-about-intro-section">
          <div>
            <span className="sg-section-kicker">What we build</span>
            <h2>Operating systems for accountability.</h2>
          </div>

          <div className="sg-about-copy">
            <p>
              Strategine helps organisations move from policies and scattered
              records to structured accountability systems for risk visibility,
              evidence, ownership, and leadership oversight.
            </p>

            <p>
              We design the structures that help teams know what risks exist,
              who owns them, what action has been taken, what evidence supports
              the response, and what still needs management attention.
            </p>

            <p>
              The work supports HREDD, environmental due diligence, responsible
              business conduct, sustainability oversight, and credible evidence
              of action.
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
            <span className="sg-section-kicker">Service pathways</span>
            <h2>Where we support.</h2>

            <p>
              We support organisations that need to make due diligence easier to
              manage across governance, field operations, supplier engagement,
              grievance response, evidence tracking, and leadership reporting.
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
              : identify impacts, prevent and mitigate harm, track
              effectiveness, enable remedy, and communicate progress with
              credible evidence.
            </p>
          </div>

          <div
            className="sg-about-mission-image"
            aria-label="Strategine service pathways"
          />
        </section>

        <section className="sg-about-accountability">
          <div className="sg-about-accountability-intro">
            <div>
              <span className="sg-section-kicker">How we work</span>
              <h2>From risk signals to management action.</h2>
            </div>

            <div>
              <p>
                We start by understanding existing workflows, data sources,
                evidence gaps, ownership structures, escalation points, and
                reporting needs.
              </p>

              <p>
                We then structure the accountability model: indicators, roles,
                evidence fields, review cycles, response tracking, and decision
                points that teams can use consistently.
              </p>

              <p>
                When the structure is clear, we help translate it into practical
                tools, records, reporting views, and routines that support
                better oversight.
              </p>
            </div>
          </div>

          <div className="sg-about-accountability-tabs">
            <div>
              <span><SearchCheck size={18} strokeWidth={1.8} /></span><p>Diagnose risk signals</p>
            </div>
            <div>
              <span><FileCheck2 size={18} strokeWidth={1.8} /></span><p>Structure evidence</p>
            </div>
            <div>
              <span><UsersRound size={18} strokeWidth={1.8} /></span><p>Assign ownership</p>
            </div>
            <div>
              <span><ListChecks size={18} strokeWidth={1.8} /></span><p>Track response</p>
            </div>
          </div>
        </section>

        <section className="sg-about-difference">
          <span className="sg-section-kicker">What clients walk away with</span>

          <h2>A stronger accountability layer.</h2>

          <p className="sg-about-difference-intro">
            The output is not just a report. It is a practical structure for
            seeing risk, assigning responsibility, tracking action, and
            evidencing progress.
          </p>

          <div className="sg-about-difference-grid">
            <article>
              <span>01</span>
              <h3>Risk visibility</h3>
              <p>
                A clearer view of the signals that matter across grievances,
                audits, field activity, incidents, supplier records, and worker
                feedback.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Evidence pathways</h3>
              <p>
                Clear evidence requirements, ownership points, source logic, and
                validation routines for credible oversight.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Response tracking</h3>
              <p>
                Structures for tracking action, escalation, follow-up,
                remediation, review, and unresolved exposure.
              </p>
            </article>
          </div>
        </section>

        <section className="sg-about-accountability">
          <div className="sg-about-accountability-intro">
            <div>
              <span className="sg-section-kicker">Start here</span>
              <h2>Need to make due diligence easier to manage?</h2>
            </div>

            <div>
              <p>
                Tell us what you are trying to evidence, improve, or bring under
                control. We will help you structure the system behind it.
              </p>

              <p>
                <Link href="/contact" className="sg-inline-link">
                  Start a project inquiry
                  <ExternalLink size={14} strokeWidth={1.8} aria-hidden="true" />
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
