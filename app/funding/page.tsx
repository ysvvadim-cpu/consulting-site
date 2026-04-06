"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Funding", href: "/funding" },
  { label: "Results", href: "/#results" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const fundingOptions = [
  {
    title: "SBA Loans",
    text: "A strong lower-cost option when the business profile, documents, and timing line up. Best when you want better terms and can qualify properly.",
  },
  {
    title: "Merchant Cash Advance",
    text: "Fast capital, but often expensive. Sometimes useful, often misused. We help clients avoid using this the wrong way or staying in it too long.",
  },
  {
    title: "Line of Credit",
    text: "Flexible access to working capital when you need room to operate, manage seasonality, or handle short-term pressure.",
  },
  {
    title: "Bridge Loans",
    text: "Short-term funding for a timing gap, expansion step, or transition moment when waiting is not realistic.",
  },
  {
    title: "Traditional Loans",
    text: "Conventional business lending for businesses with the right profile, documents, and use case.",
  },
  {
    title: "Equipment Financing",
    text: "Useful when the need is tied directly to equipment instead of using broad higher-cost capital for everything.",
  },
];

const faqs = [
  {
    q: "Do you directly lend money?",
    a: "No. We help businesses understand their options, avoid bad decisions, and choose the funding path that best fits their actual situation.",
  },
  {
    q: "Why not just take the fastest offer?",
    a: "Because the fastest option is often not the smartest one. A lot of businesses lock themselves into expensive capital without understanding the long-term cost or how it affects the next funding step.",
  },
  {
    q: "Can you help us move toward lower-cost capital over time?",
    a: "Yes. That is one of the biggest advantages of working with us. We help businesses think beyond the immediate need and build a strategy that can improve future options.",
  },
  {
    q: "What types of businesses is this for?",
    a: "This page is built specifically for home service businesses that need capital but want to make the decision strategically instead of blindly.",
  },
];

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.16 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="faq-icon">
      <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="faq-icon">
      <path d="M5 12h14" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function FundingPage() {
  useReveal();
  const [openFaq, setOpenFaq] = useState(0);
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
                <span>{item.label}</span>
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

      <section className="hero section-shell reveal hero-bg funding-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-copy-inner">
              <h1>
                Business Funding
                <br />
                for Home Service
                <br />
                Companies
              </h1>

              <p>
                We help you choose the right capital option, avoid expensive mistakes,
                and build a smarter path toward lower-cost funding.
              </p>

              <a href="/#contact" className="primary-btn">
                Talk Through Your Options
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell reveal">
        <div className="container split-section">
          <div className="split-copy">
            <div className="eyebrow">WHAT WE DO</div>

            <h2>
              We Help You Choose The
              <br />
              Right Option — Not Just Any Option
            </h2>

            <p>
              We look at your business, your goals, your timing, and your current
              position — then help you evaluate which funding path actually makes sense.
            </p>

            <p>
              More importantly, we help you think beyond the immediate decision so you
              can move toward stronger, lower-cost capital over time.
            </p>
          </div>

          <div className="split-media media-frame tall-frame">
            <img src="/funding.png" alt="Business planning" />
          </div>
        </div>
      </section>

     <section className="funding-strategy-section reveal">
  <div className="container">
    <div className="funding-strategy-header">
      <h2>THE GOAL IS NOT JUST FUNDING — IT’S BETTER FUNDING OVER TIME.</h2>
      <p>
        We help you avoid getting stuck and build a path toward stronger,
        lower-cost capital over time.
      </p>
    </div>

    <div className="funding-strategy-grid">
      <div className="funding-strategy-card">
        <div className="funding-strategy-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
          </svg>
        </div>
        <h3>Avoid Mistakes</h3>
        <p>
          Understand what you are actually signing up for before committing.
        </p>
      </div>

      <div className="funding-strategy-card">
        <div className="funding-strategy-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M12 2a7 7 0 0 0-4 12.74C8.63 15.19 9 15.86 9 16.57V17h6v-.43c0-.71.37-1.38 1-1.83A7 7 0 0 0 12 2Z" />
          </svg>
        </div>
        <h3>Make Smarter Decisions</h3>
        <p>
          Choose the option that fits your situation, not just the fastest one.
        </p>
      </div>

      <div className="funding-strategy-card">
        <div className="funding-strategy-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="m16 6-8 8" />
            <path d="m8 6 8 8" opacity="0.25" />
            <path d="M3 7h4" />
            <path d="M17 17h4" />
            <path d="M14 3v4" />
            <path d="M10 17v4" />
          </svg>
        </div>
        <h3>Lower Cost Over Time</h3>
        <p>
          Build toward better, cheaper capital as the business improves.
        </p>
      </div>
    </div>
  </div>
</section>

      <section className="section-shell reveal">
        <div className="container">
          <h2 className="center-title">Funding Options</h2>

          <div className="help-grid funding-options-grid">
            {fundingOptions.map((item) => (
              <div className="help-card funding-option-card" key={item.title}>
                <div className="help-card-copy">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell reveal faq-section">
        <div className="container faq-container">
          <div className="faq-header">
            <div className="eyebrow">FUNDING FAQ</div>
            <h2>Questions About Capital Strategy</h2>
          </div>

          <div className="faq-list">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={item.q} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{item.q}</span>
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </button>

                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="site-footer reveal">
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
                <a href="/#results">Results</a>
                <a href="/#faq">FAQ</a>
                <a href="/#contact">Contact</a>
              </div>

              <div className="footer-col">
                <h4>Services</h4>
                <a href="/#services">Business Consulting</a>
                <a href="/#services">Growth Strategy</a>
                <a href="/#services">Operations Review</a>
                <a href="/funding">Capital Strategy</a>
              </div>

              <div className="footer-col">
                <h4>Legal</h4>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-service">Terms of Service</a>
              </div>

              <div className="footer-col">
                <h4>Contact</h4>
                <a href="/#contact">Book a Call</a>
                <a href="mailto:hello@mazaliq.com">hello@mazaliq.com</a>
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