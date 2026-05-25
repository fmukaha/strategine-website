import type { Metadata } from "next";
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

      <main className="sg-home-reset-page">
        <section className="sg-home-reset-hero">
          <span className="sg-page-kicker">Strategine</span>

          <h1>Responsible business intelligence.</h1>

          <p>
            We help organisations make risk, accountability, evidence, and
            due diligence easier to see, manage, and improve.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
