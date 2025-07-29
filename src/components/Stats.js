import React from "react";
import { useFadeInOnScroll } from "../utils/animations";

const stats = [
  { value: "+12", label: "YEARS OF EXPERIENCE" },
  { value: "+46", label: "PROJECTS COMPLETED" },
  { value: "+20", label: "WORLDWIDE CLIENTS" },
];

const Stats = () => {
  const fadeRef = useFadeInOnScroll(700, 0);
  return (
    <div className="flex gap-8 my-8" ref={fadeRef}>
      {stats.map((stat, idx) => (
        <div key={idx} className="flex flex-col items-center rounded-2xl p-8 shadow-2xl bg-gradient-to-br from-orange-400/30 via-yellow-200/20 to-fuchsia-400/20 border-2 border-white/20 backdrop-blur-xl hover:scale-105 transition-transform duration-300">
          <span className="text-6xl font-extrabold text-white drop-shadow-lg tracking-tight bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 bg-clip-text text-transparent" style={{fontFamily: 'Fira Sans, sans-serif'}}>{stat.value}</span>
          <span className="text-lg text-gray-200 mt-3 font-semibold tracking-wide" style={{fontFamily: 'Fira Sans, sans-serif'}}>{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
