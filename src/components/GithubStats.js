import React from "react";

const GithubStats = () => (
  <section className="py-10 flex flex-col items-center">
    <h2 className="text-3xl font-bold text-center mb-6 text-cyan-400">📈 GitHub Analytics</h2>
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-4">
      <img src="https://github-readme-stats.vercel.app/api?username=polockprog2&show_icons=true&theme=gruvbox&hide_border=true&include_all_commits=true&count_private=true" height="180px" alt="GitHub Stats" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=polockprog2&layout=compact&theme=gruvbox&hide_border=true" height="180px" alt="Top Languages" />
    </div>
    <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=polockprog2&theme=tokyonight" alt="Profile Details" className="mb-6" />
    <hr className="border-t border-gray-700 w-1/2 my-8" />
  </section>
);

export default GithubStats;
