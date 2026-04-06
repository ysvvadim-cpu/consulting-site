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

export default function TermsOfServicePage() {
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
          
          <h1>Terms of Service</h1>
          <p className="legal-updated">Last updated: March 2026</p>

          <div className="legal-content">
            <h2>1. Use of Website</h2>
            <p>
              By using this website, you agree to use it only for lawful purposes
              and in a manner that does not infringe the rights of others or
              restrict their use of the site.
            </p>

            <h2>2. No Guarantee of Results</h2>
            <p>
              Information provided on this site is for general informational purposes
              only. We do not guarantee specific business, financial, or funding
              outcomes.
            </p>

            <h2>3. No Financial or Legal Advice</h2>
            <p>
              Content on this website does not constitute legal, tax, accounting,
              or financial advice. You should consult qualified professionals before
              making business or funding decisions.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website, including text, branding, graphics, and
              layout, is owned by or licensed to Mazaliq and may not be copied,
              reproduced, or distributed without permission.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              We may reference or link to third-party providers, lenders, services,
              or websites. We are not responsible for third-party content, actions,
              or outcomes.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Mazaliq shall not be liable
              for any indirect, incidental, or consequential damages resulting from
              the use of this website or reliance on its content.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
              We may update these Terms of Service at any time. Continued use of the
              website after updates constitutes acceptance of the revised terms.
            </p>

            <h2>8. Contact</h2>
            <p>
              For questions regarding these Terms of Service, contact
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