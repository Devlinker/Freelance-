import { FileText, CheckCircle2, Atom, Layers } from "lucide-react";
import "./about.css";

export default function About() {
  const skills = [
    "React.js",
    "Next.js",
    "Laravel",
    "JavaScript",
    "Responsive Web Design",
    "SEO-friendly development",
  ];

  return (
    <section className="about section" id="about">
      <div className="about__container container">
        <div className="about__grid">
          {/* Left Column: Code / Editor Visual Mockup */}
          <div className="about__visual">
            <div className="about__mockup-wrapper">
              <img
                src="/assets/img/code-mockup.jpg"
                alt="Code editor mockup"
                className="about__mockup-img"
                loading="lazy"
              />

              {/* Floating React Atom Badge */}
              <div className="about__floating-badge about__badge--react animate-float">
                <Atom size={24} color="#38bdf8" />
              </div>

              {/* Floating Next.js Badge */}
              <div
                className="about__floating-badge about__badge--next animate-float"
                style={{ animationDelay: "1.2s" }}
              >
                <Layers size={22} color="#ffffff" />
              </div>

              {/* Bottom Clean Code Status Card */}
              <div className="about__status-card">
                <div className="about__status-line">
                  <CheckCircle2 size={15} color="#38bdf8" />
                  <span>Clean Code</span>
                </div>
                <div className="about__status-line">
                  <CheckCircle2 size={15} color="#ff7a00" />
                  <span>Better Web</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Skills */}
          <div className="about__content">
            <span className="section__tag">About Me</span>

            <h2 className="section__title">
              Freelance Website Developer <br />
              <span className="highlight">in Coimbatore</span>
            </h2>

            <p className="about__description">
              I'm a frontend developer specializing in modern, responsive and user-friendly websites. I help businesses and individuals build professional websites that work smoothly across mobile, tablet and desktop devices.
            </p>

            {/* Skill Tags */}
            <div className="about__skills">
              {skills.map((skill, index) => (
                <span key={index} className="about__skill-tag">
                  {skill}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="about__actions">
              <a
                href="/assets/Mathan-resume.pdf"
                download="Mathan-Resume.pdf"
                className="button button--ghost"
              >
                Download CV <FileText size={16} />
              </a>
              <a href="#contact" className="button">
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
