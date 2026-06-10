import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="sg-not-found-page">
        <section className="sg-not-found-inner">
          <span className="sg-page-kicker">404</span>

          <h1>This page is not available.</h1>

          <p>
            The page may have moved, been removed, or the link may be incorrect.
            Return to the homepage or explore our services.
          </p>

          <div className="sg-not-found-actions">
            <Link href="/">
              Go to homepage
              <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
            </Link>

            <Link href="/services">
              View services
              <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}