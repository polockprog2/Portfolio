import React from "react";
import { useFadeInOnScroll } from "../utils/animations";

const ContactForm = () => {
  const fadeRef = useFadeInOnScroll(1100, 150);
  return (
    <section className="mt-16 mb-8" ref={fadeRef}>
    <h3 className="text-2xl font-bold text-white mb-6">LET'S WORK TOGETHER</h3>
    <form className="bg-white/80 rounded-xl shadow-2xl p-10 max-w-2xl mx-auto flex flex-col gap-6" style={{
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: "1.5px solid rgba(255,255,255,0.18)"
    }}>
      <input type="text" placeholder="Name" className="rounded-lg border border-gray-300 px-6 py-3 text-lg font-medium focus:outline-none focus:border-orange-500" />
      <input type="email" placeholder="Email" className="rounded-lg border border-gray-300 px-6 py-3 text-lg font-medium focus:outline-none focus:border-orange-500" />
      <input type="text" placeholder="Budget" className="rounded-lg border border-gray-300 px-6 py-3 text-lg font-medium focus:outline-none focus:border-orange-500" />
      <textarea placeholder="Message" rows="4" className="rounded-lg border border-gray-300 px-6 py-3 text-lg font-medium focus:outline-none focus:border-orange-500" />
      <button type="submit" className="bg-orange-500 text-white rounded-lg px-8 py-3 text-xl font-bold hover:bg-orange-600 transition">Submit</button>
    </form>
    <div className="text-center text-gray-400 mt-4 text-xs">
      Made by Templyo | Powered by Framer
    </div>
    </section>
  );
};

export default ContactForm;
