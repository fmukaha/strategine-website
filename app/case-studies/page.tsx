import type { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies | Responsible Business Accountability Work",
  description:
    "Selected Strategine case study patterns across HREDD, responsible business conduct, accountability systems, evidence pathways, and sustainability oversight.",
  keywords: [
    "HREDD case studies",
    "responsible business case studies",
    "human rights due diligence",
    "responsible business conduct",
    "accountability systems",
    "sustainability oversight",
    "evidence pathways",
    "remediation tracking",
  ],
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
