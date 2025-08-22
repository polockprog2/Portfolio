import React from "react";

const blogs = [
  {
    name: "Starting and Growing a Career in Web Design",
    description: "Apr 8, 2022 · 6min read",
    link: "https://sawad.framer.website/blog/starting-a-career-in-web-design",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  },
  {
    name: "Create a Landing Page That Performs Great",
    description: "Mar 15, 2022 · 6min read",
    link: "https://sawad.framer.website/blog/create-a-landing-page-that-performs-great",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg"
  },
];

const BlogSection = () => (
  <section className="mt-16">
    <div className="text-center mb-10">
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
        Design Thoughts
      </h2>
      <p className="text-gray-400 mt-2">Latest insights and articles</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {blogs.map((blog, idx) => (
        <a
          key={idx}
          href={blog.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white/5 backdrop-blur rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/10 hover:border-cyan-400"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow group-hover:scale-110 transition-transform">
              <img src={blog.icon} alt={blog.name} className="w-8 h-8 object-contain" />
            </div>
            <div className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{blog.name}</div>
          </div>
          <div className="text-sm text-gray-300">{blog.description}</div>
        </a>
      ))}
    </div>
  </section>
);

export default BlogSection;
