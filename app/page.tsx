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
              Responsible business intelligence for <span>risk, accountability, and action.</span>
            </h1>

            <div className="hero-actions">
              <a href="/services" className="hero-btn lime">
                Explore services
              </a>

              <a href="/contact" className="hero-btn dark">
                Start a project
              </a>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="trust-item">
            <span className="trust-icon">✦</span>
            <p>Decision intelligence for responsible operations</p>
          </div>

          <div className="trust-item">
            <span className="trust-icon">✦</span>
            <p>Built around governance, evidence, and reporting</p>
          </div>

          <div className="trust-item">
            <span className="trust-icon">✦</span>
            <p>Designed for accountability and management action</p>
          </div>
        </section>

        <ContactCta />
      </main>

      <Footer />
    </>
  );
}

