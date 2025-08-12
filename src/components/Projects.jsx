import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe, FaVideo, FaFigma, FaEyeSlash, FaEye } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Fitness App (Graduation Project – Grade: A+)",
      date: "Oct 2020 – Jul 2025",
      img: "assets/fit_monitor.png",
      tech: [
        "Spring Boot",
        "Spring Security",
        "Flutter",
        "Firebase",
        "AI Integration",
      ],
      links: {
        github: "https://github.com/amerMuhamed/GraduationProject",
        live: "https://abdowa7eed.pythonanywhere.com/",
        figma:
          "https://www.figma.com/design/RDLPaiEr28kyl7KhZYSlB6/Graduation-Project?node-id=0-1&p=f&t=eUJ2UDb6g8za1vY2-0",
        video:
          "https://drive.google.com/file/d/1m_do-NMP1n6rr6uXZxDGyhOPwwnSNdyE/view?usp=drive_link",
      },
      desc: [
        "Developed as a graduation project and awarded grade A+.",
        "Built a full stack mobile fitness app offering personalized workouts and meal plans using AI models.",
        "Integrated Firebase Authentication and Firestore for secure, scalable cloud-based data handling.",
        "Enabled real-time media uploads and activity tracking to support a complete fitness journey.",
        "Delivered dynamic UIs and logic using Flutter for seamless cross-platform experience.",
      ],
    },
    {
      title: "Task Management System",
      img: "assets/t.jpg",
      tech: ["Spring Boot", "Thymeleaf", "MySQL", "AWS S3", "Spring Security"],
      links: { github: "https://github.com/amerMuhamed/TaskManager" },
      desc: [
        "Developed a secure task management system with full CRUD capabilities.",
        "Implemented robust authentication and role-based access control using Spring Security.",
        "Integrated AWS S3 for scalable file storage with metadata stored in MySQL.",
      ],
    },
    {
      title: "E-Commerce Platform (In Progress)",
      img: "assets/e.jpg",
      tech: ["Spring Boot", "JWT", "MySQL", "Spring Security", "REST API"],
      links: { github: "https://github.com/amerMuhamed/Ecommerce-app" },
      desc: [
        "Developing a full-stack backend for an online shopping platform with JWT authentication.",
        "Implemented RESTful APIs for products, users, orders, and carts.",
        "Designed database schema using MySQL and JPA, and applied Spring Security.",
      ],
    },
    {
      title: "CRUD Application",
      img: "assets/c.jpg",
      tech: ["Spring Boot", "Thymeleaf", "Bootstrap"],
      links: { github: "https://github.com/amerMuhamed/CRUD-Application" },
      desc: [
        "Engineered a complete task tracking system with Spring Boot and Thymeleaf.",
        "Applied MVC design principles with full CRUD operations and validation.",
        "Styled with Bootstrap for a clean and responsive UI.",
      ],
    },
    {
      title: "Seira Shop",
      img: "assets/seira2.jpg",
      tech: [
        "React",
        "React Router",
        "Formik",
        "React Hook Form",
        "Tailwind CSS",
        "API Integration",
        "JavaScript",
      ],
      links: { github: "https://github.com/amerMuhamed/Seira-Shop" },
      desc: [
        "Designed and implemented an e-commerce frontend using React and Fake Store API.",
        "Used Tailwind CSS for styling and integrated Formik & React Hook Form for form handling.",
        "Added animations and ensured mobile responsiveness.",
      ],
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
   <section className="py-16 w-full px-4 md:px-24">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {visibleProjects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(34, 211, 238, 0.7)",
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-900/60 rounded-2xl overflow-hidden shadow-lg group transition"
          >
            {/* صورة المشروع + الأيقونات عند hover */}
            <div className="relative">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                {i === 0 ? (
                  <>
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-2xl hover:text-cyan-300"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-2xl hover:text-green-300"
                    >
                      <FaGlobe />
                    </a>
                    <a
                      href={p.links.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-2xl hover:text-pink-400"
                    >
                      <FaFigma />
                    </a>
                    <a
                      href={p.links.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-2xl hover:text-red-400"
                    >
                      <FaVideo />
                    </a>
                  </>
                ) : (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-cyan-300"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>

            {/* التفاصيل */}
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              {p.date && <p className="text-sm text-gray-400 mb-2">{p.date}</p>}
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-800 text-gray-200 text-xs px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ul className="list-disc list-inside text-gray-300 mb-4 text-sm space-y-1">
                {p.desc.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* زرار Show More */}
      {projects.length > 4 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-md transition-transform hover:scale-105 mx-auto"
          >
            {showAll ? <FaEyeSlash /> : <FaEye />}
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}
