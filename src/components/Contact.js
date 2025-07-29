import React from "react";

const Contact = () => (
  <section className="py-10 flex flex-col items-center">
    <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">🌐 Connect with Me</h2>
    <div className="flex gap-6 mb-6">
      <a href="https://www.linkedin.com/in/samir-islam-polock-5a304a238" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
      </a>
      <a href="mailto:samirislampolock18@gmail.com">
        <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
      </a>
    </div>
    <hr className="border-t-2 border-cyan-400 w-1/2 my-8 opacity-60 animate-fade-in delay-300" />
  </section>
);

export default Contact;
