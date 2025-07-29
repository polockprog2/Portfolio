import React from "react";
import { useFadeInOnScroll } from "../utils/animations";

const ContactForm = () => {
  const fadeRef = useFadeInOnScroll(1100, 150);
  return (
    <section className="mt-16 mb-8" ref={fadeRef}>
      <h3 className="text-3xl font-extrabold text-cyan-400 mb-6 text-center tracking-tight">
        Let's Work Together
      </h3>
      <form
        className="bg-[#181513]/80 rounded-2xl shadow-2xl p-10 max-w-2xl mx-auto flex flex-col gap-6 border border-cyan-900/40"
        style={{
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)"
        }}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            placeholder="Name"
            className="flex-1 rounded-lg border border-cyan-900/40 bg-black/30 px-6 py-3 text-lg font-medium text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
          />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 rounded-lg border border-cyan-900/40 bg-black/30 px-6 py-3 text-lg font-medium text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
          />
        </div>
        <input
          type="text"
          placeholder="Budget (optional)"
          className="rounded-lg border border-cyan-900/40 bg-black/30 px-6 py-3 text-lg font-medium text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
        />
        <textarea
          placeholder="Message"
          rows="4"
          className="rounded-lg border border-cyan-900/40 bg-black/30 px-6 py-3 text-lg font-medium text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 text-white rounded-lg px-8 py-3 text-xl font-bold hover:from-cyan-500 hover:to-pink-500 transition shadow-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
