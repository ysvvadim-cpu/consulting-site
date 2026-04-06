// app/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Funding", href: "/funding" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const heroWords = ["Profit", "Systems", "Growth"];

const helpCards = [
  {
    title: "Clarify",
    text: "Find the bottlenecks, blind spots, and bad decisions slowing down growth.",
    icon: "https://cdn.prod.website-files.com/6666752f63a6e0da1ec947bd/66b071226f551680a41d2e44_MavenIcons_target.avif",
  },
  {
    title: "Optimize",
    text: "Tighten pricing, operations, and team accountability so the business runs better.",
    icon: "https://cdn.prod.website-files.com/6666752f63a6e0da1ec947bd/66b072b6f1ae1788d643a81f_MavenIcons_cloud.avif",
  },
  {
    title: "Scale",
    text: "Build a smarter growth plan with the right numbers, systems, and structure behind it.",
    icon: "https://cdn.prod.website-files.com/6666752f63a6e0da1ec947bd/66b0730951194d83bccbedc4_MavenIcons_piechart.avif",
  },
  {
    title: "Fund",
    text: "Match the business with the right capital option instead of the fastest bad option.",
    icon: "https://cdn.prod.website-files.com/6666752f63a6e0da1ec947bd/66b0731fa89ea69e27ce2ed3_MavenIcons_clipboard.avif",
  },
  {
    title: "Track",
    text: "Use simple KPIs and reporting to understand what is actually driving performance.",
    icon: "https://cdn.prod.website-files.com/6666752f63a6e0da1ec947bd/66b073342ced01bc0bf433e1_MavenIcons_list.avif",
  },
  {
    title: "Grow",
    text: "Create a path to stronger margins, more control, and more confident decisions.",
    icon: "https://cdn.prod.website-files.com/6666752f63a6e0da1ec947bd/66b07346abc5ca0cdbbaf247_MavenIcons_graph.avif",
  },
];

const whoWeHelpTabs = [
  {
    label: "Roofing",
    eyebrow: "WHO WE HELP",
    title: "Roofing Companies",
    text: "We help roofing businesses get clearer on margins, sales process, lead handling, team performance, and funding strategy. The goal is not just more revenue — it is healthier growth, better decision-making, and tighter control over the business.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "HVAC",
    eyebrow: "WHO WE HELP",
    title: "HVAC Companies",
    text: "HVAC businesses move fast, and small breakdowns in pricing, operations, scheduling, or capital decisions can become expensive fast. We help owners tighten the business, improve visibility, and make growth decisions with better strategy behind them.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Plumbing",
    eyebrow: "WHO WE HELP",
    title: "Plumbing Companies",
    text: "From service-call performance to team accountability to cash flow pressure, plumbing businesses need practical strategy, not theory. We help owners improve the business itself and choose funding options that support growth instead of trapping them in the wrong product.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
  },
];

const faqs = [
  {
    q: "Who is Mazaliq for?",
    a: "Mazaliq is built for home service businesses that want stronger operations, better visibility, and smarter growth decisions. That includes owners who want help with performance, profitability, systems, and capital strategy.",
  },
  {
    q: "Do you only help with funding?",
    a: "No. Funding is only one part of the picture. We help businesses improve the strategy behind the business itself, then help them choose the right capital option when funding actually makes sense.",
  },
  {
    q: "What makes your funding guidance different?",
    a: "A lot of businesses get pushed into the wrong product because it is fast or easy. We help clients understand the tradeoffs, choose the right fit for the situation, and create a path toward lower-cost capital over time.",
  },
  {
    q: "What types of funding do you help with?",
    a: "We help clients evaluate SBA loans, merchant cash advances, lines of credit, bridge loans, traditional loans, equipment financing, and other business funding paths depending on the situation and stage of the company.",
  },
];

const stats = [
  {
    number: "740+",
    label: "Active Clients",
    icon: "💬",
  },
  {
    number: "95%",
    label: "Retention Rate",
    icon: "📈",
  },
  {
    number: "Right-Fit",
    label: "Capital Strategy",
    icon: "🏦",
  },
];

const fundingPreview = [
  {
    title: "SBA Loans",
    text: "Structured, lower-cost capital when the business qualifies and timing makes sense.",
  },
  {
    title: "Merchant Cash Advance",
    text: "Useful in certain situations, but dangerous when used without a plan or exit path.",
  },
  {
    title: "Line of Credit",
    text: "Flexible working capital for the right use case, not a replacement for strategy.",
  },
  {
    title: "Bridge Loans",
    text: "Short-term capital to solve a temporary gap when timing matters.",
  },
  {
    title: "Traditional Loans",
    text: "Good fit when the business profile, documents, and timeline line up correctly.",
  },
  {
    title: "Equipment Financing",
    text: "A smarter option when equipment is the actual need instead of broad expensive capital.",
  },
];

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.16 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useTypedWords(words: string[], speed = 90, pause = 1400) {
  const [wordIndex, setWordIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  const current = useMemo(() => words[wordIndex], [words, wordIndex]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!deleting && typed.length < current.length) {
      timeout = setTimeout(() => {
        setTyped(current.slice(0, typed.length + 1));
      }, speed);
    } else if (!deleting && typed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => {
        setTyped(current.slice(0, typed.length - 1));
      }, speed / 1.8);
    } else if (deleting && typed.length === 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [typed, deleting, current, words.length, pause, speed]);

  return typed;
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" className="chevron">
      <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
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

export default function Page() {
  useReveal();

  const typedWord = useTypedWords(heroWords);
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const activeHelp = whoWeHelpTabs[activeTab];

  return (
    <main className="maven-page">
      <header className="site-header">
        <div className="container header-inner">
          <Link href="#" className="brand">
            <img src="/logoo.png" alt="Mazaliq" />
          </Link>

          <nav className="desktop-nav">
            {navLinks.map((item) => (
              <Link key={item.label} href={item.href} className="nav-link">
                <span>{item.label}</span>
                
              </Link>
            ))}
          </nav>

          <a href="#contact" className="header-cta">
            Book a Call
          </a>
        </div>
      </header>

      <section className="hero section-shell reveal hero-bg">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>
              Consulting for
              <br />
              Home Service
              <br />
              <span className="typed-line">
                {typedWord}
                <span className="cursor">|</span>
              </span>
            </h1>

            <p>
              We help home service businesses improve performance, choose smarter
              funding, and grow with more control.
            </p>

            <a href="#contact" className="primary-btn">
              Book a Strategy Call
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

    <form
  className="hero-form"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value || "",
      business: (form.elements.namedItem("business") as HTMLInputElement)?.value || "",
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value || "",
      service: (form.elements.namedItem("service") as HTMLSelectElement)?.value || "",
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "",
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Request sent successfully");
      form.reset();
    } else {
      alert("Something went wrong");
    }
  }}
>
      <div className="form-row">
       <input type="text" name="name" placeholder="Full name" />
      </div>

      <div className="form-row">
       <input type="text" name="business" placeholder="Business name" />
      </div>

      <div className="form-row two-col">
      <input type="email" name="email" placeholder="Email address" />
      <input type="tel" name="phone" placeholder="Phone number" />

      </div>

      <div className="form-row">
       <select name="service" defaultValue="">
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
  name="message"
  placeholder="Tell us what you need help with"
  rows={4}
></textarea>
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
      <section id="about" className="section-shell reveal">
        <div className="container split-section what-we-do">

          <div className="split-copy">
            <div className="eyebrow">WHAT WE DO</div>

            <h2>
              Fix What’s Slowing
              <br />
              Your Business Down
            </h2>

            <h3>
              Better decisions, tighter systems, and smarter growth.
            </h3>

            <p className="lead-italic">
              Most home service businesses don’t have a visibility problem — they have a clarity problem.
            </p>

            <p>
              We work directly with owners to understand what’s actually happening inside the business —
              where money is being lost, where operations break down, and where growth decisions are being
              made without the full picture.
            </p>

            <p>
              From sales process to pricing to team accountability to financial structure, we help you
              simplify the business, tighten performance, and build something that actually scales.
            </p>

            <a href="#contact" className="secondary-btn">
              Learn More
            </a>
          </div>

          <div className="split-media media-frame tall-frame">
            <img
              src="/dum.png"
              alt="Business discussion"
            />
            <div className="right-blue-block" />
          </div>

        </div>
      </section>

      {/* ===== HOW WE HELP ===== */}
      <section id="services" className="section-shell reveal">
        <div className="container">
          <h2 className="center-title">How We Help</h2>

          <div className="help-grid">
            {helpCards.map((card) => (
              <div className="help-card" key={card.title}>
                <img src={card.icon} alt="" />
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section-shell reveal process-section">
        <div className="container split-section process-grid">

          {/* IMAGE */}
          <div className="process-stack">
            <div className="process-collage">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Strategy session"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="split-copy process-copy">
            <div className="eyebrow">HOW WE WORK</div>

            <h2>
              We Break Down The Business
              <br />
              And Build It Back Stronger
            </h2>

            <p>
              We start by understanding how your business actually operates — sales,
              pricing, operations, team performance, and financial structure.
            </p>

            <p>
              Then we identify what’s holding it back, fix the gaps, and build a
              clear plan to improve performance and support growth.
            </p>

            <p>
              When capital is needed, we guide you through the right funding option
              and strategy so you don’t get stuck in the wrong product.
            </p>

            <a href="#contact" className="secondary-btn">
              Learn More
            </a>
          </div>

        </div>
      </section>

      {/* ===== BLUE BAND ===== */}
      <section className="blue-band reveal">
        <div className="container">

          <h2>
            WE UNDERSTAND YOUR BUSINESS — AND HOW TO MOVE IT FORWARD.
          </h2>

          <p className="band-sub">
            From operations to capital, we help you make better decisions.
          </p>

          <div className="band-columns">

            <div className="band-col">
              <div className="band-icon">🔍</div>
              <h3>DIAGNOSE</h3>
              <p>
                We break down your business to understand where performance is weak,
                where money is leaking, and where decisions are being made without clarity.
              </p>
            </div>

            <div className="band-col">
              <div className="band-icon">⚙️</div>
              <h3>FIX</h3>
              <p>
                We tighten systems, improve pricing and operations, and create structure
                so the business runs better and produces stronger results.
              </p>
            </div>

            <div className="band-col">
              <div className="band-icon">📈</div>
              <h3>SCALE</h3>
              <p>
                We help you grow the business with better strategy and guide you toward
                the right funding path so growth doesn’t come at the wrong cost.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== WHO WE HELP (TABS) ===== */}
      <section className="section-shell reveal tabs-section">
        <div className="container who-grid">

          {/* IMAGE */}
          <div className="who-media">
            <img src={activeHelp.image} alt={activeHelp.title} />
          </div>

          {/* TEXT */}
          <div className="who-copy">
            <div className="eyebrow">{activeHelp.eyebrow}</div>

            <h2>{activeHelp.title}</h2>

            <p>{activeHelp.text}</p>

            <a href="#contact" className="secondary-btn">
              Learn More
            </a>
          </div>

          {/* TABS */}
          <div className="who-tabs">
            {whoWeHelpTabs.map((tab, index) => (
              <button
                key={tab.label}
                className={`tab-btn ${index === activeTab ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </section>

    

{/* ===== OUTCOMES ===== */}
<section className="section-shell reveal">
  <div className="container">

    <div className="center-title">
      <h2>What Changes When It’s Done Right</h2>
    </div>

    <div className="help-grid">

      <div className="help-card">
        <h4>Clear Numbers</h4>
        <p>
          You understand where money is actually coming from and what’s driving profit.
        </p>
      </div>

      <div className="help-card">
        <h4>Stronger Decisions</h4>
        <p>
          Growth decisions are based on real data, not guesswork or pressure.
        </p>
      </div>

      <div className="help-card">
        <h4>Better Margins</h4>
        <p>
          Pricing, costs, and operations are structured to actually produce profit.
        </p>
      </div>

      <div className="help-card">
        <h4>More Control</h4>
        <p>
          The business feels organized, predictable, and easier to manage.
        </p>
      </div>

      <div className="help-card">
        <h4>Smarter Funding</h4>
        <p>
          Capital decisions support the business instead of creating long-term problems.
        </p>
      </div>

      <div className="help-card">
        <h4>Real Growth</h4>
        <p>
          You scale with structure, not chaos.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* ===== STATS ===== */}
      <section id="results" className="stats-strip reveal">
        <div className="container stats-grid">

          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}

        </div>
      </section>

      {/* ===== FUNDING PREVIEW ===== */}
      <section className="section-shell reveal">
        <div className="container resources-grid">

          {/* LEFT */}
          <div className="resources-copy">
            <div className="eyebrow">FUNDING</div>

            <h2>
              Business Capital,
              <br />
              Structured the Right Way
            </h2>

            <p>
              Most home service businesses don’t choose the wrong funding option
              because they want to — they choose it because they don’t understand
              the tradeoffs.
            </p>

            <p>
              We help you evaluate your situation, pick the right type of capital,
              and build a strategy that allows you to move toward lower-cost options
              over time instead of getting stuck.
            </p>

            <Link href="/funding" className="secondary-btn">
              Explore Funding Options
            </Link>
          </div>

          {/* RIGHT CARDS */}
          <div className="resources-cards">
            {fundingPreview.map((item) => (
              <div className="resource-card" key={item.title}>
                <div className="resource-inner">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="section-shell reveal faq-section">
        <div className="container faq-container">

          <div className="faq-header">
            <div className="eyebrow">FAQ</div>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={item.q}
                  className={`faq-item ${isOpen ? "open" : ""}`}
                >
                  <button
                    className="faq-question"
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
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

      {/* ===== FINAL CONTACT SECTION ===== */}
<section id="contact" className="section-shell reveal final-contact-section">
  <div className="container final-contact-grid">
    <div className="final-contact-copy">
      <div className="eyebrow">BOOK A CALL</div>

      <h2>
        Let’s Talk About
        <br />
        What’s Holding
        <br />
        Your Business Back
      </h2>

      <p className="final-contact-lead">
        If you know there’s money being lost, decisions being made without enough
        clarity, or growth happening without the right structure behind it — this
        is where we start.
      </p>

      <p>
        We work with home service businesses that want stronger performance,
        smarter funding decisions, and better systems across the business.
      </p>

      <div className="final-contact-stats">
        <div className="final-contact-stat">
          <strong>740+</strong>
          <span>Active Clients</span>
        </div>

        <div className="final-contact-stat">
          <strong>95%</strong>
          <span>Retention Rate</span>
        </div>

        <div className="final-contact-stat">
          <strong>Fast</strong>
          <span>Response Time</span>
        </div>
      </div>

      <div className="final-contact-points">
        <div className="final-contact-point">Clear next steps</div>
        <div className="final-contact-point">No-fluff conversation</div>
        <div className="final-contact-point">Consulting + funding strategy</div>
      </div>
    </div>

    <div className="final-contact-form-wrap">
      <div className="final-contact-form-card">
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
              rows={5}
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


      {/* ===== FOOTER ===== */}
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

