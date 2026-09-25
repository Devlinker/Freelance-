import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__top">
          {/* Logo & Brand */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="footer__logo-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 19V5L12 13L20 5V19" stroke="#ff7a00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="footer__logo-text">Mathan</span>
            </a>
            <p className="footer__tagline">Freelance Web Developer in Coimbatore</p>
          </div>

          {/* Nav Links */}
          <ul className="footer__nav">
            <li><a href="#home" className="footer__link">Home</a></li>
            <li><a href="#about" className="footer__link">About</a></li>
            <li><a href="#services" className="footer__link">Services</a></li>
            <li><a href="#projects" className="footer__link">Projects</a></li>
            <li><a href="#faq" className="footer__link">FAQ</a></li>
            <li><a href="#contact" className="footer__link">Contact</a></li>
          </ul>

          {/* Social Links */}
          <div className="footer__socials">
            <a
              href="https://github.com/Devlinker"
              target="_blank"
              rel="noreferrer"
              className="footer__social-btn"
              title="GitHub"
            >
              <i className="fa-brands fa-github"></i>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/devlinker/"
              target="_blank"
              rel="noreferrer"
              className="footer__social-btn"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://wa.me/919944263098"
              target="_blank"
              rel="noreferrer"
              className="footer__social-btn"
              title="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Mathan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
