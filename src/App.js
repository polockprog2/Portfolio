import React from "react";
import { motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import ProfileCard from "./components/ProfileCard";
import Stats from "./components/Stats";
import Navbar from "./components/Navbar";
import RecentProjects from "./components/RecentProjects";
import PremiumTools from "./components/PremiumTools";
import BlogSection from "./components/BlogSection";
import ContactForm from "./components/ContactForm";
import GithubStats from "./components/GithubStats";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black min-h-screen w-full">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[120vw] h-[120vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-cyan-500 via-fuchsia-500 to-orange-400 opacity-20 blur-3xl animate-gradient-move rounded-full" />
      </div>

      {/* Blur RGB Bar Above Navbar */}
      <div className="w-full h-4 bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400 blur-md opacity-70" />

      {/* Header/Navbar */}
      <header className="sticky top-0 z-10 w-full bg-black/80 backdrop-blur-lg shadow-lg">
        <Navbar />
      </header>

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar with ProfileCard under header */}
        <aside className="w-full md:w-96 lg:w-[420px] md:flex flex-col items-center pt-8 md:pt-12 px-4 md:px-6 border-b md:border-b-0 md:border-r border-white/10 bg-transparent
          md:sticky md:top-[88px] md:h-[calc(100vh-88px)] md:overflow-y-auto">
          <div className="max-w-xs mx-auto w-full">
            <ProfileCard />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-10 px-2 sm:px-4 md:px-8 lg:px-16 py-6 md:py-12 max-w-4xl mx-auto w-full">
          {/* Hero Section */}
          <motion.div
            className="mt-6 md:mt-12 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-full px-0 sm:px-8 py-6 sm:py-10 flex flex-col items-center">
              <div className="mb-4 flex flex-col sm:flex-row gap-4 items-center">
                <span className="bg-black/40 rounded-full px-4 py-2 text-white text-3xl sm:text-4xl font-extrabold shadow">
                  SOFTWARE
                </span>
                <span className="bg-black/20 rounded-full px-4 py-2 text-gray-400 text-3xl sm:text-4xl font-extrabold shadow">
                  ENGINEER
                </span>
              </div>
              <p className="text-gray-200 text-base sm:text-lg max-w-xl mb-6 text-center">
                Passionate about creating intuitive and engaging user experiences.
                <br />
                Specialize in transforming ideas into beautifully crafted products.
              </p>
              <Stats />
            </div>
          </motion.div>

          {/* Sections */}
          <section className="p-0 sm:p-0">
            <RecentProjects />
          </section>
          <section className="p-0 sm:p-0">
            <PremiumTools />
          </section>
          <section className="p-0 sm:p-0 bg:black/50 backdrop-blur-lg rounded-lg shadow-lg border border-white/10">
            <GithubStats />
          </section>
          <section className="p-0 sm:p-0">
            <BlogSection />
          </section>
          <section className="p-0 sm:p-0">
            <ContactForm />
          </section>

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
