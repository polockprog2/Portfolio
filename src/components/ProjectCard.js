import React from "react";

const ProjectCard = ({ title, description, color = "#38bdf8" }) => (
  <div style={{ background: color }}>
    <div className={`rounded-xl p-6 shadow-lg text-black font-bold text-lg flex flex-col justify-between min-h-[160px]`} >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{icon}</span>
        <span>{title}</span>
      </div>
      <div className="flex-1 text-base font-normal text-gray-900 mb-4">{description}</div>
      <div className="flex justify-end">
        <span className="bg-white rounded-full p-2 text-xl hover:bg-gray-200 transition">→</span>
      </div>
    </div>
    <div
      className={`rounded-2xl p-7 shadow-2xl text-black font-bold text-lg flex flex-col justify-between min-h-[180px] border-2 border-white/20 bg-gradient-to-br from-white/80 via-white/60 to-white/40 hover:scale-105 hover:shadow-3xl transition-transform duration-300 group`}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl group-hover:scale-125 transition-transform duration-200 drop-shadow-lg">{icon}</span>
        <span className="text-xl group-hover:text-orange-500 transition-colors duration-200">{title}</span>
      </div>
      <div className="flex-1 text-base font-normal text-gray-800 mb-4">{description}</div>
      <div className="flex justify-end">
        <span className="bg-white rounded-full p-2 text-2xl hover:bg-orange-100 hover:text-orange-500 transition shadow-md cursor-pointer">
          →
        </span>
      </div>
    </div>
  </div>
);

export default ProjectCard;
