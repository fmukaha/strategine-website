import type { Metadata } from "next";
import InsightsClient from "./InsightsClient";

export const metadata: Metadata = {
  title: "Insights | HREDD, UNGP & Responsible Business Accountability",
  description:
    "Strategine insights on HREDD, UNGP, human rights due diligence, environmental due diligence, responsible business conduct, grievance mechanisms, remedy, and accountability.",
  keywords: [
    "HREDD insights",
    "human rights due diligence",
    "environmental due diligence",
    "UNGP",
    "UN Guiding Principles",
    "responsible business conduct",
    "corporate responsibility",
    "grievance mechanism",
    "remediation tracking",
    "sustainability accountability",
  ],
  alternates: {
    canonical: "/insights",
  },
};

export default function InsightsPage() {
  return <InsightsClient />;
}
