"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <>
      <header className="sg-drawer-header">
        <div className="sg-drawer-header-inner">
          <Link href="/" className="sg-drawer-logo" aria-label="Strategine home">
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
            className="sg-drawer-menu-button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span>Menu</span>
            <Menu size={22} strokeWidth={1.9} />
          </button>
        </div>
      </header>

      {open && (
        <div className="sg-drawer-overlay">
          <button
            type="button"
            aria-label="Close menu overlay"
            className="sg-drawer-backdrop"
            onClick={() => setOpen(false)}
          />

          <aside className="sg-drawer-panel" aria-label="Main menu">
            <div className="sg-drawer-panel-top">
              <button
                type="button"
                className="sg-drawer-close"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={18} strokeWidth={1.9} />
                <span>Menu</span>
              </button>
            </div>

            <nav className="sg-drawer-nav">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={isActive(item.href) ? "is-active" : ""}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={18} strokeWidth={1.9} aria-hidden="true" />
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
