import { useState } from "react";
import "./contact.css";
import Toast from "../../components/Toast/index.jsx";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "submitting", message: "Sending your message..." });

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          message: message,
          subject: `Portfolio Message from ${name}`,
          from_name: "Portfolio Visitor",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. I'll get back to you shortly.",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error sending message via Web3Forms:", error);
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in Touch</h2>
      <span className="section__subtitle">
        Have a website project or idea? Let's discuss it.
      </span>

      <div className="contact__container container grid">
        {/* Left Information List */}
        <div className="contact__info-list">
          {/* WhatsApp Card */}
          <div className="contact__card">
            <div className="contact__information">
              <i className="fa-brands fa-whatsapp contact__icon" style={{ color: "#25D366" }}></i>
              <div>
                <h3 className="contact__title">WhatsApp</h3>
                <span className="contact__subtitle">
                  <a
                    href="https://wa.me/919944263098?text=Hi%20Mathan,%20I'm%20interested%20in%20discussing%20a%20website%20project!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__link"
                  >
                    +91 9944263098 (Chat Now)
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="contact__card">
            <div className="contact__information">
              <i className="uil uil-envelope-minus contact__icon"></i>
              <div>
                <h3 className="contact__title">Email</h3>
                <span className="contact__subtitle">
                  <a href="mailto:mathansaran8@gmail.com" className="contact__link">
                    mathansaran8@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="contact__card">
            <div className="contact__information">
              <i className="uil uil-calling contact__icon"></i>
              <div>
                <h3 className="contact__title">Call Me</h3>
                <span className="contact__subtitle">
                  <a href="tel:9944263098" className="contact__link">
                    +91 9944263098
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="contact__card">
            <div className="contact__information">
              <i className="uil uil-map-marker contact__icon"></i>
              <div>
                <h3 className="contact__title">Location</h3>
                <span className="contact__subtitle">
                  <a
                    href="https://maps.google.com/?q=Coimbatore,+Tamil+Nadu,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__link"
                  >
                    Coimbatore, Tamil Nadu, India
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Direct Social Links */}
          <div className="contact__direct-socials">
            <a
              href="https://www.linkedin.com/in/devlinker/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-chip"
            >
              <i className="fa-brands fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Devlinker"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-chip"
            >
              <i className="fa-brands fa-github"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact__form grid">
          <div className="contact__content">
            <label htmlFor="name" className="contact__label">Name</label>
            <input
              type="text"
              id="name"
              className="contact__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>

          <div className="contact__content">
            <label htmlFor="email" className="contact__label">Email</label>
            <input
              type="email"
              id="email"
              className="contact__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
            />
          </div>

          <div className="contact__content">
            <label htmlFor="message" className="contact__label">Message</label>
            <textarea
              id="message"
              cols="0"
              rows="5"
              className="contact__input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project, goals, or role..."
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="button button--flex"
              style={{
                border: "none",
                cursor: status.type === "submitting" ? "not-allowed" : "pointer",
                width: "100%",
                justifyContent: "center",
              }}
              disabled={status.type === "submitting"}
            >
              {status.type === "submitting" ? "Sending..." : "Send Message"}
              <i className="uil uil-message button__icon"></i>
            </button>
          </div>
        </form>
      </div>

      <Toast
        message={status.message}
        type={status.type}
        onClose={() => setStatus({ type: "", message: "" })}
      />
    </section>
  );
}
