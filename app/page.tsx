"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactCta from "./components/ContactCta";

export default function Home() {
  return (
    <>
      <Header />

      <main className="home">
        <section className="hero">
          <div className="hero-content">
            <h1>
              Intelligence systems
              <br />
              for responsible <span>leadership.</span>
            </h1>

            <div className="hero-actions">
              <a href="/services" className="hero-btn lime">Explore services</a>
              <a href="/contact" className="hero-btn dark">Start a project</a>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="trust-item"><span className="trust-icon">?</span> Responsible business intelligence</div>
          <div className="trust-item"><span className="trust-icon">?</span> Evidence-ready reporting</div>
          <div className="trust-item"><span className="trust-icon">?</span> Leadership decision systems</div>
        </section>
      <ContactCta />
    </main>

      <Footer />
    </>
  );
}



