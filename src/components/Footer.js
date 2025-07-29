import React from "react";

const Footer = () => (
  <footer className="py-6 flex flex-col items-center">
    <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer" alt="footer" className="w-full max-w-3xl" />
    <p className="mt-4 text-gray-300 text-base font-medium tracking-wide bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-fade-in">
      &copy; {new Date().getFullYear()} Samir Islam Polock. All rights reserved.
    </p>
  </footer>
);

export default Footer;
