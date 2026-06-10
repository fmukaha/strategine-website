import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceDetailPage from "../../components/ServiceDetailPage";
import { services } from "../serviceContent";

const service = services.evidenceStructure;

export const metadata: Metadata = {
  title: service.eyebrow + " | Strategine Services",
  description: service.intro,
};

export default function Page() {
  return (
    <>
      <Header />
      <ServiceDetailPage service={service} />
      <Footer />
    </>
  );
}
