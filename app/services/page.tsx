import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Strategine",
  description:
    "Strategine helps organisations build responsible business intelligence systems for HREDD, risk visibility, evidence, accountability, and leadership oversight.",
};

const audiences = [
  {
    title: "Leadership teams",
    text: "Need confidence that commitments are backed by evidence, ownership, and review.",
  },
  {
    title: "Sustainability and ESG teams",
    text: "Need practical systems for HREDD, environmental due diligence, and responsible business oversight.",
  },
  {
    title: "Operations and field teams",
    text: "Need workflows that connect grievances, audits, incidents, field activity, and follow-up actions.",
  },
];

const pathways = [
  {
    title: "Due diligence system design",
    text: "Map risks, responsibilities, evidence needs, review routines, and escalation pathways.",
  },
  {
    title: "Risk and evidence architecture",
    text: "Define what data matters, where it comes from, how it is validated, and how it supports decisions.",
  },
  {
    title: "Grievance and response intelligence",
    text: "Structure grievance, incident, and remediation data so teams can see patterns, ownership, and follow-up status.",
  },
  {
    title: "Leadership reporting rhythm",
    text: "Build the management view that helps leaders track risk, response, progress, and unresolved exposure.",
  },
];

const process = [
  {
    step: "01",
    title: "Diagnose",
    text: "Understand workflows, data sources, governance gaps, reporting needs, and accountability risks.",
  },
  {
    step: "02",
    title: "Structure",
    text: "Design indicators, roles, evidence fields, escalation logic, review cycles, and decision points.",
  },
  {
    step: "03",
    title: "Build",
    text: "Translate the structure into usable tools, records, reporting views, and management routines.",
  },
  {
    step: "04",
    title: "Embed",
    text: "Support teams to use the system consistently, improve data quality, and turn insights into action.",
  },
];

const outputs = [
  "A practical accountability model",
  "Clear data and evidence requirements",
  "Defined ownership and escalation points",
  "Risk and response tracking structures",
  "Management-ready reporting logic",
  "A stronger basis for responsible business oversight",
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="sg-services-v2-page">
        <section className="sg-services-v2-hero">
          <span className="sg-page-kicker">Services</span>
          <h1>Build the systems behind responsible business.</h1>
          <p>
            Strategine helps organisations turn due diligence commitments into
            practical systems for risk visibility, evidence, accountability, and
            leadership oversight.
          </p>
        </section>

        <section className="sg-services-v2-split">
          <div>
            <span className="sg-section-kicker">What we build</span>
            <h2>Not reports. Operating systems for accountability.</h2>
          </div>

          <p>
            We design the structures that help teams know what risks exist, who
            owns them, what action has been taken, what evidence supports the
            response, and what still needs management attention.
          </p>
        </section>

        <section className="sg-services-v2-section">
          <div className="sg-services-v2-section-head">
            <span className="sg-section-kicker">Who it helps</span>
            <h2>Built for teams that need clarity.</h2>
          </div>

          <div className="sg-services-v2-card-grid">
            {audiences.map((item) => (
              <article className="sg-services-v2-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="sg-services-v2-section">
          <div className="sg-services-v2-section-head">
            <span className="sg-section-kicker">Service pathways</span>
            <h2>Where we can support.</h2>
          </div>

          <div className="sg-services-v2-pathways">
            {pathways.map((item) => (
              <article className="sg-services-v2-pathway" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="sg-services-v2-process">
          <div className="sg-services-v2-section-head">
            <span className="sg-section-kicker">How we work</span>
            <h2>Simple enough to use. Strong enough to govern.</h2>
          </div>

          <div className="sg-services-v2-process-grid">
            {process.map((item) => (
              <article className="sg-services-v2-process-card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="sg-services-v2-outputs">
          <div>
            <span className="sg-section-kicker">What you walk away with</span>
            <h2>A stronger accountability layer.</h2>
          </div>

          <div className="sg-services-v2-output-list">
            {outputs.map((item) => (
              <div key={item}>
                <CheckCircle2 size={18} strokeWidth={1.9} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="sg-services-v2-cta">
          <div>
            <span className="sg-section-kicker">Start here</span>
            <h2>Need to make due diligence easier to manage?</h2>
          </div>

          <div>
            <p>
              Tell us what you are trying to evidence, improve, or bring under
              control. We will help you structure the system behind it.
            </p>

            <Link href="/contact">
              Start a project inquiry
              <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
