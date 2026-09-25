import {
  Smartphone,
  Zap,
  Search,
  Layout,
  Code,
  MessageSquare,
} from "lucide-react";
import "./whyChoose.css";

const reasons = [
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Looks great on all screen sizes.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized for speed.",
  },
  {
    icon: Search,
    title: "SEO-Friendly",
    description: "Better search visibility.",
  },
  {
    icon: Layout,
    title: "Modern UI/UX",
    description: "Clean and engaging design layouts.",
  },
  {
    icon: Code,
    title: "Clean & Maintainable",
    description: "Long term support.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description: "Quick and clear updates.",
  },
];

export default function WhyChoose() {
  return (
    <section className="why-choose section" id="why-choose">
      <div className="why-choose__container container">
        <div className="why-choose__header">
          <span className="section__tag">Why Choose Me</span>
          <h2 className="section__title">
            Why Choose a Freelance <br />
            <span className="highlight">Web Developer?</span>
          </h2>
        </div>

        <div className="why-choose__grid">
          {/* Left: 6 Value Points in 2 columns */}
          <div className="why-choose__features">
            {reasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="why-choose__item">
                  <div className="why-choose__icon-box">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="why-choose__item-title">{item.title}</h3>
                    <p className="why-choose__item-desc">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Mockup with warm glow and pill */}
          <div className="why-choose__visual">
            <div className="why-choose__mockup-wrapper">
              <div className="why-choose__glow"></div>
              
              <div className="why-choose__badge">
                <span>Modern Websites for a Better Tomorrow</span>
              </div>

              <img
                src="/assets/img/devices-mockup.jpg"
                alt="Responsive website showcase on laptop and mobile"
                className="why-choose__img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
