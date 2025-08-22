import React from "react";

const Footer = () => (
  <footer className="py-10 flex flex-col items-center">
    <div className="relative w-full max-w-5xl h-16 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-orange-400/20" />
    </div>
    <p className="mt-6 text-gray-300 text-sm font-medium tracking-wide">
      &copy; {new Date().getFullYear()} <span className="text-white">Samir Islam Polock</span>. All rights reserved.
    </p>
  </footer>
);

export default Footer;
