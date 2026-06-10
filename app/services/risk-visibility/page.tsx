import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import ServicePageShell from "../../components/ServicePageShell";

export const metadata: Metadata = {
  title: "Risk Visibility | Strategine Services",
  description:
    "Strategine helps leadership teams see risk earlier by connecting grievances, audits, incidents, field activity, supplier records, and worker feedback into one management view.",
};

const modules = [
  {
    title: "Signal mapping",
    text: "Identify where risk signals currently sit across grievances, audits, incidents, field reports, supplier records, and worker feedback.",
    output: "A clear map of risk sources and blind spots.",
  },
  {
    title: "Risk logic",
    text: "Define what should be flagged, how severity is understood, what patterns matter, and what needs escalation.",
    output: "A practical risk classification model.",
  },
  {
    title: "Ownership structure",
    text: "Clarify who owns each signal, who reviews it, who follows up, and when leadership attention is required.",
    output: "Clear responsibility and escalation points.",
  },
  {
    title: "Management view",
    text: "Shape the view leadership needs to track exposure, unresolved issues, action status, and recurring patterns.",
    output: "A reliable oversight layer.",
  },
];

const outputs = [
  "Risk signal map",
  "Visibility gaps and blind spots",
  "Escalation logic",
  "Ownership model",
  "Leadership reporting structure",
  "Priority actions for implementation",
];

export default function RiskVisibilityPage() {
  return (
    <ServicePageShell>
        <section className="sg-standard-hero sg-about-hero sg-service-detail-hero">
          <span className="sg-page-kicker">Risk Visibility</span>
          <h1>See risk earlier, before it becomes expensive.</h1>
          <div
            className="sg-about-hero-image sg-risk-visibility-hero-image"
            aria-label="Risk visibility service"
          />
        </section>

        <section className="sg-service-detail-split">
          <div>
            <span className="sg-section-kicker">Who this is for</span>
            <h2>For leaders who need fewer surprises.</h2>
          </div>

          <div>
            <p>
              This service is for organisations where risk signals exist, but
              they are spread across teams, records, systems, locations, and
              informal follow-up.
            </p>

            <p>
              We help leadership see what is emerging, what is unresolved, who
              owns response, and where weak visibility creates exposure.
            </p>
          </div>
        </section>

        <section className="sg-service-detail-modules">
          <div className="sg-service-detail-section-head">
            <span className="sg-section-kicker">What we build</span>
            <h2>A practical risk visibility layer.</h2>
          </div>

          <div className="sg-service-detail-module-grid">
            {modules.map((item) => (
              <article className="sg-service-detail-module" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <div className="sg-service-detail-output">
                  <span>{item.output}</span>
                  <strong aria-hidden="true">↗</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="sg-service-detail-dark">
          <div>
            <span className="sg-section-kicker">When this matters</span>
            <h2>You should not wait for a crisis to discover what your teams already knew.</h2>
          </div>

          <p>
            If grievances, audit findings, incidents, supplier concerns, or field
            observations are being handled in disconnected ways, leadership may
            only see the issue after it has already escalated.
          </p>
        </section>

        <section className="sg-service-detail-outputs">
          <div>
            <span className="sg-section-kicker">What you walk away with</span>
            <h2>Clearer signals. Stronger oversight.</h2>
          </div>

          <div className="sg-service-detail-output-list">
            {outputs.map((item) => (
              <div key={item}>
                <CheckCircle2 size={18} strokeWidth={1.9} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="sg-service-detail-cta">
          <div>
            <span className="sg-section-kicker">Start here</span>
            <h2>Need to see risk earlier?</h2>
          </div>

          <div>
            <p>
              Tell us what risk signals you are trying to bring under control.
              We will help you structure the visibility layer behind them.
            </p>

            <Link href="/contact#project-inquiry">
              Start a project inquiry
              <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </ServicePageShell>
  );
}
