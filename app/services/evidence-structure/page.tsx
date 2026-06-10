import Link from "next/link";

export const metadata = {
  title: "Evidence Structure | Strategine",
  description:
    "Structure evidence for credible oversight, due diligence, reporting, audits, and responsible business accountability.",
};

export default function EvidenceStructurePage() {
  return (
    <main className="sg-service-detail-page">
      <section className="sg-standard-hero sg-about-hero sg-service-detail-hero">
        <div>
          <span className="sg-page-kicker">Evidence Structure</span>
          <h1>Make evidence easier to collect, trust, and use.</h1>
        </div>

        <div className="sg-about-hero-image sg-service-detail-hero-image" />
      </section>

      <section className="sg-risk-context">
        <div>
          <span className="sg-section-kicker">Why this matters</span>
          <h2>Accountability depends on evidence that can stand up to scrutiny.</h2>
        </div>

        <div className="sg-risk-context-copy">
          <p>
            Many organisations are already taking action on human rights,
            environmental, social, grievance, audit, and operational issues. The
            challenge is that the evidence is often scattered across documents,
            emails, spreadsheets, forms, photos, reports, and informal updates.
          </p>

          <p>
            When evidence is not structured, it becomes difficult to prove what
            happened, who acted, what changed, and whether the issue was properly
            closed. This weakens reporting, audit readiness, buyer confidence,
            and internal decision-making.
          </p>

          <p>
            Evidence Structure helps define what information should be collected,
            where it should come from, who owns it, and how it supports credible
            oversight.
          </p>
        </div>
      </section>

      <section className="sg-service-collection">
        <div>
          <span className="sg-section-kicker">What to collect</span>
          <h2>Start with the evidence that proves action, ownership, and closure.</h2>
        </div>

        <div className="sg-service-collection-list">
          <div><span>01</span><p>Audit findings, non-conformities, and corrective action records.</p></div>
          <div><span>02</span><p>Grievance, incident, complaint, and remediation documentation.</p></div>
          <div><span>03</span><p>Photos, attendance records, field notes, inspection forms, and meeting minutes.</p></div>
          <div><span>04</span><p>Responsible owner, due date, status, verification, and closure evidence.</p></div>
          <div><span>05</span><p>Policies, procedures, training records, approvals, and management review notes.</p></div>
        </div>
      </section>

      <section className="sg-service-method">
        <div>
          <span className="sg-section-kicker">How we structure it</span>
          <h2>We turn scattered proof into a usable accountability record.</h2>
        </div>

        <div className="sg-service-method-grid">
          <article>
            <span>01</span>
            <h3>Evidence types</h3>
            <p>Define the records needed for each issue, action, decision, and closure point.</p>
          </article>

          <article>
            <span>02</span>
            <h3>Ownership</h3>
            <p>Clarify who provides, reviews, verifies, and approves evidence.</p>
          </article>

          <article>
            <span>03</span>
            <h3>Traceability</h3>
            <p>Connect each evidence item to the issue, location, date, owner, and action taken.</p>
          </article>

          <article>
            <span>04</span>
            <h3>Readiness</h3>
            <p>Prepare evidence so it can support audits, reporting, buyer requests, and leadership review.</p>
          </article>
        </div>
      </section>

      <section className="sg-service-useful">
        <div>
          <span className="sg-section-kicker">Useful when</span>
          <h2>This service fits when action exists but proof is difficult to assemble.</h2>
        </div>

        <div className="sg-service-useful-copy">
          <p>
            It is especially useful when teams are doing the work, but evidence
            is hard to find, inconsistent, incomplete, or not connected to the
            original issue.
          </p>

          <p>
            It also helps when buyers, auditors, boards, regulators, or internal
            teams need clearer proof that issues are being identified, addressed,
            verified, and closed.
          </p>

          <Link href="/contact#project-inquiry" className="sg-text-link">
            Start a project inquiry
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}