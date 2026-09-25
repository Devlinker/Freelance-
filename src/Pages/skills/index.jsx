import "./skills.css";

const technologies = [
  { name: "HTML", iconClass: "fa-brands fa-html5", color: "#e34f26" },
  { name: "CSS", iconClass: "fa-brands fa-css3-alt", color: "#1572b6" },
  { name: "JavaScript", iconClass: "fa-brands fa-js", color: "#f7df1e" },
  { name: "React.js", iconClass: "fa-brands fa-react", color: "#61dafb" },
  { name: "Next.js", iconClass: "fa-solid fa-n", color: "#ffffff" },
  { name: "Laravel", iconClass: "fa-brands fa-laravel", color: "#ff2d20" },
  { name: "Tailwind CSS", iconClass: "fa-solid fa-wind", color: "#38bdf8" },
  { name: "Bootstrap", iconClass: "fa-brands fa-bootstrap", color: "#7952b3" },
  { name: "Git", iconClass: "fa-brands fa-git-alt", color: "#f05032" },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="skills__container container">
        <div className="skills__header">
          <span className="section__tag">Technologies</span>
          <h2 className="section__title">
            Technologies I <span className="highlight">Work With</span>
          </h2>
        </div>

        {/* Chain of Tech Cards */}
        <div className="skills__chain">
          {technologies.map((tech, index) => (
            <div key={index} className="skills__chain-item">
              <div
                className="skills__card"
                style={{ "--tech-color": tech.color }}
              >
                <div
                  className="skills__icon-box"
                  style={{ color: tech.color, background: `${tech.color}15` }}
                >
                  <i className={tech.iconClass}></i>
                </div>
                <span className="skills__name">{tech.name}</span>
              </div>
              {index < technologies.length - 1 && (
                <span className="skills__connector">+</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
