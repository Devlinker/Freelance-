import "./services.css";

const servicesList = [
  {
    icon: "uil uil-desktop",
    title: "Modern Websites",
    description:
      "Responsive and modern websites tailored for businesses, startups, and personal brands with clean aesthetics and fast performance.",
    features: ["Responsive layouts", "Cross-browser tested", "Brand-aligned UI"],
    tag: "Business & Startups",
  },
  {
    icon: "uil uil-window-grid",
    title: "Landing Pages",
    description:
      "High-converting, responsive landing pages designed to showcase campaigns, products, and services with impactful calls to action.",
    features: ["Conversion-focused", "Speed optimized", "Clear lead generation"],
    tag: "High Conversion",
  },
  {
    icon: "fa-brands fa-react",
    title: "React.js Development",
    description:
      "Interactive, modular, and scalable frontend applications crafted with modern React.js, component architecture, and clean state handling.",
    features: ["Component reusability", "Smooth state flows", "Fluid animations"],
    tag: "SPA & Web Apps",
  },
  {
    icon: "uil uil-bolt-alt",
    title: "Next.js Development",
    description:
      "SEO-friendly, high-performance websites and web applications built with Next.js for rapid page loads and optimal search engine ranking.",
    features: ["Server-side rendering", "Instant LCP & speed", "Metadata & SEO ready"],
    tag: "Performance & SEO",
  },
  {
    icon: "uil uil-brush-alt",
    title: "Website UI Development",
    description:
      "Converting Figma, Adobe XD, and UI concepts into pixel-perfect, responsive, and accessible web experiences with precision CSS.",
    features: ["Pixel-perfect match", "Figma to React / CSS", "Semantic markup"],
    tag: "Figma to Code",
  },
  {
    icon: "uil uil-wrench",
    title: "Website Maintenance",
    description:
      "Bug fixing, responsiveness repairs, performance optimizations, UI enhancements, and ongoing updates to keep your website running smoothly.",
    features: ["Bug & layout fixes", "Mobile responsiveness", "Speed optimization"],
    tag: "Support & Upgrades",
  },
];

const clientBenefits = [
  {
    icon: "uil uil-mobile-android",
    title: "Mobile-First Development",
  },
  {
    icon: "uil uil-tachometer-fast",
    title: "Fast-Loading Websites",
  },
  {
    icon: "uil uil-search",
    title: "SEO-Friendly Structure",
  },
  {
    icon: "uil uil-brush-alt",
    title: "Clean & Modern UI",
  },
  {
    icon: "uil uil-window",
    title: "Cross-Browser Compatibility",
  },
  {
    icon: "uil uil-exchange",
    title: "Seamless API Integration",
  },
  {
    icon: "uil uil-brackets-curly",
    title: "Maintainable & Clean Code",
  },
  {
    icon: "uil uil-chart-growth",
    title: "Conversion Focused",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Understand Requirements",
    description: "Deep dive into project goals, target audience, brand identity, and technical specs.",
  },
  {
    step: "02",
    title: "Plan & Design",
    description: "Structure layouts, design system tokens, responsive components, and UI/UX flows.",
  },
  {
    step: "03",
    title: "Develop",
    description: "Build clean, modular, and high-performance frontend code using modern React/Next.js.",
  },
  {
    step: "04",
    title: "Test & Optimize",
    description: "Rigorous testing across screen sizes, browsers, accessibility, and Core Web Vitals.",
  },
  {
    step: "05",
    title: "Deploy",
    description: "Production release, domain setup, performance monitoring, and post-launch maintenance.",
  },
];

export default function Services() {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Freelance Web Development</h2>
      <span className="section__subtitle">
        What I build for businesses, startups, and clients
      </span>

      <div className="services__container container grid">
        {/* 1. Services Grid */}
        <div className="services__grid">
          {servicesList.map((service, index) => (
            <div key={index} className="services__card">
              <div className="services__card-header">
                <div className="services__icon-box">
                  <i className={`${service.icon} services__card-icon`}></i>
                </div>
                <span className="services__tag">{service.tag}</span>
              </div>

              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>

              <ul className="services__feature-list">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="services__feature-item">
                    <i className="uil uil-check-circle services__check-icon"></i>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 2. Client-Focused Value Highlights */}
        <div className="services__benefits-section">
          <div className="services__benefits-header">
            <span className="services__badge">Client Benefits</span>
            <h3 className="services__benefits-title">
              Why Work With Me on Your Website
            </h3>
            <p className="services__benefits-subtitle">
              Delivering high-converting, business-ready websites built for real-world impact
            </p>
          </div>

          <div className="services__benefits-grid">
            {clientBenefits.map((benefit, index) => (
              <div key={index} className="services__benefit-chip">
                <i className={`${benefit.icon} services__benefit-chip-icon`}></i>
                <span className="services__benefit-chip-title">{benefit.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Development Process */}
        <div className="services__process-section">
          <div className="services__process-header">
            <span className="services__badge">Workflow</span>
            <h3 className="services__process-title">Development Process</h3>
            <p className="services__process-subtitle">
              A transparent, 5-step process from concept to deployment
            </p>
          </div>

          <div className="services__process-grid">
            {processSteps.map((p, idx) => (
              <div key={idx} className="services__process-card">
                <div className="services__process-number">{p.step}</div>
                <h4 className="services__process-card-title">{p.title}</h4>
                <p className="services__process-card-desc">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Professional Freelance CTA */}
        <div className="services__cta-card">
          <div className="services__cta-content">
            <span className="services__cta-badge">
              <span className="services__cta-dot animate-pulse"></span>
              AVAILABLE FOR NEW PROJECTS
            </span>
            <h3 className="services__cta-title">Have a project in mind?</h3>
            <p className="services__cta-desc">
              Let's build a fast, modern, and responsive website for your business. Available for freelance contracts, landing pages, and frontend development.
            </p>
            <div className="services__cta-buttons">
              <a href="#contact" className="button button--flex">
                Start a Project<i className="uil uil-arrow-right button__icon"></i>
              </a>
              <a href="#contact" className="button button--flex button--ghost">
                Contact Me<i className="uil uil-message button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
