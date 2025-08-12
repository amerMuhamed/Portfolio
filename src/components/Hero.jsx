import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      boxShadow: "0px 0px 20px rgba(34, 211, 238, 0.7)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section
      className="flex flex-col justify-center items-center text-center px-4  pt-2"
    >
      <motion.img
        // any image link
        src="assets/amer.jpg"
        alt="Profile"
        variants={imageAnimation}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
        className="rounded-full border-4 border-cyan-300 shadow-lg w-40 h-40 mb-6 object-cover"
      />
      <h1 className="text-4xl font-bold text-white">Amer Mohamed</h1>
      <p className="text-lg text-cyan-200 mt-2 typing-effect">
        Java Backend Developer | Cairo, Egypt
      </p>
      <a
        href="https://drive.google.com/file/d/1_QdVgB7j-iiD6XM8p5PyH9Iaa3WuKHgc/view"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition"
      >
        View CV
      </a>
    </section>
  );
}
