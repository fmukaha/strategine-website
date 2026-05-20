"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sg-header">
      <div className="sg-header-inner">
        <Link href="/" className="sg-logo" aria-label="Strategine home">
          <Image src="/strategine_logo.svg" alt="Strategine" width={150} height={40} priority />
        </Link>

        <nav className="sg-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="sg-actions">
          <Link href="/contact" className="sg-phone" aria-label="Talk to us">
            <Phone size={16} strokeWidth={2.2} />
            <span>Talk to us</span>
          </Link>

          <Link href="/contact" className="sg-project">
            Start a project
          </Link>

          <button type="button" className="sg-menu" onClick={() => setOpen(!open)} aria-label="Open menu">
            {open ? <X size={21} strokeWidth={2.3} /> : <Menu size={21} strokeWidth={2.3} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="sg-mobile-nav" aria-label="Mobile navigation">
          {[...navItems, { label: "Start a project", href: "/contact" }].map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
