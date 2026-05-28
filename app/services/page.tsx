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

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="sg-services-page">
        <section className="sg-services-hero-clean">
          <div className="sg-services-hero-copy">
            <span className="sg-page-kicker">Services</span>

            <h1>Build the systems behind responsible business.</h1>

            <p>
              We help organisations move from policies and scattered records to
              structured accountability systems for risk visibility, evidence,
              ownership, response, and leadership oversight.
            </p>

            <Link href="/contact" className="sg-services-hero-link">
              Start a project inquiry
              <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </div>

          <div className="sg-services-hero-panel" aria-label="Strategine services model">
            <div>
              <span>Risk signals</span>
              <strong>01</strong>
            </div>
            <div>
              <span>Evidence pathways</span>
              <strong>02</strong>
            </div>
            <div>
              <span>Ownership rhythm</span>
              <strong>03</strong>
            </div>
          </div>
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
