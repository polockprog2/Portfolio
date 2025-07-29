import React from "react";
import ProfileCard from "./ProfileCard";

const Sidebar = () => (
  <aside className="bg-gray-900 text-white w-full md:w-96 min-h-screen flex flex-col items-center py-10 px-4 md:fixed md:left-20 md:top-0">
    <div className="w-full flex flex-col justify-end">
      <div className="flex justify-end pr-8">
        <ProfileCard />
      </div>
      <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-teal-900 text-white w-full md:w-96 min-h-screen flex flex-col items-center py-12 px-4 md:fixed md:left-0 md:top-0 shadow-2xl border-r-2 border-teal-400/30">
        <div className="relative mb-6">
          <img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="coding gif" className="rounded-full w-36 h-36 object-cover border-4 border-teal-400 shadow-lg transition-transform duration-300 hover:scale-105" />
          <span className="absolute bottom-2 right-2 bg-gradient-to-r from-teal-400 to-cyan-400 text-gray-900 px-2 py-1 rounded-full text-xs font-semibold shadow">Online</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-3 tracking-tight bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          👋 Hi, I'm <span className="text-teal-400">Samir Islam Polock</span>
        </h1>
        <div className="flex flex-col items-center gap-2 mb-5">
          <span className="bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-teal-300 shadow hover:bg-teal-400 hover:text-gray-900 transition-colors duration-200 cursor-pointer">Software Developer</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-cyan-300 shadow hover:bg-cyan-400 hover:text-gray-900 transition-colors duration-200 cursor-pointer">AI/ML Enthusiast</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-blue-300 shadow hover:bg-blue-400 hover:text-gray-900 transition-colors duration-200 cursor-pointer">Tech Explorer</span>
        </div>
        <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=18&duration=3000&pause=1000&color=38BDF8&center=true&vCenter=true&width=250&lines=Building+useful+software...;Exploring+AI+%26+ML...;Always+learning+new+tech!" alt="typing" className="mb-6" />
        <hr className="border-t-2 border-cyan-400 w-2/3 my-4 opacity-60 animate-fade-in delay-300" />
      </div>
    </div>
  </aside>
);

export default Sidebar;
