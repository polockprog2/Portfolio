import React from "react";

const techs = [
  { name: "Python", icon: "python" },
  { name: "Django", icon: "django" },
  { name: "React", icon: "react" },
  { name: "JavaScript", icon: "js" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "MySQL", icon: "mysql" },
  { name: "Git", icon: "git" },
  { name: "C#", icon: "csharp" },
  { name: ".NET", icon: "dotnet" },
  { name: "TensorFlow", icon: "tensorflow" },
  { name: "Java", icon: "java" },
];

const TechStack = () => (
  <section className="py-10 flex flex-col items-center">
    <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">💻 Tech Stack & Tools</h2>
    <div className="bg-gray-800/80 rounded-3xl shadow-2xl p-10 w-full max-w-3xl border-2 border-white/10 backdrop-blur-xl">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
        {techs.map((tech) => (
          <div key={tech.icon} className="flex flex-col items-center group relative">
            <img
              src={`https://skillicons.dev/icons?i=${tech.icon}`}
              alt={tech.name}
              className="w-14 h-14 mb-2 transition-transform duration-200 group-hover:scale-125 drop-shadow-lg"
            />
            <span className="text-xs text-gray-300 bg-gray-700 rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute mt-16 z-10 pointer-events-none shadow-lg">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
    <hr className="border-t-2 border-cyan-400 w-1/2 my-10 opacity-60 animate-fade-in delay-300" />
  </section>
);

export default TechStack;
    