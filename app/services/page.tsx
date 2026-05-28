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

        <section className="sg-services-system-flow">
          <div className="sg-services-system-copy">
            <span className="sg-section-kicker">The system we build</span>
            <h2>From scattered signals to managed accountability.</h2>

            <p>
              We help teams connect the signals they already have into a clear
              operating model for evidence, ownership, response, and leadership
              review.
            </p>
          </div>

          <div className="sg-services-system-map" aria-label="Strategine accountability system flow">
            {systemFlow.map((item, index) => (
              <article className="sg-services-system-step" key={item.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.label}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
