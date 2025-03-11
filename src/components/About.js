import React from "react";

function About() {
  return (
    <section
      id="about"
      className="h-screen flex flex-col items-center justify-center bg-gray-800 text-white px-4 sm:px-8"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">About Me</h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          Hey! I'm <span className="font-semibold">Bhavesh</span>, a passionate 
          <span className="text-blue-400"> Full-Stack Developer</span> with 
          <span className="font-semibold"> 1.5 years</span> of experience in building scalable web applications.  
          I specialize in modern web technologies and love creating high-performance, user-friendly applications.
        </p>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          My expertise spans across <span className="font-semibold">Frontend, Backend, and Database</span> technologies, making me a complete full-stack developer.
        </p>

        {/* Skills Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">Tech Stack</h3>

          {/* Frontend Skills */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-200 mb-2">Frontend</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <span className="px-4 py-2 bg-blue-500 text-white rounded-lg">React.js</span>
              <span className="px-4 py-2 bg-blue-500 text-white rounded-lg">Next.js</span>
              <span className="px-4 py-2 bg-blue-500 text-white rounded-lg">Angular</span>
              <span className="px-4 py-2 bg-blue-500 text-white rounded-lg">Blazor</span>
            </div>
          </div>

          {/* Backend Skills - Centered */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-200 mb-2">Backend</h4>
            <div className="flex flex-wrap justify-center gap-x-6">
              <span className="px-4 py-2 bg-green-500 text-white rounded-lg">.NET Core Web API</span>
              <span className="px-4 py-2 bg-green-500 text-white rounded-lg">Entity Framework</span>
            </div>
          </div>

          {/* Database Skills */}
          <div>
            <h4 className="text-xl font-semibold text-gray-200 mb-2">Database</h4>
            <div className="flex flex-wrap justify-center gap-x-6">
              <span className="px-4 py-2 bg-purple-500 text-white rounded-lg">MongoDB</span>
              <span className="px-4 py-2 bg-purple-500 text-white rounded-lg">SQL</span>
              <span className="px-4 py-2 bg-purple-500 text-white rounded-lg">PostgreSQL</span>
            </div>
          </div>
        </div>

        {/* Summary Statement */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          I thrive on solving complex problems and continuously improving my skills.  
          I aim to build impactful, high-performance applications that make a difference.
        </p>
      </div>
    </section>
  );
}

export default About;
