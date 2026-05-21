import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight, BarChart3, FileSearch, GitBranch } from "lucide-react";

const insights = [
  {
    title: "Why evidence systems fail",
    text: "Evidence systems fail when they show numbers without ownership, context, or action logic.",
    icon: BarChart3,
  },
  {
    title: "Evidence before reporting",
    text: "Strong reporting starts with clear evidence pathways, not presentation slides.",
    icon: FileSearch,
  },
  {
    title: "Systems over spreadsheets",
    text: "Continuity improves when teams stop depending on scattered files and informal follow-ups.",
    icon: GitBranch,
  },
];

export default function InsightsPage() {
  return (
    <>
      <Header />

      <main className="sg-placeholder-page sg-insights-page">
        <section className="sg-standard-hero sg-insights-hero">
          <span className="sg-page-kicker">Insights</span>
          <h1>Thinking for better oversight.</h1>
        </section>

        <section className="sg-standard-intro sg-insights-intro">
          <div>
            <span className="sg-section-kicker">Perspective</span>
            <h2>Make systems clearer.</h2>
          </div>

          <div className="sg-services-copy">
            <p>
              We write about responsible business intelligence, reporting
              architecture, governance systems, operational risk, and evidence.
            </p>
            <p>
              The goal is simple: help leaders see what matters and act faster.
            </p>
          </div>
        </section>

        <section className="sg-service-grid-section">
          <span className="sg-section-kicker">Latest thinking</span>
          <h2>Short, practical, useful.</h2>

          <div className="sg-service-grid">
            {insights.map((item) => {
              const Icon = item.icon;

              return (
                <article className="sg-service-card" key={item.title}>
                  <span className="sg-card-symbol" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
</article>
              );
            })}
          </div>
        </section>
</main>

      <Footer />
    </>
  );
}
