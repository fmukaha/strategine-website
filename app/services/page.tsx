import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Services | Strategine",
  description:
    "Strategine services for responsible business intelligence, HREDD, risk visibility, evidence, and accountability systems.",
};


const serviceFoundations = [
  {
    title: "Risk visibility",
    text: "Bring scattered signals from grievances, audits, field activity, incidents, supplier records, and worker feedback into one clearer management view.",
  },
  {
    title: "Evidence pathways",
    text: "Define what evidence is needed, where it should come from, who owns it, and how it supports credible due diligence oversight.",
  },
  {
    title: "Accountability routines",
    text: "Turn commitments into ownership, escalation, follow-up, review, and response tracking routines that teams can actually use.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="sg-services-page">
        <section className="sg-services-top-hero">
          <span className="sg-page-kicker">Services</span>
          <h1>Build the systems behind responsible business.</h1>
          <p>
            We help organisations move from policies and scattered records to
            structured accountability systems for risk visibility, evidence,
            ownership, and leadership oversight.
          </p>
        </section>
        <section className="sg-services-foundation">
          <div className="sg-services-split-head">
            <div>
              <span className="sg-section-kicker">What we build</span>
              <h2>Operating systems for accountability.</h2>
            </div>

            <p>
              We design the structures that help teams know what risks exist,
              who owns them, what action has been taken, what evidence supports
              the response, and what still needs management attention.
            </p>
          </div>

          <div className="sg-services-foundation-grid">
            {serviceFoundations.map((item) => (
              <article className="sg-services-foundation-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}