"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav } from "@/lib/data";
import { Wordmark } from "./Wordmark";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const close = () => setOpen(false);

  // Mobile menu also surfaces Case studies and Blog, as the footer does.
  const mobileNav = [...mainNav.slice(0, 3), { label: "Case studies", href: "/case-study" }, { label: "Blog", href: "/blog" }, mainNav[3]];

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container">
        <nav className="nav-bar" aria-label="Primary">
          <Link href="/" className="wordmark" aria-label="Velnqora Labs home" onClick={close}>
            <Wordmark />
          </Link>
          <ul className="nav-links">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-cta">
            <Link href="/contact" className="btn btn--primary">
              Book a slot
            </Link>
          </div>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-toggle-bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </nav>
        {open && (
          <div id="mobile-menu" className="mobile-menu">
            <ul>
              {mobileNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={close} aria-current={isActive(item.href) ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn--primary" onClick={close}>
              Book a slot
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
