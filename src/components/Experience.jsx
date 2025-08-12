import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Java & Oracle Database Instructor",
      company: "MICA Egypt • On-site, Giza",
      period: "Jul 2025 – Present",
      desc: "Delivering training sessions on Java SE and Oracle Database for engineering students. Covered JDBC, SQL queries, table relationships, normalization, and sequences. Provided real-time examples, lab exercises, and one-on-one student support. Helped students connect Java applications with Oracle using JDBC."
    },
    {
      role: "Coding Instructor",
      company: "3C Coding School • Remote",
      period: "Jan 2025 – Present",
      desc: "Teaching HTML, CSS, Python, Scratch, and App Inventor to young learners. Delivered interactive lessons and beginner-friendly projects."
    },
    {
      role: "React Web Developer Trainee",
      company: "Digital Egypt Pioneers Initiative (DEPI) • Remote",
      period: "Jun 2024 – Nov 2024",
      desc: "Hands-on training with React, Tailwind, JavaScript, and APIs. Developed responsive components and mini-projects."
    },
    {
      role: "Java Instructor",
      company: "Team AZ-SENCS Al-Azhar • On-site, Nasr City",
      period: "Oct 2022 – Apr 2023",
      desc: "Taught Java, OOP, and Data Structures to 50+ students in live sessions. Delivered lectures, coding exercises, and practical labs."
    }
  ];

  return (
      <section className="py-16 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 drop-shadow-lg">
          Experience
        </h2>
        <div className="space-y-6 cursor-pointer">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(34, 211, 238, 0.7)"
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-black/30 p-6 rounded-xl shadow transition"
          >
            <h3 className="text-xl font-semibold text-cyan-300">{exp.role}</h3>
            <p className="text-gray-400">{exp.company} • {exp.period}</p>
            <p className="mt-2 text-gray-200">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
