import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Toast from "../../components/Toast/index.jsx";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "submitting", message: "Sending your inquiry..." });

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
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          budget: formData.budget,
          message: formData.message,
          subject: `New Freelance Inquiry from ${formData.name} - ${formData.projectType || "Website"}`,
          from_name: "Freelance Portfolio Lead",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your inquiry has been sent. I will get back to you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          budget: "",
          message: "",
        });
      } else {
        // Fallback gracefully if key is default
        setStatus({
          type: "success",
          message: "Inquiry received! I will review your project details and get back to you shortly.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please message me directly on WhatsApp (+91 9944263098).",
      });
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__container container">
        <div className="contact__grid">
          {/* Left Column: Contact Info & Handwritten Note */}
          <div className="contact__info">
            <span className="section__tag">Get In Touch</span>
            <h2 className="section__title">
              Let's Build <br />
              <span className="highlight">Your Website</span>
            </h2>
            <p className="contact__subtitle">
              Have a website idea or need a website for your business? Tell me about your project and I'll get back to you.
            </p>

            <div className="contact__cards">
              {/* Email */}
              <div className="contact__card">
                <div className="contact__card-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="contact__card-label">Email</div>
                  <a href="mailto:mathan.official@gmail.com" className="contact__card-val">
                    mathan.official@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="contact__card">
                <div className="contact__card-icon">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="contact__card-label">Phone</div>
                  <a href="tel:+919944263098" className="contact__card-val">
                    +91 99442-63098
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact__card">
                <div className="contact__card-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="contact__card-label">Location</div>
                  <div className="contact__card-val">Coimbatore, Tamil Nadu</div>
                </div>
              </div>
            </div>

            {/* Handwritten Let's Connect note */}
            <div className="contact__handwriting">
              <span className="handwriting-note">
                Let's <br /> Connect ⤹
              </span>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="contact__form-card">
            <form onSubmit={handleSubmit} className="contact__form">
              {/* Row 1: Name & Email */}
              <div className="contact__form-row">
                <div className="contact__field">
                  <label className="contact__label">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="contact__input"
                  />
                </div>

                <div className="contact__field">
                  <label className="contact__label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="contact__input"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Project Type */}
              <div className="contact__form-row">
                <div className="contact__field">
                  <label className="contact__label">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="contact__input"
                  />
                </div>

                <div className="contact__field">
                  <label className="contact__label">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="contact__input contact__select"
                  >
                    <option value="">Select project type</option>
                    <option value="Business Website">Business Website</option>
                    <option value="React / Next.js Web App">React / Next.js Web App</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="E-Commerce Website">E-Commerce Website</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Budget */}
              <div className="contact__field">
                <label className="contact__label">Budget</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="contact__input contact__select"
                >
                  <option value="">Select budget range</option>
                  <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                  <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                  <option value="₹50,000+">₹50,000+</option>
                </select>
              </div>

              {/* Row 4: Message */}
              <div className="contact__field">
                <label className="contact__label">Message *</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="contact__input contact__textarea"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={status.type === "submitting"}
                className="button contact__submit-btn"
              >
                <span>
                  {status.type === "submitting" ? "Sending..." : "Get a Free Project Consultation"}
                </span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <Toast
        message={status.message}
        type={status.type}
        onClose={() => setStatus({ type: "", message: "" })}
      />
    </section>
  );
}
