"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sitePages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <>
      <header className="sg-dmkl-header">
        <div className="sg-dmkl-header-inner">
          <Link href="/" className="sg-dmkl-logo" aria-label="Strategine home">
            <Image
              src="/strategine_logo.svg"
              alt="Strategine"
              width={150}
              height={40}
              priority
            />
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="sg-dmkl-menu-pill"
            aria-label="Open menu"
          >
            <span>Menu</span>
            <Menu size={23} strokeWidth={1.9} />
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="sg-dmkl-menu-overlay">
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setIsOpen(false)}
            className="sg-dmkl-menu-backdrop"
          />

          <aside className="sg-dmkl-menu-panel" aria-label="Menu navigation">
            <div className="sg-dmkl-menu-top">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="sg-dmkl-menu-close"
                aria-label="Close menu"
              >
                <X size={18} strokeWidth={1.9} />
                <span>Menu</span>
              </button>
            </div>

            <nav className="sg-dmkl-menu-nav">
              {sitePages.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={isActive(item.href) ? "is-active" : ""}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="sg-dmkl-menu-footer">
              <p>© Strategine</p>
              <strong>Responsible business intelligence systems.</strong>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
