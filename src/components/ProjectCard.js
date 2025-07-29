import React from "react";

const ProjectCard = ({
  title,
  description,
  image,
  color = "#38bdf8"
}) => (
  <div
    className="rounded-2xl shadow-2xl flex flex-col justify-between min-h-[260px] border-2 border-white/20 bg-gradient-to-br from-white/80 via-white/60 to-white/40 hover:scale-105 hover:shadow-3xl transition-transform duration-300 group overflow-hidden"
    style={{ background: color }}
  >
    {image && (
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-t-2xl mb-3"
        loading="lazy"
      />
    )}
    <div className="flex flex-col flex-1 px-7 py-5">
      <div className="mb-3">
        <span className="text-xl font-bold group-hover:text-orange-500 transition-colors duration-200">{title}</span>
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
