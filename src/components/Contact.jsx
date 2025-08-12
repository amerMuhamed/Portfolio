import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section  className="py-16 px-6 text-center">
      {/* العنوان */}
      <h2 className="text-3xl font-bold mb-2 text-white">Get In Touch</h2>
      <p className="text-gray-300 mb-10">
        Ready to collaborate? Let's connect!
      </p>

      {/* الكروت */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Email */}
        <a
          href="mailto:amermuhamedamer.com"
          className="bg-gradient-to-br from-cyan-500 to-purple-600 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <FaEnvelope size={30} className="mx-auto mb-3" />
          <h3 className="font-semibold">Email</h3>
          <p className="text-sm text-gray-200">Let's discuss your project</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/amer-mohamed-b43064263"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-cyan-500 to-purple-600 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <FaLinkedin size={30} className="mx-auto mb-3" />
          <h3 className="font-semibold">LinkedIn</h3>
          <p className="text-sm text-gray-200">Connect professionally</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/amerMuhamed"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-cyan-500 to-purple-600 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <FaGithub size={30} className="mx-auto mb-3" />
          <h3 className="font-semibold">GitHub</h3>
          <p className="text-sm text-gray-200">View my code</p>
        </a>
      </div>

     {/* زر الواتساب الثابت مع لمعة */}
{/* زر الواتساب الثابت */}
<a
  href="https://wa.me/+201157789596"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
  style={{
    boxShadow: "0 0 15px rgba(37, 211, 102, 0.9), 0 0 40px rgba(37, 211, 102, 0.6)"
  }}
>
  <FaWhatsapp size={28} color="white" />
</a>


    </section>
  );
}
