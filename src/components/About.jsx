import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function About() {
  const fastFade = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10 drop-shadow-lg text-white">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-6 cursor-pointer">
        {/* About */}
        <motion.div
          variants={fastFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(34, 211, 238, 0.7)",
          }}
          whileTap={{ scale: 0.98 }}
          className="bg-black/30 p-6 rounded-xl shadow text-left transition-transform duration-300"
        >
          <p className="text-lg leading-relaxed drop-shadow-sm text-gray-300">
            I am a results-driven Java Backend Developer experienced in building
            scalable applications using Spring Boot, Hibernate, and MySQL.
            Skilled in REST API design, database optimization, and clean code
            principles.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          variants={fastFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(34, 211, 238, 0.7)",
          }}
          whileTap={{ scale: 0.98 }}
          className="bg-black/30 p-6 rounded-xl shadow flex flex-col items-center text-center transition-transform duration-300"
        >
          <FaGraduationCap size={50} className="text-cyan-400 mb-4" />
          <h3 className="text-xl font-semibold text-cyan-300">Education</h3>
          <p className="mt-2 text-white font-medium">Al-Azhar University</p>
          <p className="text-gray-300 text-sm">
            BSc in Systems & Computers Engineering
          </p>
          <p className="text-sm" style={{ color: "rgb(3,12,48)" }}>
            Excellent with Honors
          </p>
          <p className="text-sm" style={{ color: "rgb(3,12,48)" }}>
            Oct 2020 – Jul 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}
