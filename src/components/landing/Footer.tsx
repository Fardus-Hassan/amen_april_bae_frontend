"use client";

import Image from "next/image";
import Link from "next/link";

const MapPin = () => (
  <svg
    width="28"
    height="36"
    viewBox="0 0 28 36"
    style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))" }}>
    <path
      d="M14 0C6.27 0 0 6.27 0 14c0 9.63 14 22 14 22S28 23.63 28 14C28 6.27 21.73 0 14 0z"
      fill="#E53E3E"
    />
    <circle cx="14" cy="13" r="5.5" fill="white" />
    <circle cx="14" cy="13" r="3.5" fill="#E53E3E" />
  </svg>
);

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Community", href: "/community" },
  { label: "Contact US", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0d1e35" }}>
      {/* World Map Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Footer.png')",
          opacity: 0.4,
        }}
      />

      <style>{`
        .footer-link {
          color: rgba(255,255,255,0.88);
          text-decoration: none;
          transition: color 0.2s ease;
          font-size: 16px;
          font-weight: 400;
        }
        .footer-link:hover { color: #ffffff; }
        .bottom-link {
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          transition: color 0.2s ease;
          font-size: 14px;
          white-space: nowrap;
        }
        .bottom-link:hover { color: #ffffff; }
      `}</style>

      {/* Static Map Pins — matching reference image positions */}
      <div className="absolute inset-0 pointer-events-none select-none hidden sm:block">
        {/* Canada / North America */}
        <div className="absolute" style={{ left: "28%", top: "38%" }}>
          <MapPin />
        </div>
        {/* Central America / Caribbean */}
        <div className="absolute" style={{ left: "33%", top: "58%" }}>
          <MapPin />
        </div>
        {/* Norway / Scandinavia */}
        <div className="absolute" style={{ left: "55%", top: "30%" }}>
          <MapPin />
        </div>
        {/* Ukraine / Eastern Europe */}
        <div className="absolute" style={{ left: "63%", top: "50%" }}>
          <MapPin />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ── Upper Section ─────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 pt-12 pb-8">
          {/* Logo + Brand Name */}
          <Link
            href="/"
            aria-label="AI DNA Time Machine Home"
            className="flex-shrink-0">
            <div className="flex flex-col items-start gap-1">
              <Image
                src="/images/white-logo.svg"
                alt="AI DNA Time Machine"
                width={160}
                height={80}
                className="w-[160px] h-auto lg:w-[73px]"
                priority
              />
            </div>
          </Link>

          {/* Nav Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <address
            className="flex flex-col gap-3 not-italic"
            style={{ minWidth: "220px" }}>
            <a href="mailto:info@dnatimemachine.com" className="footer-link">
              info@dnatimemachine.com
            </a>
            <a href="tel:+8801688148194" className="footer-link">
              +8801688148194
            </a>
            <p
              style={{
                color: "rgba(255,255,255,0.88)",
                fontSize: "16px",
                margin: 0,
              }}>
              Marquis Street, Demra-1204
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.88)",
                fontSize: "16px",
                margin: 0,
              }}>
              Dhaka, Bangladesh
            </p>
          </address>
        </div>

        {/* Divider */}
        <div
          style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.22)" }}
        />

        {/* ── Bottom Bar ────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-5">
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "14px",
              margin: 0,
            }}>
            © 2024 - All rights Reserved
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <Link href="/privacy-policy" className="bottom-link">
              Privacy policy
            </Link>
            <Link href="/terms" className="bottom-link">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
