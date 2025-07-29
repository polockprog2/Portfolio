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
  <section className="mt-20">
    <div className="mb-10 text-center">
      <h2 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 bg-clip-text leading-none drop-shadow-lg animate-fade-in">
        DESIGN
      </h2>
      <h3 className="text-5xl font-extrabold text-gray-800 leading-none" style={{ letterSpacing: '-2px' }}>
        THOUGHTS
      </h3>
      <div className="mx-auto mt-2 w-24 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 rounded-full animate-pulse" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {blogs.map((blog, idx) => (
        <a
          key={idx}
          href={blog.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-7 bg-black/80 rounded-2xl p-7 shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-3xl group border border-white/10"
        >
          <div className="flex items-center justify-center w-20 h-20 bg-white rounded-xl mr-2 shadow-lg group-hover:scale-110 transition-transform duration-200">
            <img src={blog.icon} alt={blog.name} className="w-12 h-12 object-contain" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white mb-1 bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: 'Fira Sans, sans-serif' }}>
              {blog.name}
            </div>
            <div className="text-base text-gray-300 font-medium">{blog.description}</div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default BlogSection;
