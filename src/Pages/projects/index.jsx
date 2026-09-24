import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  Eye,
  X,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import "./project.css";

// Helper GitHub SVG Icon component
const GithubIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projectsData = [
  {
    id: "01",
    title: "Aether UI Design System",
    category: "UI Design System",
    status: "Live Component Kit",
    description:
      "Production-ready Frontend component library with 50+ accessible components, HSL design tokens, and smooth micro-interactions.",
    fullDescription:
      "A comprehensive dark-mode UI design system built with React, Tailwind CSS, and Framer Motion. Engineered with 50+ accessible components, HSL design tokens, theme switching, and Storybook documentation.",
    problemSolved:
      "Inconsistent UI patterns and redundant CSS across multiple projects slowing down feature delivery and creating design discrepancies.",
    myContribution:
      "Architected 50+ reusable accessible React components, structured custom HSL token system, and built interactive documentation.",
    features: [
      "50+ Accessible React & Tailwind UI components",
      "Custom HSL CSS design tokens & theme switcher",
      "Framer Motion micro-interactions & tab sliders",
      "Responsive grid, modals, and drawer components",
    ],
    tags: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
    metric: "50+ UI Components",
    image: "/assets/img/projects/dashboard.webp",
    liveUrl: "https://example.com/demo-aether-ui",
    githubUrl: "https://github.com/Devlinker/aether-ui-library",
  },
  {
    id: "02",
    title: "LuxNova Dashboard UI",
    category: "Web Applications",
    status: "Production Live",
    description:
      "Sleek frontend dashboard interface featuring responsive grid cards, dark glassmorphism, and Recharts analytics visualizers.",
    fullDescription:
      "Built a modern frontend web application interface featuring fluid responsive grid cards, glassmorphic dark-theme UI, interactive Recharts analytics, slide-over detail panels, and custom scroll triggers.",
    problemSolved:
      "Complex analytical metrics were cluttered and difficult to navigate on smaller laptops and mobile screens.",
    myContribution:
      "Engineered a responsive CSS grid layout, dark glassmorphism styling, and lightweight Recharts interactive charts.",
    features: [
      "Responsive CSS Grid & Flexbox layout",
      "Interactive analytics chart visualizers",
      "Dark glassmorphism UI with ambient glowing accents",
      "Cross-browser pixel-perfect responsiveness",
    ],
    tags: ["React", "CSS3 / SCSS", "Recharts", "Vite"],
    metric: "Responsive Analytics",
    image: "/assets/img/projects/ecommerce.webp",
    liveUrl: "https://example.com/demo-luxnova-dashboard",
    githubUrl: "https://github.com/Devlinker/luxnova-dashboard-ui",
  },
  {
    id: "03",
    title: "CyberPulse 3D Landing Page",
    category: "CSS & Web UI",
    status: "Featured UI",
    description:
      "High-impact landing page with particle canvas background, smooth scrolling, and 3D card tilt interactions.",
    fullDescription:
      "Engineered an animated frontend landing page showcasing dynamic canvas particle effects, smooth scrolling, 3D card hover tilt, and sleek neon gradient typography.",
    problemSolved:
      "Static promotional landing pages lacked visual engagement, resulting in high bounce rates and low lead conversion.",
    myContribution:
      "Developed high-performance 60fps micro-animations, interactive particle background, and responsive mobile drawer.",
    features: [
      "Interactive particle canvas background",
      "Smooth scroll & parallax transitions",
      "3D perspective card hover tilt interactions",
      "Fully responsive mobile navigation drawer",
    ],
    tags: ["JavaScript", "React", "Framer Motion", "CSS3"],
    metric: "Smooth 60fps Motion",
    image: "/assets/img/projects/ai_saas.webp",
    liveUrl: "https://example.com/demo-cyberpulse",
    githubUrl: "https://github.com/Devlinker/cyberpulse-animated-ui",
  },
  {
    id: "04",
    title: "Lumina E-Commerce UI",
    category: "React / Next.js",
    status: "v2.0 Released",
    description:
      "Modern fashion shop user interface featuring animated product modal previews, filter bar, and cart drawer.",
    fullDescription:
      "Designed and built an intuitive frontend user experience for an online fashion shop. Features slide-over cart drawers, instant live search filtering, responsive product grids, and animated tab bars.",
    problemSolved:
      "Clunky navigation and slow client-side filtering caused user friction during product catalog browsing.",
    myContribution:
      "Implemented slide-over cart drawer, instant multi-attribute filter drawer, and mobile-first responsive layout.",
    features: [
      "Slide-over cart drawer & filter drawer UI",
      "Instant live search & category tab filtering",
      "Responsive product gallery modal preview",
      "Pixel-perfect mobile-first web interface",
    ],
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    metric: "Mobile-First Design",
    image: "/assets/img/projects/dashboard.webp",
    liveUrl: "https://example.com/demo-lumina-shop",
    githubUrl: "https://github.com/Devlinker/lumina-ecommerce-ui",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects section" id="projects">
      {/* Ambient glowing blobs */}
      <div className="projects__glow projects__glow-1"></div>
      <div className="projects__glow projects__glow-2"></div>

      <div className="projects__container container">
        {/* Section Header */}
        <div className="projects__header">
          <div className="projects__badge">
            <span className="projects__pulse-dot"></span>
            <span>Featured Web Projects</span>
          </div>
          <h2 className="section__title">Frontend & Web Projects</h2>
          <span className="section__subtitle">
            Modern web applications, responsive landing pages, and UI systems
          </span>
        </div>

        {/* Responsive Grid of Project Cards */}
        <div className="projects__grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project__card">
              {/* Card Window Mockup Header */}
              <div className="project__img-box">
                <div className="project__window-bar">
                  <div className="project__window-dots">
                    <span className="project__dot project__dot-red"></span>
                    <span className="project__dot project__dot-yellow"></span>
                    <span className="project__dot project__dot-green"></span>
                  </div>
                  <span className="project__category-tag">{project.category}</span>
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="project__img"
                  loading="lazy"
                  decoding="async"
                />

                <div className="project__overlay">
                  <button
                    className="project__action-btn"
                    onClick={() => setSelectedProject(project)}
                    title="Quick View Details"
                  >
                    <Eye size={17} />
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project__action-btn"
                    title="GitHub Repository"
                  >
                    <GithubIcon size={17} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project__action-btn"
                    title="Live Demo"
                  >
                    <ExternalLink size={17} />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="project__body">
                <div>
                  <div className="project__status-row">
                    <span className="project__status-badge">
                      <span className="status__dot"></span>
                      {project.status}
                    </span>
                    <span className="project__metric">{project.metric}</span>
                  </div>

                  <h3 className="project__title">{project.title}</h3>
                  <p className="project__desc">{project.description}</p>
                </div>

                <div>
                  <div className="project__tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project__tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project__footer">
                    <span
                      className="project__details-link"
                      onClick={() => setSelectedProject(project)}
                    >
                      Details & Preview <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal__glass-box"
              initial={{ scale: 0.9, opacity: 0, y: 25 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 25 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal__close-btn"
                onClick={() => setSelectedProject(null)}
                title="Close"
              >
                <X size={20} />
              </button>

              <div className="modal__img-wrapper">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="modal__img"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <h3 className="modal__title">{selectedProject.title}</h3>

              <div className="modal__tags">
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className="project__tag">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="modal__desc">
                {selectedProject.fullDescription || selectedProject.description}
              </p>

              {selectedProject.problemSolved && (
                <div style={{ marginBottom: "1.25rem" }}>
                  <h4
                    style={{
                      fontSize: "1.05rem",
                      marginBottom: "0.4rem",
                      color: "var(--title-color)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <i className="uil uil-lightbulb-alt" style={{ color: "#eab308" }}></i>
                    Problem Solved
                  </h4>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-color)",
                      lineHeight: "1.6",
                    }}
                  >
                    {selectedProject.problemSolved}
                  </p>
                </div>
              )}

              {selectedProject.myContribution && (
                <div style={{ marginBottom: "1.5rem" }}>
                  <h4
                    style={{
                      fontSize: "1.05rem",
                      marginBottom: "0.4rem",
                      color: "var(--title-color)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <i className="uil uil-user-check" style={{ color: "var(--first-color)" }}></i>
                    My Contribution
                  </h4>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-color)",
                      lineHeight: "1.6",
                    }}
                  >
                    {selectedProject.myContribution}
                  </p>
                </div>
              )}

              {selectedProject.features && (
                <>
                  <h4
                    style={{
                      fontSize: "1.05rem",
                      marginBottom: "0.85rem",
                      color: "var(--title-color)",
                    }}
                  >
                    Frontend Architectural Features
                  </h4>
                  <div className="modal__features-grid">
                    {selectedProject.features.map((feat, idx) => (
                      <div key={idx} className="modal__feature-item">
                        <CheckCircle2
                          size={16}
                          style={{ color: "var(--first-color)", flexShrink: 0 }}
                        />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <div className="modal__actions">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button button--flex"
                >
                  Live Demo <ExternalLink size={16} style={{ marginLeft: "0.5rem" }} />
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button button--flex button--ghost"
                >
                  Source Code <GithubIcon size={16} style={{ marginLeft: "0.5rem" }} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
