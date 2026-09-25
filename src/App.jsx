import { useState, useEffect } from "react";
import Header from "./components/Header/index.jsx";
import Home from "./Pages/home/index.jsx";
import About from "./Pages/about/index.jsx";
import Services from "./Pages/services/index.jsx";
import WhyChoose from "./Pages/whyChoose/index.jsx";
import Skills from "./Pages/skills/index.jsx";
import Projects from "./Pages/projects/index.jsx";
import Process from "./Pages/process/index.jsx";
import LocalSeo from "./Pages/localSeo/index.jsx";
import Faq from "./Pages/faq/index.jsx";
import Contact from "./Pages/contact/index.jsx";
import Footer from "./components/Footer/index.jsx";
import ScrollUp from "./components/ScrollUp/index.jsx";
import SplashCursor from "./components/SplashCursor/SplashCursor.jsx";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.classList.add("dark-theme");

    // Track Active Navigation Link
    const handleActiveLinkScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleActiveLinkScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleActiveLinkScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SplashCursor RAINBOW_MODE={false} COLOR="#ff7a00" />
      <Header activeSection={activeSection} />
      <main className="main">
        <Home />
        <About />
        <Services />
        <WhyChoose />
        <Skills />
        <Projects />
        <Process />
        <LocalSeo />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}
