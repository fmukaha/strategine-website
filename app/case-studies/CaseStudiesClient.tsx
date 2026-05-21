"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ArrowUpRight,
  FileCheck2,
  FileSearch,
  ListChecks,
  Search,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const caseStudies = [
  {
    title: "Building an accountability layer for producer risk oversight",
    tag: "Risk oversight",
    theme: "Risk identification",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    href: "/case-studies/accountability-layer-risk-oversight",
    icon: ShieldCheck,
  },
  {
    title: "Structuring grievance signals into management action",
    tag: "Grievance systems",
    theme: "Remedy and grievance",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    href: "/case-studies/grievance-signals-management-action",
    icon: ListChecks,
  },
  {
    title: "Turning fragmented evidence into credible reporting logic",
    tag: "Evidence systems",
    theme: "Tracking effectiveness",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    href: "/case-studies/fragmented-evidence-reporting-logic",
    icon: FileSearch,
  },
  {
    title: "Preparing teams for responsible business due diligence",
    tag: "HREDD readiness",
    theme: "Policy commitment",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    href: "/case-studies/hredd-readiness",
    icon: FileCheck2,
  },
];

const themes = [
  "All themes",
  "Policy commitment",
  "Risk identification",
  "Tracking effectiveness",
  "Remedy and grievance",
];

export default function CaseStudiesClient() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("All themes");
  const [visibleCount, setVisibleCount] = useState(3);

  const themeCounts = useMemo(() => {
    return themes.reduce<Record<string, number>>((acc, item) => {
      acc[item] =
        item === "All themes"
          ? caseStudies.length
          : caseStudies.filter((study) => study.theme === item).length;
      return acc;
    }, {});
  }, []);

  const filteredCaseStudies = useMemo(() => {
    const search = query.trim().toLowerCase();

    return caseStudies.filter((item) => {
      const matchesTheme = theme === "All themes" || item.theme === theme;
      const matchesSearch =
        !search ||
        item.title.toLowerCase().includes(search) ||
        item.theme.toLowerCase().includes(search) ||
        item.tag.toLowerCase().includes(search);

      return matchesTheme && matchesSearch;
    });
  }, [query, theme]);

  const visibleCaseStudies = filteredCaseStudies.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(3);
  }, [query, theme]);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 520;

      if (nearBottom) {
        setVisibleCount((current) =>
          Math.min(current + 3, filteredCaseStudies.length)
        );
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [filteredCaseStudies.length]);

  return (
    <>
      <Header />

      <main className="sg-insights-page sg-case-studies-page">
        <section className="sg-standard-hero sg-insights-hero">
          <span className="sg-page-kicker">Case studies</span>
          <h1>Applied accountability work.</h1>
        </section>

        <section className="sg-insights-search" aria-label="Search case studies">
          <div className="sg-insights-search-box">
            <Search size={20} strokeWidth={1.8} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search HREDD, evidence, grievance, oversight..."
              aria-label="Search case studies by keyword"
            />
          </div>

          <label className="sg-insights-theme-select">
            <span>Thematic area</span>
            <select
              value={theme}
              onChange={(event) => setTheme(event.target.value)}
              aria-label="Filter case studies by thematic area"
            >
              {themes.map((item) => (
                <option key={item} value={item}>
                  {item} ({themeCounts[item]})
                </option>
              ))}
            </select>
          </label>

          <div className="sg-insights-tags" aria-label="Case study themes">
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

        <section className="sg-insights-grid" aria-label="Case studies">
          {visibleCaseStudies.map((item) => {
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
                    View case study <ArrowUpRight size={16} strokeWidth={1.8} />
                  </span>
                </a>
              </article>
            );
          })}
        </section>

        {visibleCount < filteredCaseStudies.length && (
          <div className="sg-insights-loading">
            Loading more case studies...
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
