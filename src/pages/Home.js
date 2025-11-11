import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6">
      <motion.img
        src="/profile.png"
        alt="Profile"
        className="w-40 h-40 rounded-full shadow-lg mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I’m <span className="text-indigo-400">Kishan Kumar</span>
      </motion.h1>
      <p className="max-w-xl text-gray-300 mb-6">
        <p><b style={{color:"blue"}} >A Passionate Full Stack Developer</b></p>
      </p>
      <Link
        to="/projects"
        className="bg-indigo-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-indigo-600 transition"
      >
        View My Work
      </Link>
    </section>
  );
}
