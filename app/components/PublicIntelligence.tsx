"use client";

import { useEffect, useState } from "react";

type Signal = {
  label: string;
  source: string;
  sourceUrl: string;
  value: string;
  note: string;
  accent: string;
};

const fallbackSignals: Signal[] = [
  {
    label: "Youth labour risk",
    source: "World Bank",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.1524.ZS",
    value: "Latest",
    note: "Youth unemployment context for workforce vulnerability.",
    accent: "Labour",
  },
  {
    label: "Environmental pressure",
    source: "NASA FIRMS",
    sourceUrl: "https://firms.modaps.eosdis.nasa.gov/",
    value: "Live",
    note: "Active fire and environmental alert context.",
    accent: "Environment",
  },
  {
    label: "Humanitarian context",
    source: "ReliefWeb",
    sourceUrl: "https://reliefweb.int/",
    value: "Live",
    note: "Public crisis updates relevant to operating context.",
    accent: "Context",
  },
];

export default function PublicIntelligence() {
  const [signals, setSignals] = useState<Signal[]>(fallbackSignals);

  useEffect(() => {
    async function loadWorldBankSignal() {
      try {
        const response = await fetch(
          "https://api.worldbank.org/v2/country/KE/indicator/SL.UEM.1524.ZS?format=json&per_page=5"
        );

        const data = await response.json();
        const latest = data?.[1]?.find((item: { value: number | null }) => item.value !== null);

        if (!latest) return;

        setSignals((current) =>
          current.map((signal) =>
            signal.label === "Youth labour risk"
              ? {
                  ...signal,
                  value: `${Number(latest.value).toFixed(1)}%`,
                  note: `Kenya youth unemployment, latest available year ${latest.date}.`,
                }
              : signal
          )
        );
      } catch {
        setSignals(fallbackSignals);
      }
    }

    loadWorldBankSignal();
  }, []);

  return (
    <section className="sg-public-intel">
      <div className="sg-public-intel-head">
        <div>
          <span className="sg-section-kicker">Public intelligence</span>
          <h2>Useful signals, lightly held.</h2>
        </div>

        <p>
          A compact public-good layer for responsible business context. These signals
          are not risk scores. They help leaders know what to look at before deeper
          due diligence.
        </p>
      </div>

      <div className="sg-public-intel-grid" aria-label="Public intelligence signals">
        {signals.map((signal) => (
          <a
            key={signal.label}
            href={signal.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sg-public-intel-card"
          >
            <div>
              <span>{signal.accent}</span>
              <strong>{signal.value}</strong>
            </div>

            <h3>{signal.label}</h3>
            <p>{signal.note}</p>

            <small>
              {signal.source}
              <span aria-hidden="true">↗</span>
            </small>
          </a>
        ))}
      </div>

      <p className="sg-public-intel-caution">
        Public signals are provided for context only. They do not replace field
        verification, stakeholder engagement, grievance data, or formal due diligence.
      </p>
    </section>
  );
}
