import { useState } from "react";
import { ArrowRight, ExternalLink, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import "./project.css";

const projects = [
  {
    id: "01",
    title: "NOSTRA Gallery",
    description: "A modern gallery website with smooth animations and clean UI.",
    fullDescription: "NOSTRA Gallery is a curated visual showcase website featuring high-performance image optimization, smooth layout transitions with Framer Motion, and a refined minimal aesthetic.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/assets/img/projects/dashboard.webp",
    liveUrl: "https://example.com/nostra-gallery",
    githubUrl: "https://github.com/Devlinker",
  },
  {
    id: "02",
    title: "Bug Watch",
    description: "A platform to report and track bugs efficiently.",
    fullDescription: "Bug Watch simplifies issue tracking and bug triage for agile development teams. Features clean Kanban boards, priority categorization, and interactive status reporting.",
    tags: ["React.js", "Tailwind CSS", "API"],
    image: "/assets/img/projects/ai_saas.webp",
    liveUrl: "https://example.com/bug-watch",
    githubUrl: "https://github.com/Devlinker",
  },
  {
    id: "03",
    title: "E-Commerce Website",
    description: "Responsive e-commerce website with modern design and cart functionality.",
    fullDescription: "A full-featured responsive online shopping experience with animated cart drawers, dynamic filtering, secure checkout UI, and smooth product visualizers.",
    tags: ["React.js", "Redux", "Laravel"],
    image: "/assets/img/projects/ecommerce.webp",
    liveUrl: "https://example.com/ecommerce-platform",
    githubUrl: "https://github.com/Devlinker",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="projects section" id="projects">
      <div className="projects__container container">
        {/* Header with Title and "View All Projects" */}
        <div className="projects__top-bar">
          <div>
            <span className="section__tag">My Work</span>
            <h2 className="section__title">
              Website Development <span className="highlight">Projects</span>
            </h2>
          </div>

          <a
            href="https://github.com/Devlinker"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__view-all"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* 3 Featured Project Cards Grid */}
        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Image Frame */}
              <div
                className="project-card__image-box"
                onClick={() => setActiveProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__img"
                  loading="lazy"
                />
                <div className="project-card__overlay">
                  <span className="project-card__preview-badge">Quick Preview</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="project-card__content">
                <h3
                  className="project-card__title"
                  onClick={() => setActiveProject(project)}
                >
                  {project.title}
                </h3>
                <p className="project-card__desc">{project.description}</p>

                {/* Tech Tags */}
                <div className="project-card__tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <button
                  className="project-card__link"
                  onClick={() => setActiveProject(project)}
                >
                  <span>View Project</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="project-modal__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="project-modal__box"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="project-modal__close"
                onClick={() => setActiveProject(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="project-modal__img-wrapper">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="project-modal__img"
                />
              </div>

              <div className="project-modal__info">
                <h3 className="project-modal__title">{activeProject.title}</h3>

                <div className="project-card__tags" style={{ marginBottom: "1rem" }}>
                  {activeProject.tags.map((tag, idx) => (
                    <span key={idx} className="project-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="project-modal__desc">
                  {activeProject.fullDescription || activeProject.description}
                </p>

                <div className="project-modal__actions">
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button button--ghost"
                  >
                    GitHub Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
