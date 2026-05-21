import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ArrowUpRight,
  FileSearch,
  Globe2,
  Leaf,
  ListChecks,
  Scale,
  Search,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Insights | HREDD, Responsible Business & Accountability",
  description:
    "Strategine insights on HREDD, human rights due diligence, responsible business conduct, sustainability oversight, ESG accountability, and evidence systems.",
  keywords: [
    "HREDD insights",
    "human rights due diligence",
    "responsible business conduct",
    "corporate responsibility",
    "UNGP",
    "OECD due diligence",
    "ESG accountability",
    "sustainability oversight",
    "remediation tracking",
  ],
  alternates: {
    canonical: "/insights",
  },
};

const insights = [
  {
    title: "Why policies are not enough for HREDD",
    tag: "HREDD",
    theme: "Due diligence",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    href: "/insights/hredd-policy-to-proof",
    icon: Scale,
  },
  {
    title: "Turning risk signals into leadership action",
    tag: "Risk",
    theme: "Accountability",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    href: "/insights/risk-signals-leadership-action",
    icon: ShieldCheck,
  },
  {
    title: "What credible evidence looks like",
    tag: "Evidence",
    theme: "Reporting",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    href: "/insights/credible-evidence-responsible-business",
    icon: FileSearch,
  },
  {
    title: "The role of grievance data in accountability",
    tag: "Grievance",
    theme: "Remediation",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    href: "/insights/grievance-data-accountability",
    icon: ListChecks,
  },
  {
    title: "Responsible business conduct beyond compliance",
    tag: "RBC",
    theme: "Governance",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    href: "/insights/responsible-business-beyond-compliance",
    icon: Globe2,
  },
  {
    title: "Environmental due diligence and operational oversight",
    tag: "Environment",
    theme: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    href: "/insights/environmental-due-diligence-oversight",
    icon: Leaf,
  },
];

const themes = [
  "HREDD",
  "UNGP",
  "OECD Due Diligence",
  "Responsible Business Conduct",
  "Evidence",
  "Remediation",
  "ESG Accountability",
];

export default function InsightsPage() {
  return (
    <>
      <Header />

      <main className="sg-insights-page">
        <section className="sg-standard-hero sg-insights-hero">
          <span className="sg-page-kicker">Insights</span>
          <h1>Ideas for responsible business accountability.</h1>
        </section>

        <section className="sg-insights-search" aria-label="Search insights">
          <div className="sg-insights-search-box">
            <Search size={20} strokeWidth={1.8} aria-hidden="true" />
            <input
              type="search"
              placeholder="Search HREDD, UNGP, evidence, remediation..."
              aria-label="Search insights by keyword"
            />
          </div>

          <div className="sg-insights-tags" aria-label="Insight themes">
            {themes.map((theme) => (
              <button type="button" key={theme}>
                {theme}
              </button>
            ))}
          </div>
        </section>

        <section className="sg-insights-grid" aria-label="Latest insights">
          {insights.map((item) => {
            const Icon = item.icon;

            return (
              <article className="sg-insight-card" key={item.title}>
                <a href={item.href} aria-label={item.title}>
                  <div
                    className="sg-insight-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                    aria-hidden="true"
                  />

                  <div className="sg-insight-meta">
                    <span>{item.tag}</span>
                    <small>{item.theme}</small>
                  </div>

                  <div className="sg-insight-title-row">
                    <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                    <h2>{item.title}</h2>
                  </div>

                  <span className="sg-insight-link">
                    Read insight <ArrowUpRight size={16} strokeWidth={1.8} />
                  </span>
                </a>
              </article>
            );
          })}
        </section>
      </main>

      <Footer />
    </>
  );
}
