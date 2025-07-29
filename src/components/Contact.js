import React from "react";
import { FiLinkedin, FiMail, FiGithub } from "react-icons/fi";

const Contact = () => (
  <section className="py-14 flex flex-col items-center bg-[#181513] rounded-3xl shadow-xl mx-2 md:mx-0">
    <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
      🌐 Connect with Me
    </h2>
    <div className="flex gap-8 mb-8">
      <a
        href="https://www.linkedin.com/in/samir-islam-polock-5a304a238"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center group"
        title="LinkedIn"
      >
        <div className="bg-cyan-700/20 p-4 rounded-full group-hover:bg-cyan-400/30 transition">
          <FiLinkedin className="text-3xl text-cyan-400 group-hover:text-cyan-300 transition" />
        </div>
        <span className="mt-2 text-cyan-200 text-sm font-semibold group-hover:text-cyan-400 transition">LinkedIn</span>
      </a>
      <a
        href="mailto:samirislampolock18@gmail.com"
        className="flex flex-col items-center group"
        title="Gmail"
      >
        <div className="bg-red-700/20 p-4 rounded-full group-hover:bg-red-400/30 transition">
          <FiMail className="text-3xl text-red-400 group-hover:text-red-300 transition" />
        </div>
        <span className="mt-2 text-red-200 text-sm font-semibold group-hover:text-red-400 transition">Gmail</span>
      </a>
      <a
        href="https://github.com/polockprog2"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center group"
        title="GitHub"
      >
        <div className="bg-gray-700/20 p-4 rounded-full group-hover:bg-gray-400/30 transition">
          <FiGithub className="text-3xl text-gray-300 group-hover:text-white transition" />
        </div>
        <span className="mt-2 text-gray-200 text-sm font-semibold group-hover:text-white transition">GitHub</span>
      </a>
    </div>
    <hr className="border-t-2 border-cyan-400 w-1/2 my-8 opacity-60 animate-fade-in delay-300" />
    <p className="text-gray-400 text-center text-base">
      Feel free to reach out for collaboration, questions, or just to connect!
    </p>
  </section>
);

export default Contact;
