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

          <a href="/#contact" className="header-cta">
            Book a Call
          </a>
        </div>
      </header>

      <section className="hero section-shell reveal hero-bg">
        <div className="container hero-grid">
          <div className="hero-copy">
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

          <div className="hero-form-wrap">
  <div className="hero-form-card">
    <div className="hero-form-top">
      <div className="eyebrow">GET STARTED</div>
      <h3>Book a Strategy Call</h3>
      <p>
        Tell us a little about your business and we’ll reach out with the next step.
      </p>
    </div>

    <form className="hero-form">
      <div className="form-row">
        <input type="text" placeholder="Full name" />
      </div>

      <div className="form-row">
        <input type="text" placeholder="Business name" />
      </div>

      <div className="form-row two-col">
        <input type="email" placeholder="Email address" />
        <input type="tel" placeholder="Phone number" />
      </div>

      <div className="form-row">
        <select defaultValue="">
          <option value="" disabled>
            Service needed
          </option>
          <option>Business Consulting</option>
          <option>Funding Guidance</option>
          <option>Operations Review</option>
          <option>Growth Strategy</option>
        </select>
      </div>

      <div className="form-row">
        <textarea
          placeholder="Tell us what you need help with"
          rows={4}
        />
      </div>

      <button type="submit" className="hero-form-btn">
        Request Consultation
      </button>
    </form>
  </div>
</div>
        </div>
      </section>

     

      {/* ===== WHAT WE DO ===== */}
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
            <img
              src="/funding.png"
              alt="Business planning"
            
            />
          </div>

        </div>
      </section>

      {/* ===== STRATEGY ===== */}
      <section className="blue-band reveal">
        <div className="container">

          <h2>
            THE GOAL IS NOT JUST FUNDING — IT’S BETTER FUNDING OVER TIME.
          </h2>

          <p className="band-sub">
            We help you avoid getting stuck and build a path forward.
          </p>

          <div className="band-columns">

            <div className="band-col">
              <div className="band-icon">⚠️</div>
              <h3>AVOID MISTAKES</h3>
              <p>
                Understand what you are actually signing up for before committing.
              </p>
            </div>

            <div className="band-col">
              <div className="band-icon">🧠</div>
              <h3>MAKE SMARTER DECISIONS</h3>
              <p>
                Choose the option that fits your situation, not just the fastest one.
              </p>
            </div>

            <div className="band-col">
              <div className="band-icon">📉</div>
              <h3>LOWER COST OVER TIME</h3>
              <p>
                Build toward better, cheaper capital as the business improves.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== OPTIONS GRID ===== */}
      <section className="section-shell reveal">
        <div className="container">
          <h2 className="center-title">Funding Options</h2>

          <div className="help-grid">
            {fundingOptions.map((item) => (
              <div className="help-card" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
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

      

      {/* ===== CTA / FOOTER ===== */}
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
      <div className="footer-bottom-left">
        © 2026 Mazaliq. All rights reserved.
      </div>

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