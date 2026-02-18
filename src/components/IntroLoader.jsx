import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function IntroLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
    >
      <motion.img
        src={logo}
        alt="Logo"
        className="w-10 h-10 md:w-20 h-20"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}
