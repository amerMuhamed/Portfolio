import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiHibernate, SiReact, SiTailwindcss, SiPostman } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava className="text-orange-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
    { name: "Spring MVC", icon: <SiSpringboot className="text-green-400" /> },
    { name: "Spring Data", icon: <SiSpringboot className="text-green-300" /> },
    { name: "Hibernate", icon: <SiHibernate className="text-yellow-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  ];

  return (
    <section className="py-16 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10 drop-shadow-lg">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 cursor-pointer">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(34, 211, 238, 0.7)"
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-black/30 p-3 rounded-xl shadow flex flex-col items-center gap-3"
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className="text-gray-200 text-lg">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
