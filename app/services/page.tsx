import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Services | Strategine",
  description:
    "Strategine services for responsible business intelligence, HREDD, risk visibility, evidence, and accountability systems.",
};

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
      </main>

      <Footer />
    </>
  );
}