"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Due diligence systems", href: "/services" },
      { label: "Risk visibility", href: "/services" },
      { label: "Evidence pathways", href: "/services" },
      { label: "Accountability design", href: "/services" },
      { label: "Responsible business oversight", href: "/services" },
      { label: "All services", href: "/services", featured: true },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Who we are", href: "/about" },
      { label: "Our mission", href: "/about" },
      { label: "Frameworks we work with", href: "/about" },
      { label: "Why Strategine", href: "/about" },
    ],
  },
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

          <nav className="sg-desktop-nav" aria-label="Main navigation">
            {navItems.map((item) =>
              item.children ? (
                <div className="sg-nav-group" key={item.label}>
                  <Link
                    href={item.href}
                    className={isActive(item.href) ? "is-active" : ""}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={14} strokeWidth={2} />
                  </Link>

                  <div className="sg-nav-dropdown">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={child.featured ? "is-featured" : ""}
                      >
                        <span>{child.label}</span>
                        <ArrowUpRight size={16} strokeWidth={1.9} />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive(item.href) ? "is-active" : ""}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

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
