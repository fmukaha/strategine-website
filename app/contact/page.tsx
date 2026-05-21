import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCta from "../components/ContactCta";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  { label: "Location", value: "Nairobi, Kenya", icon: MapPin },
  { label: "Call us", value: "+254 700 000 000", icon: Phone },
  { label: "Email us", value: "hello@strategine.com", icon: Mail },
  { label: "Business hours", value: "Mon-Fri: 8:00 am - 5:00 pm", icon: Clock },
];

const frameworks = [
  { mark: "UNGP", label: "UN Guiding Principles" },
  { mark: "OECD", label: "Due Diligence Guidance" },
  { mark: "CSDDD", label: "Corporate Sustainability Due Diligence" },
  { mark: "ESG", label: "Sustainability Reporting" },
  { mark: "RBC", label: "Responsible Business Conduct" },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="sg-contact-page">
        <section className="sg-contact-hero">
          <span className="sg-page-kicker">Contact us</span>
          <h1>Get in touch.</h1>

          <div className="sg-contact-info-row">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div className="sg-contact-info-item" key={item.label}>
                  <span aria-hidden="true">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <div>
                    <small>{item.label}</small>
                    <p>{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <ContactCta />

        <section className="sg-framework-section">
          <span className="sg-section-kicker">Built around recognised frameworks</span>

          <div className="sg-framework-row">
            {frameworks.map((item) => (
              <div className="sg-framework-card" key={item.label}>
                <strong>{item.mark}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
