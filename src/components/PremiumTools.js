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
  const fadeRef = useFadeInOnScroll(900, 50);
  return (
    <section className="mt-16" ref={fadeRef}>
      <div className="mb-8">
        <h2 className="text-5xl font-extrabold text-white leading-none">LANGUAGES & TECH</h2>
        <h3 className="text-5xl font-extrabold text-gray-800 leading-none" style={{letterSpacing: '-2px'}}>STACK</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tools.map((tool, idx) => (
          <a key={idx} href={tool.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 bg-black/80 rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-lg mr-2">
              <img src={tool.icon} alt={tool.name} className="w-10 h-10 object-contain" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white mb-1" style={{fontFamily: 'Fira Sans, sans-serif'}}>{tool.name}</div>
              <div className="text-base text-gray-300 font-medium">{tool.description}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PremiumTools;
