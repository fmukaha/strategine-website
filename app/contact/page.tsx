import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Strategine | Start a Responsible Business Accountability Project",
  description:
    "Contact Strategine for HREDD, human rights due diligence, responsible business conduct, sustainability oversight, evidence systems, and accountability support.",
  keywords: [
    "contact HREDD consultant",
    "human rights due diligence support",
    "responsible business conduct consultant",
    "corporate responsibility advisory",
    "sustainability oversight support",
    "accountability systems",
  ],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
