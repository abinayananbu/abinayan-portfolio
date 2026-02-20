import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import myBackground from "../assets/my-background.jpeg";
import LiquidEther from "../components/LiquidEther";
import { Navigate, useNavigate } from "react-router-dom";

export default function Home() {
  const ref = useRef(null);
  const navigate = useNavigate()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yLines = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${myBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Liquid Layer */}
      <div className="absolute inset-0 z-10 opacity-50 pointer-events-none">
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={22}
          cursorSize={90}
          isViscous
          viscous={28}
          iterationsViscous={28}
          iterationsPoisson={28}
          resolution={0.6}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={3}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Soft Overlay (Balanced) */}
      <div className="absolute inset-0 z-20 bg-black/60" />

      {/* Cinematic Radial Glow */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/20 to-black/80" />

      {/* Animated Lines */}
      <motion.div
        style={{ y: yLines }}
        className="absolute inset-0 z-20 opacity-30 pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 w-[1px] h-40 bg-gradient-to-b from-indigo-400 to-transparent" />
        <div className="absolute top-20 right-1/4 w-[1px] h-60 bg-gradient-to-b from-cyan-400 to-transparent" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/50 rounded-full"
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + i * 6}%`,
            }}
            animate={{
              y: [-12, 12, -12],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-30 max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
            Abinayan
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Full Stack Developer building scalable SaaS platforms,
          business automation systems, and modern web applications.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={() => navigate("/about")}
          className="
            mt-8 text-lg px-5 py-3 rounded-full
            bg-indigo-500/10 text-indigo-300
            border border-indigo-500 backdrop-blur-md
            transition-all duration-200
            hover:scale-95 active:scale-90
            md:hidden
          "
        >
          More about me
        </motion.button>
      </motion.div>

      {/* SOCIAL ICONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed bottom-8 right-8 flex gap-4 z-40"
      >
        {[
          { icon: Instagram, link: "https://www.instagram.com/abinayan.aj" },
          { icon: Github, link: "https://github.com/abinayananbu" },
          { icon: Linkedin, link: "https://linkedin.com/in/yourusername" },
          { icon: Twitter, link: "https://twitter.com/yourusername" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:bg-indigo-500/20 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30"
          >
            <item.icon size={18} />
          </a>
        ))}
      </motion.div>
    </section>
  );
}
