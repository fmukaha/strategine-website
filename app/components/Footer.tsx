"use client";

import Link from "next/link";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Reviews", href: "/reviews" },
];

export default function Footer() {
  return (
    <footer className="sg-footer-wrap">
      <section className="sg-newsletter">
        <h2>Latest Briefs & Tips</h2>

        <form>
          <input type="email" placeholder="e.g. john@organisation.com" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <section className="sg-footer simple-footer">
        <div className="sg-footer-links-row">
          <nav>
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="sg-socials">
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="Social">✣</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>

        <div className="sg-footer-bottom">
          <p>© {new Date().getFullYear()} Strategine. All rights reserved.</p>

          <button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="scroll-arrow">↑</span>
          </button>
        </div>
      </section>
    </footer>
  );
}

