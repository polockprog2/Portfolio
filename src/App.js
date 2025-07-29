import React from "react";
import { motion } from "framer-motion";
import ProfileCard from "./components/ProfileCard";
import Stats from "./components/Stats";
import Navbar from "./components/Navbar";
import RecentProjects from "./components/RecentProjects";
import PremiumTools from "./components/PremiumTools";
import BlogSection from "./components/BlogSection";
import ContactForm from "./components/ContactForm";
import GithubStats from "./components/GithubStats";


function App() {
  return (
    <motion.div
      className="bg-[#181513] min-h-screen flex flex-col md:flex-row relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Sidebar/Profile */}
      <aside className="hidden absolute left-[20%] md:flex md:flex-col md:w-80 lg:w-96 min-h-screen py-12 px-6 sticky top-0 mt-8">
        {/* Added mt-8 to push ProfileCard a bit lower */}
        <ProfileCard />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-4 md:px-8 lg:px-12 py-12 max-w-3xl mx-auto w-full">
        {/* Navbar */}
        <aside className="justify-end flex">
          <Navbar/>
        </aside>
        {/* Hero Section */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="mb-2 flex gap-4">
            <span className="bg-black/40 rounded-full px-3 py-2 text-white text-4xl font-extrabold shadow">
              SOFTWARE
            </span>
            <span className="bg-black/20 rounded-full px-3 py-2 text-gray-400 text-4xl font-extrabold shadow">
              ENGINEER
            </span>
          </div>
          <p className="text-gray-300 text-lg max-w-xl mb-6">
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
          </p>
          <Stats />
        </motion.div>

        {/* Sections */}
        <RecentProjects />
        <PremiumTools />
        <GithubStats/>
        <BlogSection />
        <ContactForm />
        
        
        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm">  
          © {new Date().getFullYear()} Samir Islam Polock. All rights reserved.
        </footer>
        <hr className="border-t-2 border-cyan-400 w-1/2 my-10 opacity-60 animate-fade-in delay-300" />

       
      </main>
    </motion.div>
  );
}

export default App;
