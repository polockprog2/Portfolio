import React from "react";
import { useFadeInOnScroll } from "../utils/animations";

const ContactForm = () => {
  const fadeRef = useFadeInOnScroll({ duration: 1100, offset: 150 });
  return (
    <section className="mt-16 mb-8" ref={fadeRef}>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
          Let's Work Together
        </h2>
        <p className="text-gray-400 mt-2">Get in touch for collaboration</p>
      </div>
      <form
        className="bg-white/5 backdrop-blur rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto flex flex-col gap-6 border border-white/10"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            placeholder="Name"
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-lg font-medium text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition"
          />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-lg font-medium text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition"
          />
        </div>
        <input
          type="text"
          placeholder="Budget (optional)"
          className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-lg font-medium text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition"
        />
        <textarea
          placeholder="Message"
          rows="4"
          className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-lg font-medium text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white rounded-xl px-8 py-4 text-lg font-bold hover:from-cyan-400 hover:to-pink-400 transition shadow-lg border border-white/10"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
