"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";
import {
  CountryCode,
  getCountryCallingCode,
  parsePhoneNumberFromString,
} from "libphonenumber-js";
import { FormEvent, useEffect, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  country: CountryCode;
  phone: string;
  isWhatsapp: boolean;
  organisation: string;
  role: string;
  otherRole: string;
  departments: string;
  supportArea: string;
  urgency: string;
  challenge: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  country: "KE",
  phone: "",
  isWhatsapp: true,
  organisation: "",
  role: "",
  otherRole: "",
  departments: "",
  supportArea: "",
  urgency: "",
  challenge: "",
};

const countries: { code: CountryCode; label: string }[] = [
  { code: "KE", label: "Kenya" },
  { code: "UG", label: "Uganda" },
  { code: "TZ", label: "Tanzania" },
  { code: "RW", label: "Rwanda" },
  { code: "ET", label: "Ethiopia" },
  { code: "ZA", label: "South Africa" },
  { code: "CI", label: "Cote d'Ivoire" },
  { code: "GH", label: "Ghana" },
  { code: "NG", label: "Nigeria" },
  { code: "GB", label: "United Kingdom" },
  { code: "DE", label: "Germany" },
  { code: "NL", label: "Netherlands" },
  { code: "US", label: "United States" },
];

function countryDisplay(code: CountryCode) {
  const country = countries.find((item) => item.code === code);
  return country ? `+${getCountryCallingCode(country.code)} ${country.label}` : "";
}

const roles = [
  "CEO / Managing Director",
  "Board / Governance Lead",
  "Head of Sustainability",
  "Head of Human Rights",
  "Head of Compliance",
  "Head of Operations",
  "Supply Chain Lead",
  "Programme / Project Lead",
  "Consultant / Advisor",
  "Other",
];

const supportAreas = [
  "HREDD readiness",
  "Human rights risk visibility",
  "Environmental due diligence",
  "Responsible business conduct",
  "Grievance and remediation tracking",
  "Evidence and accountability structure",
  "UNGP / OECD / CSDDD alignment",
  "Not sure yet",
];

const urgencies = [
  "Exploratory",
  "This quarter",
  "Immediate buyer / audit pressure",
  "Board or leadership priority",
  "Regulatory / compliance deadline",
];

const departmentBands = [
  "1-3 departments",
  "4-7 departments",
  "8-15 departments",
  "16+ departments",
  "Not sure",
];

const steps = ["Contact", "Organisation", "Support", "Review"];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

function normalisedPhone(form: FormState) {
  return parsePhoneNumberFromString(form.phone, form.country);
}

export default function ContactClient() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [countryDetected, setCountryDetected] = useState(false);
  const [countryInput, setCountryInput] = useState(countryDisplay(initialForm.country));

  useEffect(() => {
    async function detectCountry() {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const detected = String(data?.country_code || "").toUpperCase() as CountryCode;

        if (countries.some((country) => country.code === detected)) {
          setForm((current) => ({ ...current, country: detected }));
          setCountryInput(countryDisplay(detected));
          setCountryDetected(true);
        }
      } catch {
        setCountryDetected(false);
      }
    }

    detectCountry();
  }, []);

  const phoneNumber = useMemo(() => normalisedPhone(form), [form]);

  const errors = useMemo(() => {
    const next: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) next.name = "Enter your name";

    if (!form.email.trim()) {
      next.email = "Enter your email";
    } else if (!isValidEmail(form.email)) {
      next.email = "Use a valid work email";
    }

    if (!form.phone.trim()) {
      next.phone = "Enter your phone number";
    } else if (!phoneNumber || !phoneNumber.isValid()) {
      next.phone = "Use a valid phone number for the selected country";
    }

    if (!form.organisation.trim()) next.organisation = "Enter organisation name";
    if (!form.role) next.role = "Select your role";
    if (form.role === "Other" && !form.otherRole.trim()) next.otherRole = "Enter your role";
    if (!form.departments) next.departments = "Select department range";
    if (!form.supportArea) next.supportArea = "Select support area";
    if (!form.urgency) next.urgency = "Select urgency";
    if (form.challenge.trim().length < 40) next.challenge = "Write at least 40 characters";

    return next;
  }, [form, phoneNumber]);

  const stepErrors = useMemo(() => {
    if (step === 0) return ["name", "email", "phone"] as (keyof FormState)[];
    if (step === 1) return ["organisation", "role", "otherRole", "departments"] as (keyof FormState)[];
    if (step === 2) return ["supportArea", "urgency", "challenge"] as (keyof FormState)[];
    return [] as (keyof FormState)[];
  }, [step]);

  const canContinue = stepErrors.every((key) => !errors[key]);

  function updateCountryInput(value: string) {
    setCountryInput(value);

    const match = countries.find((country) => {
      const display = countryDisplay(country.code).toLowerCase();
      return display === value.toLowerCase();
    });

    if (match) {
      updateField("country", match.code);
    }
  }

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  }

  function nextStep() {
    setSubmitted(true);
    if (!canContinue) return;
    setSubmitted(false);
    setStep((current) => Math.min(current + 1, steps.length - 1));
  }

  function previousStep() {
    setSubmitted(false);
    setStep((current) => Math.max(current - 1, 0));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    if (Object.keys(errors).length > 0) return;

    console.log("Strategine inquiry placeholder:", {
      ...form,
      internationalPhone: phoneNumber?.formatInternational() || form.phone,
    });
  }

  return (
    <>
      <Header />

      <main className="sg-contact-clean-page">
        <section className="sg-standard-hero sg-contact-hero">
          <span className="sg-page-kicker">Contact us</span>
          <h1>Start a project inquiry.</h1>
        </section>

        <section className="sg-contact-clean-shell">
          <form className="sg-contact-clean-form" onSubmit={handleSubmit} noValidate>
            <div className="sg-intake-progress" aria-label="Inquiry progress">
              {steps.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={index === step ? "is-active" : index < step ? "is-complete" : ""}
                  onClick={() => index < step && setStep(index)}
                >
                  <span>{index + 1}</span>
                  {item}
                </button>
              ))}
            </div>

            {step === 0 && (
              <div className="sg-intake-step">
                <label className={submitted && errors.name ? "has-error" : ""}>
                  <span>Your name</span>
                  <div className="sg-input-shell">
                    <User size={18} strokeWidth={1.7} />
                    <input value={form.name} onChange={(event) => updateField("name", event.target.value)} placeholder="e.g. Jane Mwangi" autoComplete="name" />
                  </div>
                  {submitted && errors.name && <small>{errors.name}</small>}
                </label>

                <label className={submitted && errors.email ? "has-error" : ""}>
                  <span>Work email</span>
                  <div className="sg-input-shell">
                    <Mail size={18} strokeWidth={1.7} />
                    <input type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="e.g. jane@organisation.com" autoComplete="email" />
                  </div>
                  {submitted && errors.email && <small>{errors.email}</small>}
                </label>

                <label className={submitted && errors.phone ? "has-error" : ""}>
                  <span>Phone number</span>
                  <div className="sg-phone-grid">
                    <div className="sg-select-shell sg-country-search-shell">
                      <Globe2 size={17} strokeWidth={1.7} />
                      <input
                        list="country-code-options"
                        value={countryInput}
                        onChange={(event) => updateCountryInput(event.target.value)}
                        onBlur={() => setCountryInput(countryDisplay(form.country))}
                        placeholder="Search country code"
                        aria-label="Search country code"
                      />
                      <ChevronDown size={16} strokeWidth={1.8} />

                      <datalist id="country-code-options">
                        {countries.map((country) => (
                          <option key={country.code} value={countryDisplay(country.code)} />
                        ))}
                      </datalist>
                    </div>

                    <div className="sg-input-shell">
                      <Phone size={18} strokeWidth={1.7} />
                      <input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="e.g. 712 345 678" autoComplete="tel" />
                    </div>
                  </div>
                  {countryDetected && <small>Country code detected automatically. You can change it.</small>}
                  {submitted && errors.phone && <small>{errors.phone}</small>}
                </label>

                <label className="sg-whatsapp-check">
                  <input type="checkbox" checked={form.isWhatsapp} onChange={(event) => updateField("isWhatsapp", event.target.checked)} />
                  <span>
                    <MessageCircle size={18} strokeWidth={1.7} />
                    This number is available on WhatsApp
                  </span>
                </label>
              </div>
            )}

            {step === 1 && (
              <div className="sg-intake-step">
                <label className={submitted && errors.organisation ? "has-error" : ""}>
                  <span>Organisation</span>
                  <div className="sg-input-shell">
                    <ShieldCheck size={18} strokeWidth={1.7} />
                    <input value={form.organisation} onChange={(event) => updateField("organisation", event.target.value)} placeholder="e.g. Export Producer Ltd" autoComplete="organization" />
                  </div>
                  {submitted && errors.organisation && <small>{errors.organisation}</small>}
                </label>

                <label className={submitted && errors.role ? "has-error" : ""}>
                  <span>Your role</span>
                  <div className="sg-select-shell">
                    <User size={18} strokeWidth={1.7} />
                    <select value={form.role} onChange={(event) => updateField("role", event.target.value)}>
                      <option value="">Select your role</option>
                      {roles.map((role) => <option key={role} value={role}>{role}</option>)}
                    </select>
                    <ChevronDown size={16} strokeWidth={1.8} />
                  </div>
                  {submitted && errors.role && <small>{errors.role}</small>}
                </label>

                {form.role === "Other" && (
                  <label className={submitted && errors.otherRole ? "has-error" : ""}>
                    <span>Type your role</span>
                    <div className="sg-input-shell">
                      <User size={18} strokeWidth={1.7} />
                      <input value={form.otherRole} onChange={(event) => updateField("otherRole", event.target.value)} placeholder="e.g. Founder, Programme Lead" />
                    </div>
                    {submitted && errors.otherRole && <small>{errors.otherRole}</small>}
                  </label>
                )}

                <label className={submitted && errors.departments ? "has-error" : ""}>
                  <span>Departments involved</span>
                  <div className="sg-select-shell">
                    <ShieldCheck size={18} strokeWidth={1.7} />
                    <select value={form.departments} onChange={(event) => updateField("departments", event.target.value)}>
                      <option value="">Select range</option>
                      {departmentBands.map((band) => <option key={band} value={band}>{band}</option>)}
                    </select>
                    <ChevronDown size={16} strokeWidth={1.8} />
                  </div>
                  {submitted && errors.departments && <small>{errors.departments}</small>}
                </label>
              </div>
            )}

            {step === 2 && (
              <div className="sg-intake-step">
                <label className={submitted && errors.supportArea ? "has-error" : ""}>
                  <span>What do you need help with?</span>
                  <div className="sg-select-shell">
                    <ShieldCheck size={18} strokeWidth={1.7} />
                    <select value={form.supportArea} onChange={(event) => updateField("supportArea", event.target.value)}>
                      <option value="">Select support area</option>
                      {supportAreas.map((area) => <option key={area} value={area}>{area}</option>)}
                    </select>
                    <ChevronDown size={16} strokeWidth={1.8} />
                  </div>
                  {submitted && errors.supportArea && <small>{errors.supportArea}</small>}
                </label>

                <label className={submitted && errors.urgency ? "has-error" : ""}>
                  <span>What is driving the timing?</span>
                  <div className="sg-select-shell">
                    <ShieldCheck size={18} strokeWidth={1.7} />
                    <select value={form.urgency} onChange={(event) => updateField("urgency", event.target.value)}>
                      <option value="">Select timing driver</option>
                      {urgencies.map((urgency) => <option key={urgency} value={urgency}>{urgency}</option>)}
                    </select>
                    <ChevronDown size={16} strokeWidth={1.8} />
                  </div>
                  {submitted && errors.urgency && <small>{errors.urgency}</small>}
                </label>

                <label className={submitted && errors.challenge ? "has-error" : ""}>
                  <span>Describe the accountability challenge</span>
                  <textarea value={form.challenge} onChange={(event) => updateField("challenge", event.target.value)} placeholder="Briefly describe the risk, accountability, evidence, or due diligence challenge." />
                  <small>{submitted && errors.challenge ? errors.challenge : `${form.challenge.trim().length}/40 minimum characters`}</small>
                </label>
              </div>
            )}

            {step === 3 && (
              <div className="sg-intake-review">
                <CheckCircle2 size={32} strokeWidth={1.6} />
                <div>
                  <span>Review</span>
                  <p>{form.name || "Name not entered"}</p>
                  <p>{form.email || "Email not entered"}</p>
                  <p>{phoneNumber?.formatInternational() || form.phone || "Phone not entered"}{form.isWhatsapp ? " - WhatsApp available" : ""}</p>
                  <p>{form.organisation || "Organisation not entered"}</p>
                  <p>{form.role === "Other" ? form.otherRole : form.role}</p>
                  <p>{form.supportArea || "Support area not selected"}</p>
                </div>
              </div>
            )}

            <div className="sg-intake-actions">
              {step > 0 && (
                <button type="button" className="sg-intake-back" onClick={previousStep}>
                  <ArrowLeft size={18} strokeWidth={1.8} />
                  Back
                </button>
              )}

              {step < steps.length - 1 ? (
                <button type="button" className="sg-intake-next" onClick={nextStep}>
                  Continue
                  <ArrowRight size={18} strokeWidth={1.8} />
                </button>
              ) : (
                <button type="submit" className="sg-intake-next">
                  Submit inquiry
                  <ArrowRight size={18} strokeWidth={1.8} />
                </button>
              )}
            </div>

            {submitted && step === 3 && Object.keys(errors).length === 0 && (
              <p className="sg-intake-note">Form structure is ready. Routing can be connected later.</p>
            )}
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}
