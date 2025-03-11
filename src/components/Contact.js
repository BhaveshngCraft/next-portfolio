"use client";
import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-500 mb-6">Let's Connect</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Feel free to reach out for collaborations or just a chat!
        </p>

        {/* Contact Links with Icons */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:chaudharibhavesh23102001@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
          >
            <FaEnvelope className="text-xl" /> Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/bhaveshdotnetenthusiast/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all"
          >
            <FaLinkedin className="text-xl" /> LinkedIn
          </a>
          <a
            href="https://github.com/BhaveshngCraft"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all"
          >
            <FaGithub className="text-xl" /> GitHub
          </a>
        </div>

        {/* Outro */}
        <p className="mt-12 text-gray-400 text-sm">
          Built with 💙 by Bhavesh. Thank you for visiting my portfolio!
        </p>
      </div>
    </section>
  );
}

export default Contact;
