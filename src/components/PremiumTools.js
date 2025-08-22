import React from "react";
import { useFadeInOnScroll } from "../utils/animations";

const tools = [
  {
    name: ".NET",
    description: "Framework for building Windows and web applications",
    link: "https://dotnet.microsoft.com/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
  },
  {
    name: "Java",
    description: "Object-oriented programming language",
    link: "https://www.java.com/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  {
    name: "Python",
    description: "Popular language for scripting and data science",
    link: "https://www.python.org/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "Node.js",
    description: "JavaScript runtime for backend development",
    link: "https://nodejs.org/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "React.js",
    description: "JavaScript library for building user interfaces",
    link: "https://react.dev/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "TensorFlow",
    description: "Open-source machine learning framework",
    link: "https://www.tensorflow.org/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
  },
  {
    name: "MS SQL Server",
    description: "Microsoft's relational database system",
    link: "https://www.microsoft.com/en-us/sql-server",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
  },
  {
    name: "Oracle",
    description: "Enterprise relational database system",
    link: "https://www.oracle.com/database/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
  }
];

const PremiumTools = () => {
  const fadeRef = useFadeInOnScroll({ duration: 900, offset: 50 });
  return (
    <section className="mt-16" ref={fadeRef}>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
          Languages & Tech Stack
        </h2>
        <p className="text-gray-400 mt-2">Technologies I work with</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, idx) => (
          <a key={idx} href={tool.link} target="_blank" rel="noopener noreferrer" className="group bg-white/5 backdrop-blur rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/10 hover:border-cyan-400">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow group-hover:scale-110 transition-transform">
                <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain" />
              </div>
              <div className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{tool.name}</div>
            </div>
            <div className="text-sm text-gray-300 leading-relaxed">{tool.description}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PremiumTools;
