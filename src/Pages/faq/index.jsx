import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./faq.css";

const faqs = [
  {
    q: "Do you provide website development services in Coimbatore?",
    a: "Yes! I provide professional freelance web development services for businesses, startups, and individuals in Coimbatore and remotely for global clients.",
  },
  {
    q: "Can you create a responsive website for my business?",
    a: "Yes, 100%. Every website is engineered mobile-first, ensuring smooth responsiveness across smartphones, tablets, laptops, and ultra-wide screens.",
  },
  {
    q: "Do you develop business websites?",
    a: "Yes, I build modern, SEO-optimized business websites tailored to showcase your services, build brand credibility, and convert visitors into leads.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. I can revamp outdated websites with modern design aesthetics, faster page load speed, cleaner code, and improved user experience.",
  },
  {
    q: "Do you work with React and Next.js?",
    a: "Yes, React.js and Next.js are my core technologies. I build fast, server-rendered, and scalable frontend applications with optimal performance.",
  },
  {
    q: "How can I start a website project with you?",
    a: "You can reach out through the contact form below, message me on WhatsApp, or send an email. We'll discuss your goals, scope, and timeline to get started.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq section" id="faq">
      <div className="faq__container container">
        <div className="faq__header">
          <span className="section__tag">FAQ</span>
          <h2 className="section__title">
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
        </div>

        {/* 2-Column Accordion Grid */}
        <div className="faq__grid">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq__item ${isOpen ? "faq__item--open" : ""}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq__question">
                  <span>{faq.q}</span>
                  <div className="faq__chevron">
                    <ChevronDown size={18} />
                  </div>
                </div>

                {isOpen && (
                  <div className="faq__answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
