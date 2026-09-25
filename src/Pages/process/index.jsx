import { Search, Layout, Code2, Rocket, LifeBuoy, ChevronRight } from "lucide-react";
import "./process.css";

const steps = [
  {
    step: "01",
    title: "Discover",
    description: "Understand your business and requirements.",
    icon: Search,
  },
  {
    step: "02",
    title: "Plan",
    description: "Wireframe, structure, content and user experience.",
    icon: Layout,
  },
  {
    step: "03",
    title: "Develop",
    description: "Build a responsive and performance-focused website.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Launch",
    description: "Test, optimize and deploy your website.",
    icon: Rocket,
  },
  {
    step: "05",
    title: "Support",
    description: "Long term maintenance and updates.",
    icon: LifeBuoy,
  },
];

export default function Process() {
  return (
    <section className="process section" id="process">
      <div className="process__container container">
        <div className="process__header">
          <div>
            <span className="section__tag">Process</span>
            <h2 className="section__title">
              My Website Development <span className="highlight">Process</span>
            </h2>
          </div>

          {/* Cursive Handwriting Note with Arrow */}
          <div className="process__handwriting">
            <span className="handwriting-note">
              From Idea <br /> to Live ⤹
            </span>
          </div>
        </div>

        {/* 5-Step Process Timeline Chain */}
        <div className="process__chain">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="process__step-wrapper">
                <div className="process__card">
                  <div className="process__icon-box">
                    <Icon size={20} />
                  </div>
                  <h3 className="process__step-title">
                    {item.step}. {item.title}
                  </h3>
                  <p className="process__step-desc">{item.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="process__arrow">
                    <ChevronRight size={18} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
