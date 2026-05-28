import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ArrowUpRight,
  BarChart3,
  FileCheck2,
  ListChecks,
  Radar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Strategine",
  description:
    "Strategine services for responsible business intelligence, HREDD, risk visibility, evidence, accountability, and leadership oversight.",
};

const problemCards = [
  {
    title: "I need risk visibility",
    text: "Bring scattered signals from grievances, audits, field activity, incidents, supplier records, and worker feedback into one clearer management view.",
    href: "#risk-visibility",
    icon: Radar,
    tag: "Risk signals",
  },
  {
    title: "I need evidence structure",
    text: "Define what evidence is needed, where it should come from, who owns it, and how it supports credible due diligence oversight.",
    href: "#evidence-structure",
    icon: FileCheck2,
    tag: "Evidence",
  },
  {
    title: "I need response tracking",
    text: "Structure grievance, incident, remediation, escalation, and follow-up data so teams can see what is moving and what is stuck.",
    href: "#response-tracking",
    icon: ListChecks,
    tag: "Response",
  },
  {
    title: "I need leadership reporting",
    text: "Build the management rhythm that helps leaders track exposure, progress, unresolved issues, and decisions needed.",
    href: "#leadership-reporting",
    icon: BarChart3,
    tag: "Oversight",
  },
];


const systemFlow = [
  {
    label: "Risk signals",
    text: "Grievances, audits, incidents, field activity, supplier records, and worker feedback.",
  },
  {
    label: "Evidence",
    text: "Documents, actions, dates, owners, status, validation notes, and supporting records.",
  },
  {
    label: "Ownership",
    text: "Clear responsibility for follow-up, escalation, review, and closure.",
  },
  {
    label: "Response",
    text: "Track action taken, unresolved exposure, remediation status, and next decisions.",
  },
  {
    label: "Leadership view",
    text: "A practical management layer for oversight, reporting, and accountability.",
  },
];


const servicePathways = [
  {
    title: "Risk visibility architecture",
    text: "Map risk signals across grievances, audits, incidents, field activity, supplier records, and worker feedback.",
    outcome: "A clearer view of what needs attention.",
    href: "#risk-visibility",
  },
  {
    title: "Evidence and data structure",
    text: "Define the fields, records, source logic, validation checks, and evidence requirements needed for credible oversight.",
    outcome: "A practical evidence model teams can maintain.",
    href: "#evidence-structure",
  },
  {
    title: "Grievance and response intelligence",
    text: "Structure grievance, incident, remediation, escalation, and follow-up data into a usable management layer.",
    outcome: "A way to see what is moving, stuck, or unresolved.",
    href: "#response-tracking",
  },
  {
    title: "Ownership and escalation design",
    text: "Clarify who owns each risk, who reviews progress, when escalation happens, and what closure means.",
    outcome: "Clear responsibility instead of loose follow-up.",
    href: "#ownership",
  },
  {
    title: "Leadership reporting rhythm",
    text: "Design the management view leaders need to track exposure, progress, unresolved issues, and decisions required.",
    outcome: "A repeatable oversight rhythm.",
    href: "#leadership-reporting",
  },
  {
    title: "Implementation support",
    text: "Help translate the structure into tools, routines, reporting views, and team habits that can be used consistently.",
    outcome: "A system that survives beyond the first report.",
    href: "#implementation",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="sg-services-page">
        <section className="sg-standard-hero sg-about-hero sg-services-hero">
          <span className="sg-page-kicker">Services</span>
          <h1>Build the systems behind responsible business.</h1>
          <div
            className="sg-about-hero-image sg-services-hero-image"
            aria-label="Strategine responsible business services"
          />
        </section>

        <section className="sg-services-problem-selector">
          <div className="sg-services-selector-head">
            <div>
              <span className="sg-section-kicker">Choose the problem</span>
              <h2>Start with what needs to become visible.</h2>
            </div>

            <p>
              Most responsible business challenges are not caused by lack of
              commitment. They come from weak visibility, unclear ownership,
              scattered evidence, and inconsistent follow-up.
            </p>
          </div>

          <div className="sg-services-problem-grid">
            {problemCards.map((item) => {
              const Icon = item.icon;

              return (
                <Link href={item.href} className="sg-services-problem-card" key={item.title}>
                  <div className="sg-services-problem-top">
                    <span>{item.tag}</span>
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                  <span className="sg-services-problem-arrow" aria-hidden="true">
                    <ArrowUpRight size={18} strokeWidth={1.8} />
                  </span>
                </Link>
              );
            })}
          </div></section>

        
        <section className="sg-services-matrix-section">
          <div className="sg-services-matrix-intro">
            <span className="sg-section-kicker">Service pathways</span>

            <div>
              <h2>Choose the accountability layer you need to strengthen.</h2>
              <p>
                Each pathway can stand alone or connect into a wider responsible
                business intelligence system.
              </p>
            </div>
          </div>

          <div className="sg-services-matrix-grid">
            {servicePathways.map((item) => (
              <a href={item.href} className="sg-services-matrix-item" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <div className="sg-services-matrix-outcome">
                  <span>{item.outcome}</span>
                  <strong aria-hidden="true">↗</strong>
                </div>
              </a>
            ))}

            <div className="sg-services-matrix-cta">
              <span className="sg-section-kicker">Not sure where to start?</span>
              <h3>Tell us what you are trying to evidence or bring under control.</h3>
              <a href="/contact">Start a project inquiry</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
