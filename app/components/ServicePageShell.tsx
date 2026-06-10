import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type ServicePageShellProps = {
  children: ReactNode;
};

export default function ServicePageShell({ children }: ServicePageShellProps) {
  return (
    <>
      <Header />

      <main className="sg-service-detail-page">
        {children}
      </main>

      <Footer />
    </>
  );
}