import { ArrowRight, Code2, Sparkles, Layers, Zap } from "lucide-react";
import "./home.css";

export default function Home() {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="home section" id="home">
      {/* Ambient background glows */}
      <div className="home__glow home__glow-1"></div>
      <div className="home__glow home__glow-2"></div>

      <div className="home__container container">
        <div className="home__grid">
          {/* Left Hero Content */}
          <div className="home__data">
            {/* Pill Tag */}
            <div className="home__badge">
              <span className="home__badge-dot animate-pulse"></span>
              <span>Freelance Web Developer</span>
            </div>

            {/* Headline */}
            <h1 className="home__title">
              Freelance Web Developer <br />
              <span className="home__title-highlight">in Coimbatore</span>
            </h1>

            {/* Subtitle */}
            <p className="home__description">
              I'm Mathan, a freelance website developer in Coimbatore, creating fast, responsive and modern websites for businesses, startups and individuals.
            </p>

            {/* CTAs */}
            <div className="home__actions">
              <a href="#contact" className="button">
                Start Your Project <ArrowRight size={18} />
              </a>
              <a href="#projects" className="button button--ghost">
                View My Work
              </a>
            </div>

            {/* Stats Metrics */}
            <div className="home__stats">
              {stats.map((stat, index) => (
                <div key={index} className="home__stat-item">
                  <div className="home__stat-value">{stat.value}</div>
                  <div className="home__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Visual Showcase */}
          <div className="home__visual">
            <div className="home__img-wrapper">
              {/* Developer Photo in Glowing Glass Frame */}
              <div className="home__img-frame">
                <img
                  src="/assets/img/hero-developer.jpg"
                  alt="Mathan - Freelance Web Developer in Coimbatore"
                  className="home__img"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="home__img-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
