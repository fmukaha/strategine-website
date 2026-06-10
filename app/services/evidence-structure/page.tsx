import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import ServicePageShell from "../../components/ServicePageShell";

export const metadata: Metadata = {
  title: "Evidence Structure | Strategine Services",
  description:
    "Strategine helps organisations structure evidence for due diligence, audits, buyer requests, management review, and responsible business accountability.",
};

const modules = [
  {
    title: "Evidence mapping",
    text: "Identify where evidence currently sits across grievances, audits, incidents, corrective actions, training, inspections, reports, and field records.",
    output: "A clear map of evidence sources and gaps.",
  },
  {
    title: "Evidence standard",
    text: "Define what information should be collected, how it should be recorded, and what is required to prove action, ownership, and closure.",
    output: "A practical evidence collection standard.",
  },
  {
    title: "Ownership structure",
    text: "Clarify who collects, reviews, updates, verifies, and approves evidence before it is used for reporting or external assurance.",
    output: "Clear evidence roles and responsibilities.",
  },
  {
    title: "Review readiness",
    text: "Shape evidence so it can support audits, buyer requests, board reporting, management review, and internal accountability.",
    output: "A stronger evidence review layer.",
  },
];

const outputs = [
  "Evidence source map",
  "Minimum evidence standard",
  "Evidence ownership model",
  "Verification and closure logic",
  "Audit and buyer-readiness structure",
  "Priority actions for implementation",
];

export default function EvidenceStructurePage() {
  return (
    <ServicePageShell>
        <section className="sg-standard-hero sg-about-hero sg-service-detail-hero">
          <span className="sg-page-kicker">Evidence Structure</span>
          <h1>Make evidence easier to collect, trust, and use.</h1>
          <div
            className="sg-about-hero-image sg-evidence-structure-hero-image"
            aria-label="Evidence structure service"
          />
        </section>

        <section className="sg-service-detail-split">
          <div>
            <span className="sg-section-kicker">Who this is for</span>
            <h2>For teams who need proof that can stand up to scrutiny.</h2>
          </div>

          <div>
            <p>
              This service is for organisations where work is already happening,
              but the evidence is scattered across documents, emails,
              spreadsheets, forms, photos, reports, and informal updates.
            </p>

            <p>
              We help teams define what evidence should be collected, where it
              should come from, who owns it, and how it supports credible
              oversight, reporting, audits, and buyer confidence.
            </p>
          </div>
        </section>

        <section className="sg-service-detail-modules">
          <div className="sg-service-detail-section-head">
            <span className="sg-section-kicker">What we build</span>
            <h2>A practical evidence structure.</h2>
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
            <h2>Good work is difficult to defend when the proof is hard to find.</h2>
          </div>

          <p>
            If evidence is spread across teams, locations, folders, emails, and
            spreadsheets, it becomes difficult to show what happened, what action
            was taken, who was responsible, and whether the issue was properly
            closed.
          </p>
        </section>

        <section className="sg-service-detail-outputs">
          <div>
            <span className="sg-section-kicker">What you walk away with</span>
            <h2>Cleaner proof. Stronger accountability.</h2>
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
            <h2>Need evidence you can rely on?</h2>
          </div>

          <div>
            <p>
              Tell us what evidence you are trying to organise. We will help you
              structure the records, ownership, and review logic behind it.
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