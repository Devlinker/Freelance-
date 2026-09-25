import { MapPin, Check } from "lucide-react";
import "./localSeo.css";

const localKeywords = [
  "Freelance Web Developer Coimbatore",
  "Website Developer in Coimbatore",
  "Business Website Developer Coimbatore",
  "Web Application Development Coimbatore",
];

export default function LocalSeo() {
  return (
    <section className="local-seo section" id="local-seo">
      <div className="local-seo__container container">
        <div className="local-seo__card">
          {/* Subtle Skyline Graphic Vector */}
          <div className="local-seo__skyline-bg">
            <svg
              viewBox="0 0 800 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="local-seo__skyline-svg"
            >
              <path
                d="M0 200V160H40V130H60V160H110V90H140V160H180V120H220V160H270V80L290 50L310 80V160H360V140H400V160H450V100L480 30L510 100V160H560V130H600V160H650V70H690V160H740V140H800V200H0Z"
                fill="url(#skylineGlow)"
                opacity="0.25"
              />
              <defs>
                <linearGradient id="skylineGlow" x1="400" y1="30" x2="400" y2="200" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ff7a00" stopOpacity="0.4" />
                  <stop offset="1" stopColor="#ff7a00" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="local-seo__grid">
            {/* Left Content */}
            <div className="local-seo__content">
              <div className="local-seo__tag">
                <MapPin size={16} color="#ff7a00" />
                <span>Local SEO</span>
              </div>

              <h2 className="local-seo__title">
                Freelance Web Developer <br />
                <span className="highlight">Serving Coimbatore Businesses</span>
              </h2>

              <p className="local-seo__desc">
                Looking for a freelance web developer in Coimbatore? I help local businesses, startups and individuals create professional, responsive and SEO-friendly websites. From business websites and landing pages to React and Next.js development, I provide customized web development solutions based on your requirements.
              </p>
            </div>

            {/* Right Checklist */}
            <div className="local-seo__checklist">
              {localKeywords.map((kw, index) => (
                <div key={index} className="local-seo__check-item">
                  <div className="local-seo__check-icon">
                    <Check size={14} color="#ff7a00" />
                  </div>
                  <span className="local-seo__check-text">{kw}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
