import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import myBackground from "../assets/my-background.jpeg";

export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yLines = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${myBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Soft Glow */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full top-20 left-1/2 -translate-x-1/2" />

      {/* Animated Lines */}
      <motion.div
        style={{ y: yLines }}
        className="absolute inset-0 opacity-20 pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 w-[1px] h-40 bg-gradient-to-b from-emerald-400 to-transparent" />
        <div className="absolute top-20 right-1/4 w-[1px] h-60 bg-gradient-to-b from-cyan-400 to-transparent" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/40 rounded-full"
            style={{
              left: `${15 + i * 6}%`,
              top: `${20 + i * 5}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
        >
          Hi, I'm{" "}
          <span
            className="
              bg-gradient-to-r from-indigo-400 to-violet-500
              bg-clip-text text-transparent
            "
          >
            Abinayan
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Full Stack Developer specializing in scalable SaaS systems,
          business automation platforms, and modern web architecture.
        </motion.p>
      </motion.div>

      {/* Floating Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed bottom-8 right-8 flex gap-4 z-50"
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
            className="
              w-9 h-9
              flex items-center justify-center
              rounded-xl
              bg-white/10
              backdrop-blur-lg
              border border-white/20
              text-white
              transition-all duration-300
              hover:bg-indigo-500/20
              hover:scale-110
              hover:shadow-lg hover:shadow-indigo-500/30
            "
          >
            <item.icon size={20} />
          </a>
        ))}
      </motion.div>
    </section>
  );
}
