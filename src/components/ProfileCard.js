import React from "react";
import profileImg from "../assets/profile.jpg";

const socials = [
  { href: "https://dribbble.com/", icon: <svg width="24" height="24" fill="none" stroke="#FF6A3A" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12c6.5-2.5 14.5-2.5 20 0"/><path d="M12 2c2.5 6.5 2.5 14.5 0 20"/></svg> },
  { href: "https://twitter.com/", icon: <svg width="24" height="24" fill="none" stroke="#FF6A3A" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.5v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg> },
  { href: "https://www.instagram.com/", icon: <svg width="24" height="24" fill="none" stroke="#FF6A3A" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="3.5"/><path d="M17.5 6.5h.01"/></svg> },
  { href: "mailto:samirislampolock18@gmail.com", icon: <svg width="24" height="24" fill="none" stroke="#FF6A3A" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg> },
];

const ProfileCard = () => (
  <div className="rounded-3xl shadow-2xl pt-6 pb-14 px-10 w-full max-w-md flex flex-col items-center relative z-10 border border-white/20 bg-white/20 backdrop-blur-2xl"
    style={{
      background: "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.10) 100%)",
      marginTop: "-40px"
    }}
  >
    <div className="relative w-56 h-56 mb-7">
      <div className="absolute -top-6 -left-6 w-16 h-16 animate-spin-slow">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M2 32c12-12 48-12 60 0" stroke="#FF6A3A" strokeWidth="3" strokeDasharray="8 6"/></svg>
      </div>
      <div className="rounded-2xl overflow-hidden w-full h-full bg-gradient-to-tr from-orange-500 to-red-500 flex items-center justify-center shadow-xl border-4 border-white/30">
        <img src={profileImg} alt="Samir Islam Polock" className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-300" />
      </div>
    </div>
    <h2 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 bg-clip-text text-transparent" style={{fontFamily: 'Fira Sans, sans-serif'}}>Samir Islam Polock</h2>
    <div className="flex flex-col items-center mb-4">
      <span className="bg-orange-500 rounded-full p-2 text-white text-xl mb-2 shadow-lg animate-bounce"><svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v6m0 0a6 6 0 016 6c0 3.31-2.69 6-6 6s-6-2.69-6-6a6 6 0 016-6z"/></svg></span>
      <svg width="120" height="32" viewBox="0 0 120 32" fill="none"><path d="M2 30c30-20 86-20 116 0" stroke="#FF6A3A" strokeWidth="3" strokeDasharray="8 6"/></svg>
    </div>
    <p className="text-gray-700 text-center mb-6 text-lg font-medium">A Software Developer who has developed countless <span className="text-orange-500 font-bold">innovative solutions</span>.</p>
    <div className="flex gap-7 mb-2">
      {socials.map((s, i) => (
        <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-200 shadow-md rounded-full p-1 bg-white/60 hover:bg-orange-100">
          {s.icon}
        </a>
      ))}
    </div>
  </div>
);

export default ProfileCard;
