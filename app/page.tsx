import type { Metadata } from "next";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Strategine | Responsible Business Intelligence",
  description:
    "Strategine helps organisations build accountability systems for HREDD, responsible business conduct, evidence, risk visibility, and leadership oversight.",
};

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="sg-home-evergreen-page">
        <section className="sg-home-evergreen-hero">
          <div className="sg-home-evergreen-content">
            <span className="sg-page-kicker">Strategine</span>

            <h1>
              Make due diligence <span>visible</span>
            </h1>

            <p>
              We help organisations see risk, assign ownership, track response,
              and evidence progress before issues become reputational, legal,
              operational, or buyer-facing problems.
            </p>

            <div className="sg-home-evergreen-actions">
              <Link href="/services">Explore services</Link>
              <Link href="/contact">Start a project</Link>
            </div>
          </div>

          <div className="sg-home-evergreen-badge" aria-label="Strategine focus">
            <strong>3</strong>
            <span>Data maturity layers</span>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
