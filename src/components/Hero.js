import React from "react";

const Hero = () => (
  <section className="relative flex flex-col items-center justify-center py-14 px-4 overflow-hidden">
    {/* Creative background gradient blob */}
    <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-fuchsia-500 opacity-30 blur-3xl rounded-full animate-pulse" />
    <img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="coding gif" className="rounded-3xl mb-6 w-full max-w-lg shadow-2xl border-4 border-white/30" />
    <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-3 bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg animate-fade-in">
      👋 Hi there, I'm <span className="underline decoration-wavy decoration-teal-400">Samir Islam Polock</span>
    </h1>
    <p className="text-xl md:text-2xl text-center mb-5 text-white/90 font-medium animate-fade-in delay-100">
      💻 <strong>Software Developer</strong> &nbsp;|&nbsp; 🔬 <strong>AI/ML Enthusiast</strong> &nbsp;|&nbsp; 🌐 <strong>Tech Explorer</strong>
    </p>
    <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=38BDF8&center=true&vCenter=true&width=500&lines=Building+useful+software...;Exploring+AI+%26+ML...;Always+learning+new+tech!" alt="typing" className="mb-6 animate-fade-in delay-200" />
    <hr className="border-t-2 border-cyan-400 w-1/2 my-8 opacity-60 animate-fade-in delay-300" />
  </section>
);

export default Hero;
