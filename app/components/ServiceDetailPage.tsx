import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServiceContent } from "../services/serviceContent";

function frameworkBadge(label: string) {
  const words = label
    .replace("&", "")
    .split(" ")
    .filter(Boolean);

  if (label.includes("Fairtrade")) return "FT";
  if (label.includes("Rainforest")) return "RA";
  if (label.includes("ESG")) return "ESG";
  if (label.includes("Buyer")) return "BD";
  if (label.includes("Audit")) return "AU";
  if (label.includes("Corrective")) return "CA";
  if (label.includes("Grievance")) return "GM";
  if (label.includes("Human Rights")) return "HR";

  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function ServiceDetailPage({ service }: { service: ServiceContent }) {
  return (
    <main className="sg-service-template-page">
      <section className="sg-service-template-hero">
        <div className="sg-service-breadcrumb">
          <Link href="/services">Services</Link>
          <span>/</span>
          <span>{service.eyebrow}</span>
        </div>

        <h1>{service.title}</h1>
        <p>{service.intro}</p>

        <Link href="/contact#project-inquiry" className="sg-service-template-button">
          {service.cta}
          <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
        </Link>
      </section>

      <section className="sg-service-template-split">
        <div>
          <span className="sg-section-kicker">Context</span>
          <h2>{service.solvesTitle}</h2>
        </div>

        <div>
          {service.solvesText.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </section>

      <section className="sg-service-template-section">
        <div className="sg-service-template-section-head">
          <span className="sg-section-kicker">Structure</span>
          <h2>{service.modulesTitle}</h2>
        </div>

        <div className="sg-service-template-card-grid">
          {service.modules.map((item) => (
            <article key={item.title}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sg-service-template-section">
        <div className="sg-service-template-section-head">
          <span className="sg-section-kicker">Frameworks</span>
          <h2>Frameworks we work with</h2>
        </div>

        <div className="sg-service-template-frameworks">
          <div className="sg-service-template-framework-list">
            {service.frameworks.map((item) => (
              <div key={item} className="sg-service-template-framework-item">
                <span className="sg-service-template-framework-badge">
                  {frameworkBadge(item)}
                </span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>

          <p>{service.frameworksNote}</p>
        </div>
      </section>

      <section className="sg-service-template-change">
        <div>
          <span className="sg-section-kicker">After implementation</span>
          <h2>{service.changeTitle}</h2>
          <p>{service.changeIntro}</p>
        </div>

        <div className="sg-service-template-change-list">
          {service.changes.map((item) => (
            <article key={item.title}>
              <span>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sg-service-template-cta">
        <div>
          <span className="sg-section-kicker">Start here</span>
          <h2>Ready to move faster?</h2>
          <p>Let’s discuss your context and the structure you need.</p>
        </div>

        <Link href="/contact#project-inquiry">
          Start a project inquiry
          <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
