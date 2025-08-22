import React from "react";
import { useFadeInOnScroll } from "../utils/animations";

const stats = [
  { value: "+4", label: "YEARS OF EXPERIENCE" },
  { value: "+14", label: "PROJECTS COMPLETED" },
];

const Stats = () => {
  const fadeRef = useFadeInOnScroll({ duration: 700, offset: 0 });
  return (
    <div className="flex gap-6 my-8" ref={fadeRef}>
      {stats.map((stat, idx) => (
        <div key={idx} className="flex flex-col items-center rounded-2xl p-6 shadow-lg bg-white/5 backdrop-blur border border-white/10 hover:scale-105 transition-all duration-300">
          <span className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">{stat.value}</span>
          <span className="text-sm text-gray-300 mt-2 font-medium tracking-wide">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
