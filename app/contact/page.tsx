import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Strategine | HREDD & Responsible Business Accountability Intake",
  description:
    "Start a Strategine inquiry for HREDD, human rights due diligence, environmental due diligence, responsible business conduct, accountability systems, grievance mechanisms, remediation tracking, and sustainability oversight.",
  keywords: [
    "HREDD inquiry",
    "human rights due diligence consultant",
    "environmental due diligence support",
    "responsible business conduct advisory",
    "UNGP implementation support",
    "grievance mechanism support",
    "remediation tracking",
    "corporate responsibility advisory",
    "sustainability accountability",
  ],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
