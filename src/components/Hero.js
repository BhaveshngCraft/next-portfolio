"use client";
import React from "react";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-screen bg-gray-900 text-white px-6">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500">Bhavesh</span> 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          A 23-year-old Software Developer with <span className="font-semibold">1.5 years</span> of experience.
        </p>

        {/* Main Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
          >
            More About Me
          </button>

          <button
            onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all"
          >
            View My Work
          </button>

          <button
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all"
          >
            Let's Connect
          </button>
        </div>

        {/* Resume Download Section */}
        <div className="mt-6">
          <a
            href="/Bhavesh_Resume.pdf" // Make sure resume.pdf is inside the public folder
            download="Bhavesh_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all border border-gray-600 shadow-md"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
