"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  Mail,
  ShieldCheck,
  User,
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

const supportAreas = [
  "HREDD readiness",
  "Responsible business accountability",
  "Human rights risk visibility",
  "Environmental due diligence",
  "Grievance and remediation tracking",
  "Evidence and reporting structure",
  "Framework alignment",
  "Not sure yet",
];

type FormState = {
  name: string;
  email: string;
  organisation: string;
  role: string;
  supportArea: string;
  challenge: string;
  timeline: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  organisation: "",
  role: "",
  supportArea: "",
  challenge: "",
  timeline: "",
};

export default function ContactClient() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const next: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) next.name = "Enter your name";
    if (!form.email.trim()) {
      next.email = "Enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email";
    }

    if (!form.organisation.trim()) next.organisation = "Enter your organisation";
    if (!form.supportArea) next.supportArea = "Select an area";
    if (form.challenge.trim().length < 30) {
      next.challenge = "Describe the challenge in at least 30 characters";
    }

    return next;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    if (!isValid) return;

    console.log("Contact form placeholder:", form);
  }

  return (
    <>
      <Header />

      <main className="sg-contact-modern-page">
        <section className="sg-contact-modern-hero">
          <span className="sg-page-kicker">Contact us</span>
          <h1>Start with the right question.</h1>
          <p>
            Use this form to share what you need to understand, evidence, or
            improve. We will use it later as the single intake point for all
            Strategine inquiries.
          </p>
        </section>

        <section className="sg-contact-modern-shell">
          <div className="sg-contact-modern-left">
            <span className="sg-section-kicker">Project intake</span>
            <h2>Tell us what needs accountability.</h2>

            <p>
              We are most useful when the problem involves human rights due
              diligence, environmental due diligence, responsible business
              conduct, evidence, ownership, remediation, or leadership oversight.
            </p>

            <div className="sg-contact-modern-proof">
              <div>
                <ShieldCheck size={20} strokeWidth={1.7} />
                <span>HREDD and responsible business alignment</span>
              </div>
              <div>
                <ClipboardList size={20} strokeWidth={1.7} />
                <span>Structured intake for serious inquiries</span>
              </div>
              <div>
                <CheckCircle2 size={20} strokeWidth={1.7} />
                <span>Validation-ready form structure</span>
              </div>
            </div>
          </div>

          <form className="sg-contact-modern-form" onSubmit={handleSubmit} noValidate>
            <div className="sg-contact-form-header">
              <h2>How can we help?</h2>
              <p>Complete the fields below. The form is structured now and can be connected later.</p>
            </div>

            <div className="sg-contact-form-grid">
              <label className={submitted && errors.name ? "has-error" : ""}>
                <span>Your name</span>
                <div>
                  <User size={18} strokeWidth={1.7} />
                  <input
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    placeholder="e.g. Jane Mwangi"
                    autoComplete="name"
                  />
                </div>
                {submitted && errors.name && <small>{errors.name}</small>}
              </label>

              <label className={submitted && errors.email ? "has-error" : ""}>
                <span>Email address</span>
                <div>
                  <Mail size={18} strokeWidth={1.7} />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    placeholder="e.g. jane@organisation.com"
                    autoComplete="email"
                  />
                </div>
                {submitted && errors.email && <small>{errors.email}</small>}
              </label>

              <label className={submitted && errors.organisation ? "has-error" : ""}>
                <span>Organisation</span>
                <div>
                  <Building2 size={18} strokeWidth={1.7} />
                  <input
                    value={form.organisation}
                    onChange={(event) => updateField("organisation", event.target.value)}
                    placeholder="e.g. Export Producer Ltd"
                    autoComplete="organization"
                  />
                </div>
                {submitted && errors.organisation && <small>{errors.organisation}</small>}
              </label>

              <label>
                <span>Your role</span>
                <div>
                  <User size={18} strokeWidth={1.7} />
                  <input
                    value={form.role}
                    onChange={(event) => updateField("role", event.target.value)}
                    placeholder="e.g. CEO, Director, Head of Sustainability"
                    autoComplete="organization-title"
                  />
                </div>
              </label>

              <label className={submitted && errors.supportArea ? "has-error" : ""}>
                <span>Area of support</span>
                <select
                  value={form.supportArea}
                  onChange={(event) => updateField("supportArea", event.target.value)}
                >
                  <option value="">Select a focus area</option>
                  {supportAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
                {submitted && errors.supportArea && <small>{errors.supportArea}</small>}
              </label>

              <label>
                <span>Timeline</span>
                <select
                  value={form.timeline}
                  onChange={(event) => updateField("timeline", event.target.value)}
                >
                  <option value="">Select timing</option>
                  <option value="Immediate">Immediate</option>
                  <option value="This quarter">This quarter</option>
                  <option value="Next quarter">Next quarter</option>
                  <option value="Exploratory">Exploratory</option>
                </select>
              </label>
            </div>

            <label className={`sg-contact-message ${submitted && errors.challenge ? "has-error" : ""}`}>
              <span>What challenge are you trying to solve?</span>
              <textarea
                value={form.challenge}
                onChange={(event) => updateField("challenge", event.target.value)}
                placeholder="Briefly describe the risk, accountability, evidence, or due diligence challenge."
              />
              <small>
                {submitted && errors.challenge
                  ? errors.challenge
                  : `${form.challenge.trim().length}/30 minimum characters`}
              </small>
            </label>

            <button type="submit" className="sg-contact-modern-submit">
              Submit inquiry <ArrowRight size={18} strokeWidth={1.8} />
            </button>

            {submitted && isValid && (
              <p className="sg-contact-form-note">
                Form structure is working. Connection to email/database can be added later.
              </p>
            )}
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}
