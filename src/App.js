import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-screen text-white font-sans scroll-smooth">
      <Navbar />

      <section id="home" className="pt-20 scroll-mt-[90px]">
        <Hero />
      </section>

      <section id="about" className="pt-20 scroll-mt-[90px]">
        <About />
      </section>

      <section id="skills" className="pt-20 scroll-mt-[90px]">
        <Skills />
      </section>

      <section id="experience" className="pt-20 scroll-mt-[90px]">
        <Experience />
      </section>

      <section id="projects" className="pt-20 scroll-mt-[90px]">
        <Projects />
      </section>

      <section id="contact" className="pt-20 scroll-mt-[90px]">
        <Contact />
      </section>

      <section id="footer" className="pt-20 scroll-mt-[90px]">
        <Footer />
      </section>
    </div>
  );
}
