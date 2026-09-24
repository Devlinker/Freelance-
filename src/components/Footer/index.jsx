import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h4 className="footer__title">Mathan</h4>
            <span className="footer__subtitle">Frontend & Freelance Web Development</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">Services</a>
            </li>
            <li>
              <a href="#projects" className="footer__link">Projects</a>
            </li>
            <li>
              <a href="#qualification" className="footer__link">Experience</a>
            </li>
            <li>
              <a href="#skills" className="footer__link">Skills</a>
            </li>
            <li>
              <a href="#contact" className="footer__link">Contact</a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/devlinker/"
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              href="https://github.com/Devlinker"
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.instagram.com/madhann._____/"
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <p className="footer__copy">&#169; 2026 Mathan All right reserved</p>
      </div>
    </footer>
  );
}
