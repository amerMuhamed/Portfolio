import React, { useState, useEffect } from "react";

export default function Navbar() {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // نصف العنصر ظاهر
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 flex items-center justify-center bg-cyan-200 text-black font-bold text-lg rounded-full shadow-md">
            AM
          </div>
          <span className="text-lg font-semibold text-cyan-200">
            Amer Mohamed
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-white relative">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative pb-1 transition-all ${
                activeSection === id
                  ? "text-cyan-200 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-200 after:rounded-full after:animate-pulse"
                  : "hover:text-cyan-200"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
