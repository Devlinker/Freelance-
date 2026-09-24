import "./skills.css";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "uil uil-brackets-curly",
    skills: [
      { name: "HTML5", icon: "fa-brands fa-html5", pillClass: "html-pill" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt", pillClass: "css-pill" },
      { name: "JavaScript", icon: "fa-brands fa-js", pillClass: "js-pill" },
      { name: "SCSS", icon: "fa-brands fa-sass", pillClass: "sass-pill" },
      { name: "React.js", icon: "fa-brands fa-react", pillClass: "react-pill" },
      { name: "Next.js", icon: "fa-solid fa-bolt", pillClass: "next-pill" },
    ],
  },
  {
    id: "ui",
    title: "UI / Styling",
    icon: "uil uil-brush-alt",
    skills: [
      { name: "Tailwind CSS", icon: "fa-solid fa-wind", pillClass: "tailwind-pill" },
      { name: "Bootstrap", icon: "fa-brands fa-bootstrap", pillClass: "bootstrap-pill" },
      { name: "Ant Design", icon: "fa-solid fa-palette", pillClass: "antd-pill" },
      { name: "Responsive Design", icon: "fa-solid fa-mobile-screen-button", pillClass: "responsive-pill" },
      { name: "UI/UX Enhancement", icon: "fa-solid fa-wand-magic-sparkles", pillClass: "uiux-pill" },
    ],
  },
  {
    id: "backend",
    title: "Backend / API",
    icon: "uil uil-server",
    skills: [
      { name: "Laravel", icon: "fa-brands fa-laravel", pillClass: "laravel-pill" },
      { name: "PHP", icon: "fa-brands fa-php", pillClass: "php-pill" },
      { name: "REST APIs", icon: "fa-solid fa-network-wired", pillClass: "api-pill" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "uil uil-wrench",
    skills: [
      { name: "Git", icon: "fa-brands fa-git-alt", pillClass: "git-pill" },
      { name: "GitHub", icon: "fa-brands fa-github", pillClass: "github-pill" },
      { name: "VS Code", icon: "fa-solid fa-code", pillClass: "vscode-pill" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills & Technologies</h2>
      <span className="section__subtitle">My technical stack & toolkit</span>

      <div className="skills__container container">
        <div className="skills__categories-grid">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="skills__category-card">
              <div className="skills__category-header">
                <i className={`${cat.icon} skills__category-icon`}></i>
                <h3 className="skills__category-title">{cat.title}</h3>
              </div>

              <div className="skills__items-wrap">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className={`skills__item-pill ${skill.pillClass}`}>
                    <i className={`${skill.icon} skills__item-icon`}></i>
                    <span className="skills__item-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
