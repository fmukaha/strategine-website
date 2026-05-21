"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ArrowUpRight,
  FileCheck2,
  FileSearch,
  Globe2,
  ListChecks,
  Scale,
  Search,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const insights = [
  {
    title: "Why policies are not enough for HREDD",
    tag: "Policy commitment",
    theme: "Policy commitment",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    href: "/insights/hredd-policy-to-proof",
    icon: Scale,
  },
  {
    title: "Turning risk signals into leadership action",
    tag: "Risk identification",
    theme: "Risk identification",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    href: "/insights/risk-signals-leadership-action",
    icon: ShieldCheck,
  },
  {
    title: "What credible evidence looks like",
    tag: "Tracking effectiveness",
    theme: "Tracking effectiveness",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    href: "/insights/credible-evidence-responsible-business",
    icon: FileSearch,
  },
  {
    title: "The role of grievance data in accountability",
    tag: "Remedy and grievance",
    theme: "Remedy and grievance",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    href: "/insights/grievance-data-accountability",
    icon: ListChecks,
  },
  {
    title: "Responsible business conduct beyond compliance",
    tag: "Prevention and mitigation",
    theme: "Prevention and mitigation",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    href: "/insights/responsible-business-beyond-compliance",
    icon: Globe2,
  },
  {
    title: "Environmental due diligence and operational oversight",
    tag: "Risk identification",
    theme: "Risk identification",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    href: "/insights/environmental-due-diligence-oversight",
    icon: FileCheck2,
  },
  {
    title: "How companies track whether action is working",
    tag: "Tracking effectiveness",
    theme: "Tracking effectiveness",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    href: "/insights/tracking-effectiveness-hredd",
    icon: ListChecks,
  },
  {
    title: "What meaningful remediation requires",
    tag: "Remedy and grievance",
    theme: "Remedy and grievance",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    href: "/insights/meaningful-remediation",
    icon: ShieldCheck,
  },
  {
    title: "Communicating progress without greenwashing",
    tag: "Communication and reporting",
    theme: "Communication and reporting",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    href: "/insights/communicating-progress-responsibly",
    icon: Globe2,
  },
];

const themes = [
  "All themes",
  "Policy commitment",
  "Risk identification",
  "Prevention and mitigation",
  "Tracking effectiveness",
  "Remedy and grievance",
  "Communication and reporting",
];

export default function InsightsClient() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("All themes");
  const [visibleCount, setVisibleCount] = useState(6);

  const themeCounts = useMemo(() => {
    return themes.reduce<Record<string, number>>((acc, item) => {
      acc[item] =
        item === "All themes"
          ? insights.length
          : insights.filter((insight) => insight.theme === item).length;
      return acc;
    }, {});
  }, []);

  const filteredInsights = useMemo(() => {
    const search = query.trim().toLowerCase();

    return insights.filter((item) => {
      const matchesTheme = theme === "All themes" || item.theme === theme;
      const matchesSearch =
        !search ||
        item.title.toLowerCase().includes(search) ||
        item.theme.toLowerCase().includes(search) ||
        item.tag.toLowerCase().includes(search);

      return matchesTheme && matchesSearch;
    });
  }, [query, theme]);

  const visibleInsights = filteredInsights.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(6);
  }, [query, theme]);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 520;

      if (nearBottom) {
        setVisibleCount((current) =>
          Math.min(current + 3, filteredInsights.length)
        );
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [filteredInsights.length]);

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
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search HREDD, UNGP, remedy, evidence..."
              aria-label="Search insights by keyword"
            />
          </div>

          <label className="sg-insights-theme-select">
            <span>Thematic area</span>
            <select
              value={theme}
              onChange={(event) => setTheme(event.target.value)}
              aria-label="Filter insights by thematic area"
            >
              {themes.map((item) => (
                <option key={item} value={item}>
                  {item} ({themeCounts[item]})
                </option>
              ))}
            </select>
          </label>

          <div className="sg-insights-tags" aria-label="Insight themes">
            {themes.map((item) => (
              <button
                type="button"
                key={item}
                className={theme === item ? "is-active" : ""}
                onClick={() => setTheme(item)}
              >
                {item} <span>{themeCounts[item]}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="sg-insights-grid" aria-label="Latest insights">
          {visibleInsights.map((item) => {
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

        {visibleCount < filteredInsights.length && (
          <div className="sg-insights-loading">
            Loading more insights...
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
