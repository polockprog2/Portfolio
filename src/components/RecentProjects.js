import React from "react";
import { useFadeInOnScroll } from "../utils/animations";

const projects = [
  {
    name: "Revo Free Framer Template",
    description: "Framer Template",
    link: "https://www.framer.com/marketplace/templates/revo?via=mejed_k",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg"
  },
  {
    name: "NajmAI SaaS Framer Template",
    description: "SaaS Template",
    link: "https://www.framer.com/marketplace/templates/najmai?via=mejed_k",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Nashra SaaS Framer Template",
    description: "SaaS Template",
    link: "https://www.framer.com/marketplace/templates/nashra?via=mejed_k",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  }
];

const RecentProjects = () => {
  const fadeRef = useFadeInOnScroll();
  return (
    <section className="mt-16" ref={fadeRef}>
      <div className="mb-8">
        <h2 className="text-5xl font-extrabold text-white leading-none">RECENT</h2>
        <h3 className="text-5xl font-extrabold text-gray-800 leading-none" style={{letterSpacing: '-2px'}}>PROJECTS</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, idx) => (
          <a key={idx} href={p.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 bg-black/80 rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-lg mr-2">
              <img src={p.icon} alt={p.name} className="w-10 h-10 object-contain" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white mb-1" style={{fontFamily: 'Fira Sans, sans-serif'}}>{p.name}</div>
              <div className="text-base text-gray-300 font-medium">{p.description}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
