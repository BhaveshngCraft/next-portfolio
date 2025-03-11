"use client";
import React from "react";

const projects = [
  {
    title: "Vasundhara Jewellers",
    description:
      "Developed a high-performance data management and reporting system for a jewelry shop, addressing critical inefficiencies. Initially, the reporting page took 5-10 minutes to load. By migrating 5000–6000 lines of business logic from the application layer to SQL procedures, optimizing data pipelines, and implementing indexing strategies, the performance was dramatically improved .",
     tech: [".NET Core", "SQL", "Performance Optimization"],
  },
  {
    title: "PizzaKa",
    description:
      "A location-based food delivery application with a core focus on pizza customization. Built from scratch using Clean Architecture principles with .NET Core Web API, Blazor, and MongoDB. Features include real-time order tracking, dynamic pricing, and an admin dashboard for efficient inventory and order management. Integrated Azure AD B2C for secure authentication, ensuring seamless login for both customers and administrators.",
    tech: [".NET Core", "Blazor", "MongoDB", "Azure AD B2C", "Real-time Tracking"],
  },
  {
    title: "Cinema360",
    description:
      "A movie booking admin platform for managing inventory, POS, and scheduling. Developed with Angular and .NET Core Web API, it provides real-time data visualization, automated scheduling, and advanced reporting for inventory, box office performance, and distributor analytics. Enhanced with MongoDB for scalable data handling and optimized admin workflows for seamless management.",
    tech: ["Angular", ".NET Core", "MongoDB", "Admin Panel", "Data Visualization"],
  },
];

function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-blue-500">Projects</h2>

        {/* Grid Layout: Forces Equal Height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all flex flex-col h-full"
            >
              {/* Project Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-3">
                {project.title}
              </h3>

              {/* Description: Takes up space dynamically */}
              <p className="text-gray-300 text-sm sm:text-base flex-grow">{project.description}</p>

              {/* Tech Stack: No more extra space below */}
              <div className="flex flex-wrap gap-2 justify-center mt-3">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs sm:text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
