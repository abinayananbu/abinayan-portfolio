import { motion } from "framer-motion";
import myPhoto from "../assets/my-photo.jpg";

export default function About() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full top-20 left-20" />

      {/* Large Background Text */}
      <h1 className="absolute text-[180px] font-bold text-white/5 -z-10 left-10 top-10 select-none">
        ABOUT ME
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 mb-14 md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative group">

            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-2xl scale-110" />

            {/* Image Container */}
            <div className="
              relative
              w-96 h-96
              rounded-full
              overflow-hidden
              border-4 border-white/10
              backdrop-blur-xl
              shadow-2xl
              transition-transform duration-500
              group-hover:scale-105
            ">
              <img
                src={myPhoto}
                alt="Abinayan"
                className="w-full h-full object-cover object-[center_90%] scale-100"
              />
            </div>

          </div>
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8"
        >
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
              Abinayan
            </span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            I have strong experience building scalable web applications
            using React, Django, PostgreSQL, and REST APIs.
            <br /><br />
            My focus is on writing clean architecture, performance-optimized
            systems, and business-driven solutions that scale.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {["React", "Django", "PostgreSQL", "REST APIs", "System Design"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
