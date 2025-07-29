import React from "react";

const projects = [
  {
    title: "Corporate Calendar System",
    description: "React.js + Django-based team calendar and task manager with MySQL.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "QA Automation",
    description: "Automated end-to-end testing suite for web applications using Selenium and Cypress.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "RestGuy Management",
    description: "A modern restaurant management platform for reservations, orders, and analytics.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  }
];

const Projects = () => (
  <section className="py-10 px-4 md:px-0">
    <h2 className="text-3xl font-bold text-center mb-6 text-cyan-400">🚀 Projects & Works</h2>
    <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
      {projects.map((project, idx) => (
        <div key={idx} className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 flex flex-col items-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover rounded-md mb-4"
            loading="lazy"
          />
          <h3 className="text-xl font-semibold mb-2 text-teal-300">{project.title}</h3>
          <p className="text-gray-300 text-center">{project.description}</p>
        </div>
      ))}
    </div>
    <hr className="border-t border-gray-700 w-1/2 my-8 mx-auto" />
  </section>
);

export default Projects;
