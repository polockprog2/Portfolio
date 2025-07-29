import React from "react";
import profileImg from "../assets/pink.jpg";
import { FiLinkedin, FiMail, FiGithub } from "react-icons/fi";

const socials = [
  {
    href: "https://www.linkedin.com/in/samir-islam-polock-5a304a238",
    icon: <FiLinkedin size={24} className="text-cyan-500 group-hover:text-cyan-300 transition" />,
    label: "LinkedIn"
  },
  {
    href: "mailto:samirislampolock18@gmail.com",
    icon: <FiMail size={24} className="text-red-400 group-hover:text-red-300 transition" />,
    label: "Email"
  },
  {
    href: "https://github.com/polockprog2",
    icon: <FiGithub size={24} className="text-gray-300 group-hover:text-white transition" />,
    label: "GitHub"
  }
];

const ProfileCard = () => (
  <div
    className="rounded-3xl shadow-2xl pt-6 pb-14 px-10 w-full max-w-md flex flex-col items-center relative z-10 border border-white/20 bg-white/20 backdrop-blur-2xl"
    style={{
      background: "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.10) 100%)",
      marginTop: "-40px"
    }}
  >
    <div className="relative w-56 h-56 mb-4">
      <div className="absolute -top-6 -left-6 w-16 h-16 animate-spin-slow">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path d="M2 32c12-12 48-12 60 0" stroke="#FF6A3A" strokeWidth="3" strokeDasharray="8 6" />
        </svg>
      </div>
      <div className="rounded-2xl overflow-hidden w-full h-full bg-gradient-to-tr from-orange-500 to-red-500 flex items-center justify-center shadow-xl border-4 border-white/30">
        <img
          src={profileImg}
          alt="Samir Islam Polock"
          className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
    {/* Name and Title */}
    <div className="flex flex-col items-center justify-center mb-4">
      <h2
        className="text-4xl font-extrabold mb-1 tracking-tight bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 bg-clip-text text-transparent"
        style={{ fontFamily: "Fira Sans, sans-serif" }}
      >
        Samir Islam Polock
      </h2>
      <span className="text-lg font-semibold text-gray-700 mb-2">Software Developer</span>
      <span className="bg-orange-500 rounded-full p-2 text-white text-xl mb-2 shadow-lg animate-bounce">
        <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2v6m0 0a6 6 0 016 6c0 3.31-2.69 6-6 6s-6-2.69-6-6a6 6 0 016-6z" />
        </svg>
      </span>
      <svg width="120" height="32" viewBox="0 0 120 32" fill="none">
        <path d="M2 30c30-20 86-20 116 0" stroke="#FF6A3A" strokeWidth="3" strokeDasharray="8 6" />
      </svg>
    </div>
    <p className="text-gray-200 text-center mb-6 text-lg font-medium">
      A Software Developer who has developed countless{" "}
      <span className="text-orange-400 font-bold">innovative solutions</span>.
    </p>
    <div className="flex gap-7 mb-2">
      {socials.map((s, i) => (
        <a
          key={i}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group hover:scale-125 transition-transform duration-200 shadow-md rounded-full p-2 bg-white/60 hover:bg-orange-100"
          aria-label={s.label}
        >
          {s.icon}
        </a>
      ))}
    </div>
  </div>
);

export default ProfileCard;
