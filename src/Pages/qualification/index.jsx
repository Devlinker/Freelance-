import { useState } from "react";
import "./qualification.css";

const workExperience = [
  {
    title: "Frontend Developer",
    subtitle: "Cartoon Mango Digital / Cartoon Mango Studios Pvt Ltd",
    calendar: "Jul 2024 – Jul 2025 • Coimbatore",
    tags: ["React.js", "Redux", "Ant Design", "SCSS", "REST APIs", "Agile"],
    modalTitle: "Frontend Developer - Cartoon Mango Studios",
    description:
      "Engineered high-performance, responsive web applications and internal portals for enterprise clients, collaborating with cross-functional design and backend teams.",
    points: [
      "Engineered responsive and scalable web applications utilizing React.js, Redux, and modern JavaScript.",
      "Developed comprehensive Employee / Attendance portal interfaces with Ant Design and modular SCSS.",
      "Integrated RESTful APIs for asynchronous data handling, user authentication, and dynamic state updates.",
      "Ensured pixel-perfect cross-browser compatibility and mobile responsiveness across diverse screen resolutions.",
      "Participated actively in Agile workflows, daily stand-up meetings, sprint reviews, and collaborative team planning.",
    ],
  },
];

const educationData = [
  {
    title: "B.Sc Information Technology",
    subtitle: "Hindustan College of Arts and Science, Coimbatore",
    calendar: "2021 - 2024",
    modalTitle: "College Summary :",
    points: [
      "Studied core IT subjects including DSA, Embedded systems, Design analysis and algorithm, Operating systems, and Computer architecture.",
      "Graduated with an aggregate of 8.50 CGPA.",
      "Implemented a bug tracking system during internship to streamline identifying and fixing software defects.",
    ],
  },
  {
    title: "Class 12th (Higher Secondary)",
    subtitle: "Government High School",
    calendar: "- 2021",
    modalTitle: "Class 12th Summary :",
    points: [
      "Subjects studied: Physics, Chemistry, Maths, English.",
      "Scored 72.5% in board examinations.",
    ],
  },
  {
    title: "SSLC (Class 10th)",
    subtitle: "Government High School",
    calendar: "- 2019",
    modalTitle: "Class 10th Summary :",
    points: [
      "Subjects studied: Science, Maths, English, Social Studies.",
      "Scored 66% in secondary school leaving examinations.",
      "Came runners up in inter-school competitions.",
    ],
  },
];

export default function Qualification() {
  const [activeTab, setActiveTab] = useState("work");
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Experience & Qualification</h2>
      <span className="section__subtitle">My professional journey & background</span>

      <div className="qualification__container container">
        {/* Toggle Pills */}
        <div className="qualification__tabs">
          <button
            type="button"
            className={`qualification__tab-pill ${
              activeTab === "work" ? "qualification__tab-active" : ""
            }`}
            onClick={() => {
              setActiveTab("work");
              setActiveModal(null);
            }}
          >
            <i className="uil uil-briefcase-alt"></i>
            Work Experience
          </button>

          <button
            type="button"
            className={`qualification__tab-pill ${
              activeTab === "education" ? "qualification__tab-active" : ""
            }`}
            onClick={() => {
              setActiveTab("education");
              setActiveModal(null);
            }}
          >
            <i className="uil uil-graduation-cap"></i>
            Education
          </button>
        </div>

        {/* Work Experience Tab Content */}
        {activeTab === "work" && (
          <div className="qualification__work-list">
            {workExperience.map((exp, idx) => (
              <div key={idx} className="qualification__work-card">
                <div className="qualification__work-header">
                  <div>
                    <span className="qualification__work-badge">Full-Time</span>
                    <h3 className="qualification__work-title">{exp.title}</h3>
                    <span className="qualification__work-company">{exp.subtitle}</span>
                  </div>
                  <div className="qualification__work-date">
                    <i className="uil uil-calendar-alt"></i> {exp.calendar}
                  </div>
                </div>

                <p className="qualification__work-desc">{exp.description}</p>

                <div className="qualification__work-tags">
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="qualification__tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="qualification__bullets">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="qualification__bullet-item">
                      <i className="uil uil-check-circle qualification__check"></i>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <span
                  className="button button--flex button--small button--link services__button"
                  style={{ marginTop: "1rem", display: "inline-flex" }}
                  onClick={() => setActiveModal({ ...exp, type: "work" })}
                >
                  View Details
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Education Tab Content (Timeline) */}
        {activeTab === "education" && (
          <div className="qualification__sections">
            <div className="qualification__content services__content">
              {educationData.map((edu, idx) => {
                const isEven = idx % 2 === 0;
                const showLine = idx !== educationData.length - 1;

                return (
                  <div key={idx} className="qualification__data">
                    {!isEven && <div></div>}

                    {isEven ? (
                      <div className="qualification__card">
                        <h3 className="qualification__title">{edu.title}</h3>
                        <span className="qualification__subtitle">{edu.subtitle}</span>
                        <div className="qualification__calender">
                          <i className="uil uil-calendar-alt"></i> {edu.calendar}
                        </div>
                        <span
                          className="button button--flex button--small button--link services__button"
                          onClick={() => setActiveModal({ ...edu, type: "edu" })}
                        >
                          View More
                          <i className="uil uil-arrow-right button__icon"></i>
                        </span>
                      </div>
                    ) : null}

                    <div>
                      <span className="qualification__rounder"></span>
                      {showLine && <span className="qualification__line"></span>}
                    </div>

                    {!isEven ? (
                      <div className="qualification__card">
                        <h3 className="qualification__title">{edu.title}</h3>
                        <span className="qualification__subtitle">{edu.subtitle}</span>
                        <div className="qualification__calender">
                          <i className="uil uil-calendar-alt"></i> {edu.calendar}
                        </div>
                        <span
                          className="button button--flex button--small button--link services__button"
                          onClick={() => setActiveModal({ ...edu, type: "edu" })}
                        >
                          View More
                          <i className="uil uil-arrow-right button__icon"></i>
                        </span>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Detail Modal */}
        {activeModal && (
          <div className="services__modal active-modal" onClick={() => setActiveModal(null)}>
            <div
              className="services__modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="services__modal-title">{activeModal.modalTitle}</h4>
              <i
                className="uil uil-times services__modal-close"
                onClick={() => setActiveModal(null)}
              ></i>
              <ul className="services__modal-services grid">
                {activeModal.points.map((point, pIdx) => (
                  <li key={pIdx} className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
