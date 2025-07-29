import React from "react";

const GithubStats = () => (
  <section className="py-14 flex flex-col items-center bg-[#181513] rounded-3xl shadow-xl mx-2 md:mx-0 mt-16">
    <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
      📈 GitHub Analytics
    </h2>
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-6">
      <img
        src="https://github-readme-stats.vercel.app/api?username=polockprog2&show_icons=true&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=true"
        height="180px"
        alt="GitHub Stats"
        className="rounded-xl shadow-lg border border-cyan-900/40"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=polockprog2&layout=compact&theme=tokyonight&hide_border=true"
        height="180px"
        alt="Top Languages"
        className="rounded-xl shadow-lg border border-cyan-900/40"
      />
    </div>
    <img
      src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=polockprog2&theme=tokyonight"
      alt="Profile Details"
      className="mb-6 rounded-xl shadow-lg border border-cyan-900/40"
    />
    <hr className="border-t-2 border-cyan-400 w-1/2 my-8 opacity-60" />
  </section>
);

export default GithubStats;
