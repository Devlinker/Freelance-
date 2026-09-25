import {
  Briefcase,
  Code2,
  Layers,
  Terminal,
  Rocket,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import "./services.css";

const services = [
  {
    icon: Briefcase,
    title: "Business Website Development",
    description: "Professional websites for local businesses, startups and companies.",
    color: "#ff7a00",
  },
  {
    icon: Code2,
    title: "React Development",
    description: "Modern and interactive web applications using React.js.",
    color: "#38bdf8",
  },
  {
    icon: Layers,
    title: "Next.js Development",
    description: "Fast, SEO-friendly and scalable websites using Next.js.",
    color: "#ffffff",
  },
  {
    icon: Terminal,
    title: "Frontend Development",
    description: "Responsive interfaces with modern UI/UX.",
    color: "#ff7a00",
  },
  {
    icon: Rocket,
    title: "Landing Page Development",
    description: "High-converting landing pages for products and services.",
    color: "#ff8a00",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description: "Modernize existing websites while improving usability and performance.",
    color: "#f59e0b",
  },
];

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="services__container container">
        {/* Section Header */}
        <div className="services__header">
          <span className="section__tag">Services</span>
          <h2 className="section__title">
            Website Development Services <br />
            <span className="highlight">in Coimbatore</span>
          </h2>
          <p className="section__subtitle">
            From business websites to modern web applications, I offer a range of development services to help you build your online presence.
          </p>
        </div>

        {/* 6 Bento Grid Cards */}
        <div className="services__grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="service__card">
                <div
                  className="service__icon-box"
                  style={{
                    color: service.color,
                    background: `${service.color}15`,
                    borderColor: `${service.color}35`,
                  }}
                >
                  <Icon size={22} />
                </div>

                <h3 className="service__title">{service.title}</h3>
                <p className="service__description">{service.description}</p>

                <a href="#contact" className="service__arrow-link" aria-label={`Inquire about ${service.title}`}>
                  <ArrowRight size={18} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
