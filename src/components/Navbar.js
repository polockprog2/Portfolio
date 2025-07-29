import React from "react";
import { FiHome, FiFolder, FiEdit2, FiMail } from "react-icons/fi"; // Modern Feather icons

const navItems = [
  { icon: <FiHome />, label: "Home" },
  { icon: <FiFolder />, label: "Portfolio" },
  { icon: <FiEdit2 />, label: "Blog" },
  { icon: <FiMail />, label: "Contact" },
];

const Navbar = () => (
  <nav className="flex items-center justify-center gap-8 bg-gradient-to-r from-black/70 via-gray-900/80 to-black/70 rounded-2xl px-8 py-4 mt-8 mx-auto w-fit shadow-2xl border border-white/10 backdrop-blur-lg">
    {navItems.map((item, idx) => (
      <button
        key={idx}
        className="flex flex-col items-center text-white hover:text-orange-400 focus:text-cyan-400 transition-colors duration-200 focus:outline-none group"
        tabIndex={0}
        aria-label={item.label}
      >
        <span className="text-3xl mb-1 group-hover:scale-125 group-focus:scale-125 transition-transform duration-200 drop-shadow-lg">
          {item.icon}
        </span>
        <span className="text-xs font-semibold tracking-wide opacity-80 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200">
          {item.label}
        </span>
      </button>
    ))}
  </nav>
);

export default Navbar;
