<<<<<<< HEAD
﻿"use client";

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



=======
export default function Home() {
  return (
    <main className="min-h-screen bg-[#1B4D3E] text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <img src="/strategine_logo_white.png" alt="Strategine" className="h-8" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#what-we-do" className="hover:text-white transition">What We Do</a>
          <a href="#insights" className="hover:text-white transition">Insights</a>
          <a href="#contact" className="hover:text-[#A8D400] transition font-semibold text-white">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="inline-block bg-[#A8D400]/10 border border-[#A8D400]/30 text-[#A8D400] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          Responsible Business Intelligence
        </div>
        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight mb-6">
          We build the intelligence layer that proves responsible business is actually happening.
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-10">
          From fragmented operational data to governed, audit-ready insight — across welfare, human rights, safety, and environmental obligations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="bg-[#A8D400] text-[#1B4D3E] font-bold px-8 py-4 rounded-full hover:bg-[#A8D400]/90 transition">
            Start the Conversation
          </a>
          <a href="#what-we-do" className="border border-white/20 text-white px-8 py-4 rounded-full hover:border-white/50 transition">
            What We Do
          </a>
        </div>
      </section>
    </main>
  )
}
>>>>>>> 00cabe3960b01eec9557125a51f4d6ebaf97ece7
