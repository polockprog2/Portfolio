import React from "react";

const GithubStats = () => (
  <section className="py-14">
    <div className="text-center mb-8">
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
        📈 GitHub Analytics
      </h2>
      <p className="text-gray-400 mt-2">Highlights from my GitHub activity</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10 shadow">
        <img
          src="https://github-readme-stats.vercel.app/api?username=polockprog2&show_icons=true&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=true"
          alt="GitHub Stats"
          className="rounded-xl w-full"
        />
      </div>
      <div className="bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10 shadow">
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=polockprog2&layout=compact&theme=tokyonight&hide_border=true"
          alt="Top Languages"
          className="rounded-xl w-full"
        />
      </div>
      <div className="md:col-span-2 bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10 shadow">
        <img
          src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=polockprog2&theme=tokyonight"
          alt="Profile Details"
          className="rounded-xl w-full"
        />
      </div>
    </div>
    <div className="mt-6 flex justify-center">
      <a href="https://github.com/polockprog2" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-pink-500 transition shadow-lg border border-white/10">Visit GitHub</a>
    </div>
  </section>
);

export default GithubStats;
