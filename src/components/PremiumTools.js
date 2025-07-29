import React from "react";
import { useFadeInOnScroll } from "../utils/animations";

const tools = [
  {
    name: "Framer",
    description: "Website Builder",
    link: "https://framer.com/?via=mejed_k",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg"
  },
  {
    name: "Figma",
    description: "Design Tool",
    link: "https://www.figma.com/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  },
  {
    name: "Lemon Squeezy",
    description: "Payments Provider",
    link: "https://www.lemonsqueezy.com/",
    icon: "https://www.lemonsqueezy.com/favicon.ico"
  },
  {
    name: "ChatGPT",
    description: "AI Assistant",
    link: "https://chat.openai.com/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
  },
  {
    name: "Notion",
    description: "Productivity Tool",
    link: "https://www.notion.so/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg"
  },
  {
    name: "Nextjs",
    description: "React framework",
    link: "https://nextjs.org/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
  }
];

const PremiumTools = () => {
  const fadeRef = useFadeInOnScroll(900, 50);
  return (
    <section className="mt-16" ref={fadeRef}>
      <div className="mb-8">
        <h2 className="text-5xl font-extrabold text-white leading-none">PREMIUM</h2>
        <h3 className="text-5xl font-extrabold text-gray-800 leading-none" style={{letterSpacing: '-2px'}}>TOOLS</h3>
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
