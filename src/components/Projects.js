import React from "react";

const projects = [
  {
    title: "Corporate Calendar System",
    description: "React.js + Django-based team calendar and task manager with MySQL."
  },
  {
    title: "Lung Cancer Detection",
    description: "CNN-powered classification model for radiographic image analysis."
  },
  {
    title: "Recipe Classification",
    description: "High-accuracy classification using CatBoost, MLP, and SVM on RecipeNLG."
  },
  {
    title: "Event Booking Platform",
    description: "Connects clients, photographers, and organizers."
  }
];

const Projects = () => (
  <section className="py-10 px-4 md:px-0">
    <h2 className="text-3xl font-bold text-center mb-6 text-cyan-400">🚀 Projects & Works</h2>
    <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
      {projects.map((project, idx) => (
        <div key={idx} className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-2 text-teal-300">{project.title}</h3>
          <p className="text-gray-300">{project.description}</p>
        </div>
      ))}
    </div>
    <hr className="border-t border-gray-700 w-1/2 my-8 mx-auto" />
  </section>
);

export default Projects;
