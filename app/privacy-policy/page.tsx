"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Funding", href: "/funding" },
  { label: "Results", href: "/#results" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function PrivacyPolicyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="maven-page">
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            <img src="/logoo.png" alt="Mazaliq" />
          </Link>

          <nav className="desktop-nav">
            {navLinks.map((item) => (
              <Link key={item.label} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""}`}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>

            <a href="/#contact" className="header-cta">
              Book a Call
            </a>
          </div>
        </div>

        <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
          <div className="container mobile-nav-inner">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <section className="section-shell legal-shell">
        <div className="container legal-page">
          
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: March 2026</p>

          <div className="legal-content">
            <h2>1. Information We Collect</h2>
            <p>
              We may collect information you provide directly to us, including your
              name, email address, phone number, business name, and any other
              information submitted through forms on this website.
            </p>

            <h2>2. How We Use Information</h2>
            <p>
              We use collected information to respond to inquiries, communicate with
              you, provide consulting or funding-related information, improve our
              website, and operate our business.
            </p>

            <h2>3. Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share information with
              service providers or partners who help us operate our website or
              business, subject to appropriate confidentiality and security measures.
            </p>

            <h2>4. Cookies and Analytics</h2>
            <p>
              We may use cookies, analytics tools, and similar technologies to better
              understand how visitors use our site and improve the user experience.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We take reasonable steps to protect your information, but no method of
              transmission or storage is completely secure.
            </p>

            <h2>6. Your Choices</h2>
            <p>
              You may contact us to request updates or deletion of your information,
              subject to applicable legal and operational requirements.
            </p>

            <h2>7. Third-Party Links</h2>
            <p>
              Our website may include links to third-party websites. We are not
              responsible for the privacy practices of those third parties.
            </p>

            <h2>8. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at
              hello@mazaliq.com.
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-shell">
          <div className="footer-main">
            <div className="footer-brand-block">
              <img src="/logo.png" alt="Mazaliq" className="footer-logo" />
              <p className="footer-brand-text">
                Consulting and funding strategy for home service businesses.
                Helping owners improve performance, make smarter decisions,
                and grow with more control.
              </p>
            </div>

            <div className="footer-links-grid">
              <div className="footer-col">
                <h4>Navigation</h4>
                <a href="/">Home</a>
                <a href="/#about">About</a>
                <a href="/#services">Services</a>
                <a href="/funding">Funding</a>
              </div>

              <div className="footer-col">
                <h4>Legal</h4>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-service">Terms of Service</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-left">© 2026 Mazaliq. All rights reserved.</div>
            <div className="footer-bottom-right">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-service">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

