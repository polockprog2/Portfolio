import React, { useEffect, useState } from "react";
import { FiHome, FiFolder, FiEdit2, FiMail } from "react-icons/fi"; // Modern Feather icons

const navItems = [
  { icon: <FiHome />, label: "Home", target: "home" },
  { icon: <FiFolder />, label: "Portfolio", target: "portfolio" },
  { icon: <FiEdit2 />, label: "Blog", target: "blog" },
  { icon: <FiMail />, label: "Contact", target: "contact" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sectionIds = navItems.map(n => n.target);
    const observers = [];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(id);
        });
      }, { root: null, threshold: 0.5 });
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <nav className="flex items-center justify-center gap-2 bg-white/5 rounded-full px-2 py-2 mt-8 mx-auto w-fit shadow-2xl border border-white/10 backdrop-blur-lg">
      {navItems.map((item, idx) => {
        const isActive = active === item.target;
        return (
          <button
            key={idx}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 focus:outline-none ${isActive ? 'bg-white/20 text-white shadow' : 'text-white/80 hover:text-white'}`}
            tabIndex={0}
            aria-label={item.label}
            onClick={() => scrollToId(item.target)}
          >
            <span className={`text-xl ${isActive ? 'scale-110' : ''}`}>
              {item.icon}
            </span>
            <span className="text-sm font-semibold tracking-wide">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;
