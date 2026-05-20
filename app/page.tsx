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
              Intelligence systems for responsible <span>leadership.</span>
            </h1>

            <div className="hero-actions">
              <a href="/services" className="hero-btn lime">Explore services</a>
              <a href="/contact" className="hero-btn dark">Start a project</a>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="trust-item">
            <span className="trust-icon">1</span>
            <p>Responsible business intelligence</p>
          </div>

          <div className="trust-item">
            <span className="trust-icon">2</span>
            <p>Evidence-ready reporting</p>
          </div>

          <div className="trust-item">
            <span className="trust-icon">3</span>
            <p>Leadership decision systems</p>
          </div>
        </section>

        <ContactCta />
      </main>

      <Footer />
    </>
  );
}
